import Fuse from "fuse.js"

export const prerender = false

export const config = {
    runtime: "edge",
}

const monster_url = "https://" + process.env.VERCEL_URL + "/monsters.json"
const entries: any[] = await (await fetch(monster_url)).json()
const fuse = new Fuse(entries, { keys: ["name"] })
console.log("monster_url", monster_url)

console.log("ent", entries)

export default async (request: Request) => {
    const url = new URL(request.url)
    const name = url.searchParams.get("name") ?? "Creature"

    if (!name) return new Response("Query must not be empty", { status: 400 })

    return new Response(JSON.stringify(fuse.search(name), null, 4))
}
