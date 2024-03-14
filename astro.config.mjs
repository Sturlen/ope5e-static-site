import { defineConfig } from "astro/config"
import vercel from "@astrojs/vercel/serverless"
import react from "@astrojs/react"

import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
    output: "static",
    adapter: vercel({
        analytics: { enabled: true },
        webAnalytics: { enabled: true },
        speedInsights: { enabled: true },
    }),
    experimental: {
        contentCollectionCache: false,
    },
    site: "https://5e.spetland.no",
    integrations: [react(), sitemap()],
})
