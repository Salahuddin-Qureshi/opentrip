import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import fs from 'node:fs'
import path from 'node:path'

// One-time asset sync: copies generated images into /public so Vite can serve them.
// Safe to remove once these files exist in public/images (they are only copied if the source exists).
const BRAIN = 'C:/Users/DELL/.gemini/antigravity/brain/b739627d-1393-45b8-a527-7f6c36a05867'

const ASSET_COPIES = [
  ['.user_uploaded/media_1794817249383_b9cd8a75.png', 'public/images/logo.png'],
  ['luxury_travel_hero_airplane_seamless_1794809031577.jpg', 'public/images/hero-airplane-right.jpg'],
  ['holy_kaaba_hero_banner_1794818062375.jpg', 'public/images/cities/makkah-kaaba-wide.jpg'],
  ['holy_kaaba_hero_banner_1794818062375.jpg', 'public/images/cities/makkah-kaaba.jpg'],
  ['open_trip_hero_banner_1794818837543.jpg', 'public/images/packages-hero-wide.jpg'],
  ['explore_destinations_hero_1794819807200.jpg', 'public/images/destinations-hero-wide.jpg'],
  ['travel_blog_hero_banner_1794819908836.jpg', 'public/images/guides-hero-wide.jpg'],
  ['baku_waterfront_flame_towers_1794819795958.jpg', 'public/images/destinations/azerbaijan.jpg'],
  ['kuala_lumpur_skyline_sunset_1794819810711.jpg', 'public/images/destinations/malaysia.jpg'],
  ['positano_amalfi_coast_1794819808617.jpg', 'public/images/destinations/italy.jpg'],
  ['santorini_oia_sunset_1794819807566.jpg', 'public/images/destinations/greece.jpg'],
]

for (const [from, to] of ASSET_COPIES) {
  try {
    const src = `${BRAIN}/${from}`
    const dest = path.resolve(to)
    if (fs.existsSync(src)) {
      fs.mkdirSync(path.dirname(dest), { recursive: true })
      fs.copyFileSync(src, dest)
    }
  } catch (e) {
    console.error('Asset copy error:', from, e)
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
