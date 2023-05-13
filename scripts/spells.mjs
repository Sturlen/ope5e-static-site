import { readFileSync, writeFileSync } from "fs"
import { z } from "zod"
import slugify from "slugify"
const spells = JSON.parse(
    readFileSync("./cache/spells.json", { encoding: "utf-8" })
)

writeFileSync(`./src/api/spells.json`, JSON.stringify(spells), {
    encoding: "utf-8",
})
