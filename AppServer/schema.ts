import * as v from "valibot";

export const appschema = v.object({
    Name: v.string(),
    Version: v.pipe(v.string(), v.regex(/^(\d+\.)?(\d+\.)?(\*|\d+)$/)),
    // hash: v.pipe(v.string(), v.hash(["sha512"])),
    hash: v.string(),
    author: v.pipe(v.string(), v.maxLength(80)),
    license: v.optional(v.pipe(v.string(), v.maxLength(80))),
    description: v.optional(v.pipe(v.string(), v.maxLength(500))),
})
export type apptype = v.InferInput<typeof appschema>;