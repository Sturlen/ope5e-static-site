import { readFileSync, writeFileSync } from "fs"
import slugify from "slugify"
import { ElderberryInnIcons } from "./elderberry-inn-icons"

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
] as const

const groupBy = (values, keyFinder) => {
    // using reduce to aggregate values
    return values.reduce((a, b) => {
        // depending upon the type of keyFinder
        // if it is function, pass the value to it
        // if it is a property, access the property
        const key =
            typeof keyFinder === "function" ? keyFinder(b) : b[keyFinder]

        // aggregate values based on the keys
        if (!a[key]) {
            a[key] = [b]
        } else {
            a[key] = [...a[key], b]
        }

        return a
    }, {})
}

const typeset = new Set()
const subtypeset = new Set()

const transformers = new Map([
    [
        "monsters",
        (monsters) => {
            const images_data = JSON.parse(
                readFileSync("./scripts/monster_images.json", {
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

                typeset.add(mon.type)
                subtypeset.add(mon.subtype)
                return mon
            })

            console.log(typeset, subtypeset)

            return monsters_w_images
        },
    ],
    [
        "spells",
        (spells) =>
            spells.map((spell) => {
                const slug = slugify(spell.name, {
                    lower: true,
                    strict: true,
                    trim: true,
                })
                const icon = ElderberryInnIcons[slug]
                spell.icon = icon

                if (spell.dnd_class.length > 0) {
                    spell.classes =
                        spell.dnd_class?.split(", ").map((cls) =>
                            slugify(cls, {
                                lower: true,
                                strict: true,
                                trim: true,
                            })
                        ) ?? []
                } else {
                    spell.classes = []
                }
                return spell
            }),
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
        const content = JSON.stringify(item, null, 4)
        writeFileSync(`./src/content/${endpoint}/${slug}.json`, content, {
            encoding: "utf-8",
        })
    })
})
