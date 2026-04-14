# Color Contrast Checker PWA

A PWA for checking whether text and background color combinations meet WCAG contrast requirements.

Features include a live preview, pass/fail badges for WCAG AA and AAA levels, keyboard support, and a dark mode toggle.

## Screenshots and demo

![Color Contrast Checker showing black text on a white background with a 21:1 contrast ratio](public/demo.avif)

Live: <https://www.karlhorning.dev/color-contrast-checker-pwa/>

## Tech stack

- **Framework**: Vite + React 19
- **Languages**: TypeScript
- **Styling**: Tailwind CSS v4
- **Tooling**: `@tailwindcss/vite`, `vite-plugin-pwa`, ESLint, Prettier, React Icons

## Installation

```bash
git clone https://github.com/Karl-Horning/color-contrast-checker-pwa.git
cd color-contrast-checker-pwa
npm install
```

## Scripts and usage

| Command               | Description              |
| --------------------- | ------------------------ |
| `npm run dev`         | Start local development  |
| `npm run build`       | Build for production     |
| `npm run preview`     | Preview production build |
| `npm run lint`        | Run ESLint checks        |
| `npm test`.           | Run vitest               |
| `npm run test:watch`  | Run vitest in watch mode |

## Resources

- [W3C WCAG Contrast Guidelines](https://www.w3.org/WAI/WCAG22/quickref/#contrast-minimum)
- [WebAIM: Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [The Paciello Group: Color Contrast Analyser](https://www.tpgi.com/color-contrast-checker/)

## Feedback

Found a bug? [Open an issue](https://github.com/Karl-Horning/color-contrast-checker-pwa/issues).

## License

Released under the [MIT License](./LICENSE) by [Karl Horning](https://github.com/Karl-Horning).
