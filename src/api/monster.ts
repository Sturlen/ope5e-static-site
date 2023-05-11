import { z } from "zod"

const SpeedSchema = z.record(z.union([z.number(), z.boolean(), z.string()]))

export const MonsterSchema = z
    .object({
        slug: z.string(),
        name: z.string(),
        size: z.string(),
        type: z.string(),
        subtype: z.string().nullish(),
        armor_class: z.number(),
        speed: SpeedSchema,
        alignment: z.string(),
        challenge_rating: z.string(),
        actions: z
            .string()
            .or(z.array(z.object({ name: z.string(), desc: z.string() }))),
        document__license_url: z.string(),
        document__slug: z.string(),
        document__title: z.string(),
        page_no: z.number().nullish(),
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
