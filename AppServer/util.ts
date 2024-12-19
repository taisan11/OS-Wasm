import type {apptype} from "./schema.ts"

export async function addapp(kv:Deno.Kv,d:apptype){
    const primaryKey = ["app", d.Name,d.Version];
    const latestKey = ["app", d.Name];
    const hashkey = ["app-hash", d.hash];
    await kv.atomic()
        .check({key:primaryKey,versionstamp:null})
        .check({key:latestKey,versionstamp:null})
        .check({key:hashkey,versionstamp:null})
        .set(primaryKey,d)
        .set(latestKey,d.Version)
        .set(hashkey,d.Version)
        .commit()
}