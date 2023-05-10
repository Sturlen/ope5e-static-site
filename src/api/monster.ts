import { z } from "zod"

export const MonsterSchema = z
    .object({
        slug: z.string(),
        name: z.string(),
        size: z.string(),
        type: z.string(),
        armor_class: z.number(),
        alignment: z.string(),
        challenge_rating: z.string(),
        actions: z
            .string()
            .or(z.array(z.object({ name: z.string(), desc: z.string() }))),
        document__license_url: z.string(),
        document__slug: z.string(),
        document__title: z.string(),
        strength: z.number(),
        dexterity: z.number(),
        constitution: z.number(),
        intelligence: z.number(),
        wisdom: z.number(),
        charisma: z.number(),
        img: z.string().optional(),
    })
    .transform((m) => ({
        ...m,
        stats: {
            str: m.strength,
            dex: m.dexterity,
            con: m.constitution,
            int: m.intelligence,
            wis: m.wisdom,
            chr: m.charisma,
        } as const,
    }))

export type Stat = "str" | "dex" | "con" | "int" | "wis" | "chr"

export type Monster = z.infer<typeof MonsterSchema>
