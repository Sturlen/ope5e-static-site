import { defineConfig } from "astro/config"
import vercel from "@astrojs/vercel/static"
import react from "@astrojs/react"

import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
    output: "static",
    adapter: vercel({
        analytics: true,
        webAnalytics: true,
        speedInsights: true,
    }),
    experimental: {
        contentCollectionCache: false,
    },
    site: "https://5e.spetland.no",
    integrations: [react(), sitemap()],
})
