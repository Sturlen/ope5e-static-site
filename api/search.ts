import Fuse from "fuse.js"

export const prerender = false

export const config = {
    runtime: "serverless",
}

export default async (request: Request) => {
    const url = new URL(request.url)
    const name = url.searchParams.get("name") ?? "Creature"

    if (!name) return new Response("Query must not be empty", { status: 400 })
    const monster_url = "https://" + url.host + "/monsters.json"
    console.log("monster_url", monster_url)
    const entries: any[] = await (await fetch(monster_url)).json()

    console.log("ent", entries)

    const fuse = new Fuse(entries, { keys: ["name"] })

    return new Response(JSON.stringify(fuse.search(name), null, 4))
}
