# OpenTrip

A responsive React + Vite implementation of the hero in `../homepage.png`, using the supplied local photography. Only the hero and its overlapping trip search are currently rendered.

## Run

```sh
npm install
npm run dev
```

`npm run build` produces the production site in `dist/`.

## Structure

- `src/components/common/` — shared Button and SVG Icon primitives
- `src/components/layout/` — responsive navigation and branding
- `src/components/home/` — HeroSection, DestinationSelector, TripSearch and their styles
- `src/data/destinations.js` — shared destination names, captions and images
- `src/pages/Home/Home.jsx` — page composition and trip-search focus behavior
- `src/styles/variables.css` — shared design tokens
- `public/images/` — supplied hero photograph and destination images

Destination controls switch the featured photograph. The trip search collects preferences and displays a local summary; it does not book or send a request. Packages, About and Contact are disabled until those sections are implemented. Earlier page sections remain in the source files but are not mounted. Google Fonts supplies DM Sans with a local sans-serif fallback.
