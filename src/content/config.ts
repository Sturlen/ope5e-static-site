// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content"
import { MonsterSchema } from "../api/monster"
import { SpellSchema } from "../api/spell"
import { Class5eSchema } from "../api/class"
// 2. Define your collection(s)
const monsters = defineCollection({
    type: "data",
    schema: MonsterSchema,
})
const spells = defineCollection({
    type: "data",
    schema: SpellSchema,
})
const classes = defineCollection({
    type: "data",
    schema: Class5eSchema,
})
const pages = defineCollection({
    type: "content",
    schema: z.object({ title: z.string() }),
})
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    monsters: monsters,
    spells: spells,
    classes: classes,
    pages: pages,
}
