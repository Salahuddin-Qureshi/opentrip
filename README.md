# OpenTrip

A complete, responsive React + Vite travel homepage based on the supplied homepage design, using the supplied local photography.

## Development

```sh
npm install
npm run dev
```

```sh
npm run build     # Production build in dist/
npm run format    # Format the source files
npm test          # Verify rendering, images, links and search filters
```

## Component structure

- `src/pages/Home/Home.jsx` composes sections and coordinates search, package filters and dialogs.
- `src/components/common/` contains shared buttons, icons, section headings, links, filter controls and the accessible native dialog.
- `src/components/cards/` contains reusable destination, experience, package, journal and testimonial cards.
- `src/components/home/` contains individual homepage sections. Each section renders cards from shared data.
- `src/components/layout/` contains the responsive header and footer.
- `src/features/trips/TripDialog.jsx` contains the reusable trip preference planner.
- `src/data/` contains destination, package, experience, article and testimonial content.
- `src/styles/variables.css` contains design tokens; `src/pages/Home/Home.css` provides homepage section and card styles.
- `public/images/` contains local imagery, so the page does not depend on a remote image provider.

## Homepage

Hero and search, destination mosaic, travel experiences, filterable packages, brand story, benefits, journal articles, traveller stories, planning banner and footer.

Navigation links target real page sections. Destination cards and package cards open the same trip planner. Experience choices filter packages. Search combines destination and travel category; dates and traveller counts are retained as preferences, not live availability criteria. Journal cards open readable articles, and the traveller-story arrows cycle the sample stories.

This is a frontend implementation. Package prices and testimonials are labelled as illustrative. The trip planner produces a local summary, with no booking or payment. Newsletter submission explains that signup is not yet available and does not store an email. Contact information and social accounts have not been invented. Google Fonts loads DM Sans with a system font fallback.

## Accessibility

Semantic page sections, labelled form controls, keyboard-accessible buttons, visible focus states, a skip link, reduced-motion handling, and a native modal dialog with focus restoration and Escape support. Responsive breakpoints support phone, tablet and desktop layouts.
