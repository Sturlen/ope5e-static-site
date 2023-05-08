import {readFileSync, writeFileSync} from "fs"
const monsters = JSON.parse(readFileSync("./src/api/monsters.json", {encoding: "utf-8"}))


monsters.map(mon => {
    writeFileSync(`./src/api/monsters/${mon.slug}.json`, JSON.stringify(mon), {encoding: "utf-8"})
})