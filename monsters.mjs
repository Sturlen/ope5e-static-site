import { readFileSync, writeFileSync } from "fs"
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
const image_map = new Map(paths)
console.log(image_map)

monsters.map((mon) => {
    const slug = slugify(mon.name, { lower: true, strict: true, trim: true })
    mon.img = image_map.get(slug)
    writeFileSync(`./src/api/monsters/${mon.slug}.json`, JSON.stringify(mon), {
        encoding: "utf-8",
    })
})
