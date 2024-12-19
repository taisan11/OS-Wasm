import { Hono } from 'hono'
import { appschema } from "./schema.ts"
import { safeParse } from "valibot";
import {DenoKv} from "@evex/denokv"
import { addapp } from "./util.ts";

const app = new Hono()
// const kv = new DenoKv<
//   [
//     { key: ["app", string, string, string], schema: apptype }
//   ]
// >();
const kv = await Deno.openKv()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get("/serch", async (c) => {
  const { q } = c.req.query()
  // const kvKey: Deno.KvKey = ["app"]
  const result = await kv.list({prefix:["app"]})
  console.log(result)
  // const result = await kv.get(["app"])
  return c.json(result)
})

app.post('/newapp',async (c) => {
  const data = await c.req.json()
  const result = safeParse(appschema, data)
  if (!result.success) {return c.json(result.issues)}
  const d = result.output
  kv.get(["app",d.Name,d.Version]).then((v) => {
    if (v) {return c.json({error:"App already exists"})}
  })
  await addapp(kv,d)
  return c.json({success:true})
})

Deno.serve(app.fetch)
