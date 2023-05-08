import { z } from "zod";

export const MonsterSchema = z.object({
    slug: z.string(),
    name: z.string(),
    size: z.string(),
    type: z.string(),
    armor_class: z.number(),
    alignment: z.string(),
    challenge_rating: z.string(),
    actions: z.string().or(z.array(z.object({name: z.string(), desc: z.string()}))),
    document__license_url: z.string(),
    document__title: z.string()
})

export type Monster = z.infer<typeof MonsterSchema>