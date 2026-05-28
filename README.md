# Wedding Landing Page

Open-source React wedding landing page template for couples, planners, and frontend builders who want a polished event microsite without starting from a blank canvas.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19-61dafb.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646cff.svg)](https://vite.dev/)
[![Bun](https://img.shields.io/badge/package_manager-Bun-f9f1e1.svg)](https://bun.sh/)
[![Stars](https://img.shields.io/github/stars/bymilon/wedding-landing-page?style=social)](https://github.com/bymilon/wedding-landing-page/stargazers)
[![Follow on X](https://img.shields.io/badge/follow-%40milonspace-111111?logo=x)](https://x.com/milonspace)

Wedding Landing Page is a refined frontend starter for destination weddings, private events, luxury invitations, and editorial one-page websites. If you like the direction, give the repo a star, follow [@milonspace](https://x.com/milonspace), and sponsor open-source work on GitHub to help fund more ambitious UI releases.

If you want a custom event site, design system, or frontend build for your product, reach out through [X](https://x.com/milonspace). This repo is meant to be both a useful starting point and a public proof of execution quality.

## Features

- Full-screen visual hero with elegant mobile navigation.
- Venue, accommodation, itinerary, registry, RSVP, FAQ, and footer sections.
- Frontend RSVP form with validation, loading state, and confirmation flow.
- Responsive React 19 + TypeScript components with Tailwind CSS 4 tokens.
- Scroll and entrance motion powered by `motion`.
- Clean OSS-ready structure with contribution, security, funding, and issue templates.

## Status

- Current scope: frontend-only wedding landing page.
- RSVP layer: demo form state for preview and customization purposes.
- Email delivery, guest storage, auth, payments, and backend integrations are not included yet.

## Stack

- React 19
- TypeScript
- Vite 6
- Tailwind CSS 4
- Motion
- Lucide React
- Bun

## Quick Start

```bash
git clone git@github.com:bymilon/wedding-landing-page.git
cd wedding-landing-page
bun install
bun run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
bun run dev
bun run build
bun run preview
bun run lint
bun run clean
```

## Project Structure

```txt
src/
  assets/          Local wedding and venue imagery
  components/      Page sections and interactive UI
  App.tsx          Single-page composition
  index.css        Tailwind theme tokens and global styles
  types.ts         Shared TypeScript interfaces
```

## Customization

- Update names, dates, copy, venue details, and FAQ content in `src/components`.
- Replace local event imagery in `src/assets`.
- Tune colors, typography, spacing, and shared utilities in `src/index.css`.
- Connect `src/components/RSVP.tsx` to your preferred backend, form endpoint, or serverless function before using it for real guest responses.

## Why Star This

- You get a production-friendly event microsite base instead of a static screenshot clone.
- Stars and sponsors directly influence how many more open-source UI systems get shipped publicly.
- Public support helps turn this work into deeper templates, breakdowns, and client-grade component packs.

## Roadmap

- Connect RSVP submissions to a real backend or form service.
- Move wedding content into a single typed configuration file.
- Add browser smoke tests and accessibility checks.
- Optimize large image assets for production hosting.
- Add deployment docs, screenshots, and demo assets.

Tracked in [TODO.md](TODO.md).

## Contributing

Contributions are welcome. Start with [CONTRIBUTING.md](CONTRIBUTING.md), open an issue, or send a focused PR with screenshots for UI changes.

## Security

Please report vulnerabilities through the process in [SECURITY.md](SECURITY.md).

## Support

- Follow updates: [x.com/milonspace](https://x.com/milonspace)
- Sponsor the work: [github.com/sponsors/bymilon](https://github.com/sponsors/bymilon)
- Hire for builds: DM on [X](https://x.com/milonspace)

## License

Released under the [MIT License](LICENSE).
