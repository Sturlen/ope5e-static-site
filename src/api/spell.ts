import { z } from "zod"

export const SpellSchema = z.object({
    slug: z.string(),
    name: z.string(),
    desc: z.string(),
    higher_level: z.string().nullish(),
    page: z.string(),
    range: z.string(),
    target_range_sort: z.number(),
    requires_verbal_components: z.boolean(),
    requires_somatic_components: z.boolean(),
    requires_material_components: z.boolean(),
    material: z.string().nullish(),
    can_be_cast_as_ritual: z.boolean(),
    // ritual: z.string(),
    duration: z.string(),
    // concentration: z.string(),
    requires_concentration: z.boolean(),
    casting_time: z.string(),
    // level: z.string(),
    level_int: z.number().int(),
    spell_level: z.number().int(),
    school: z.string(),
    dnd_class: z.string(),
    archetype: z.string(),
    circles: z.string(),
    document__slug: z.string(),
    document__title: z.string(),
    document__license_url: z.string(),
    document__url: z.string(),
})

export type Spell = z.infer<typeof SpellSchema>
