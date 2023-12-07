import { readFileSync, writeFileSync } from "fs"
import slugify from "slugify"

const endpoints = [
    "monsters",
    "spells",
    "documents",
    "backgrounds",
    "planes",
    "sections",
    "feats",
    "conditions",
    "races",
    "classes",
    "magicitems",
    "weapons",
    "armor",
]

const transformers = new Map([
    [
        "monsters",
        (monsters) => {
            const images_data = JSON.parse(
                readFileSync("./src/api/monster_images.json", {
                    encoding: "utf-8",
                })
            )

            const paths = images_data.tree.map(({ path }) => [
                path.split(".")[0],
                `https://github.com/Sturlen/open5e-api/blob/monster-images/static/img/monsters/${
                    path.split(".")[0]
                }.png?raw=true`,
            ])

            const image_map = new Map(paths)

            const monsters_w_images = monsters.map((mon) => {
                const slug = slugify(mon.name, {
                    lower: true,
                    strict: true,
                    trim: true,
                })
                mon.img = image_map.get(slug)
                return mon
            })
            return monsters_w_images
        },
    ],
])

function identity(param) {
    return param
}

endpoints.forEach((endpoint) => {
    const input = JSON.parse(
        readFileSync(`./cache/${endpoint}.json`, { encoding: "utf-8" })
    )
    const transformer_func = transformers.get(endpoint) ?? identity
    /** @type Array<Record<string, any>> */
    const output = transformer_func(input)

    output.forEach((item) => {
        const slug = item.slug
        const content = JSON.stringify(item)
        writeFileSync(`./src/content/${endpoint}/${slug}.json`, content, {
            encoding: "utf-8",
        })
    })
})
