/**
 * “Skip to main content” link for keyboard users.
 *
 * Visually hidden until focused, then appears and jumps to the element with
 * `id="main-content"`. Place near the top of the DOM so it's one of the first
 * focusable elements.
 *
 * @returns A visually hidden anchor that becomes visible on focus and moves focus to the main content region.
 * @remarks Ensure a matching target exists, for example: `<main id="main-content">…</main>`.
 */
export default function SkipLink() {
    return (
        <a
            href="#main-content"
            className={[
                "sr-only focus:not-sr-only",
                "fixed top-4 left-4 z-50",
                "rounded-md px-3 py-2 text-sm font-medium",
                "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900",
                "shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500",
            ].join(" ")}
        >
            Skip to main content
        </a>
    );
}
