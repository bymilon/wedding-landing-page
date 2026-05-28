# Wedding Landing Page

A premium open-source wedding landing page built with React, TypeScript, Vite, Tailwind CSS, Motion, and Lucide icons. It is designed as a polished single-page wedding site with venue details, accommodations, itinerary, registry notes, guest FAQ, and a front-end RSVP flow.

This repo is a strong starting point if you want to fork a refined wedding microsite, study a luxury editorial landing page layout, or adapt the sections for another event.

## Features

- Full-screen visual hero with mobile navigation
- Venue, stay, itinerary, registry, RSVP, FAQ, and footer sections
- Client-side RSVP form state with confirmation flow
- Responsive React components with TypeScript types
- Tailwind CSS v4 theme tokens for the visual system
- Scroll and entrance motion using `motion`

## Demo Behavior

The RSVP form is front-end only. It validates required fields, simulates a short submit delay, and shows a confirmation state. It does not send email, persist responses, or call an external API yet.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Motion
- Lucide React
- Bun

## Getting Started

Install dependencies:

```bash
bun install
```

Run the local dev server:

```bash
bun run dev
```

Build for production:

```bash
bun run build
```

Run the type check:

```bash
bun run lint
```

## Customization

- Update names, dates, copy, venue details, and FAQ content in `src/components`.
- Replace image assets in `src/assets`.
- Adjust colors and typography in `src/index.css`.
- Connect the RSVP form in `src/components/RSVP.tsx` to your preferred backend, form service, or serverless function before using it for real guest responses.

## Roadmap

Open tasks are tracked in [TODO.md](TODO.md). Good next contributions include a real RSVP integration, content configuration, deployment documentation, screenshot assets, and accessibility polishing.

## Contributing

Issues and pull requests are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md) before opening larger changes.

If this template helps you ship a beautiful event site, a star on GitHub helps more people find it.
