import Fuse from "fuse.js"
import Monsters from "../cache/monsters.json"

export const prerender = false

const fuse = new Fuse(Monsters)

export default async (request: Request) => {
    const url = new URL(request.url)
    const name = url.searchParams.get("name") ?? "Creature"

    if (!name) return new Response("Query must not be empty", { status: 400 })
    const monsters = Monsters.filter((monster) =>
        monster.name.toLowerCase().includes(name.toLowerCase())
    )

    const entries = monsters

    return new Response(JSON.stringify(entries, null, 4))
}
