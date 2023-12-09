// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content"
import { MonsterSchema } from "../api/monster"
import { SpellSchema } from "../api/spell"
// 2. Define your collection(s)
const monsters = defineCollection({
    type: "data",
    schema: MonsterSchema,
})
const spells = defineCollection({
    type: "data",
    schema: SpellSchema,
})
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    monsters: monsters,
    spells: spells,
}
