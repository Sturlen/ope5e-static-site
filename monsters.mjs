import { readFileSync, writeFileSync } from "fs"
import { z } from "zod"
import slugify from "slugify"
const monsters = JSON.parse(
    readFileSync("./src/api/monsters.json", { encoding: "utf-8" })
)
const images_data = JSON.parse(
    readFileSync("./src/api/monster_images.json", { encoding: "utf-8" })
)

const paths = images_data.tree.map(({ path }) => [
    path.split(".")[0],
    `https://github.com/Sturlen/open5e-api/blob/monster-images/static/img/monsters/${
        path.split(".")[0]
    }.png?raw=true`,
])

export const SpeedSchema = z.record(
    z.union([z.number(), z.boolean(), z.string()])
)

const image_map = new Map(paths)
console.log(image_map)

monsters.map((mon) => {
    console.log(mon.name)
    SpeedSchema.parse(mon.speed)
})
