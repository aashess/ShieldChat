Tailwind & Chat UI Notes
=========================

This file documents the Tailwind integration and how to run the demo chat UI.

Installation
------------

1. Install dependencies (includes Tailwind, PostCSS, Autoprefixer)

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

Files of interest
-----------------

- `tailwind.config.cjs` — Tailwind content paths and theme extensions (dark mode = 'class').
- `postcss.config.cjs` — PostCSS config that loads Tailwind + Autoprefixer.
- `src/index.css` — Tailwind entry (contains `@tailwind base/components/utilities`) and small helpers.
- `src/components/` — Chat UI components: `ChatList`, `ChatWindow`, `Header`, `MessageBubble`, `MessageInput`.
- `src/mock.ts` — Sample conversations for the demo.

Notes & Recommendations
-----------------------

- Tailwind is configured to scan `index.html` and `src/**/*.{ts,tsx,js,jsx}`. If you add other extensions, update `tailwind.config.cjs`.
- For production builds, the `vite build` step will purge unused CSS via Tailwind based on `content` paths.
- The UI uses `dark` class-based dark mode; add `class="dark"` to the `<html>` or `<body>` element when you want dark mode.
