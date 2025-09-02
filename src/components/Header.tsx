import ThemeToggle from "./ThemeToggle";

/**
 * App header containing the title and theme toggle.
 *
 * Provides a slim, translucent bar with a subtle border that stays visually
 * consistent in light and dark modes. The inner container centres content and
 * spaces the app title from the {@link ThemeToggle}.
 *
 * Accessibility:
 * - Uses a semantic `<header>` element.
 * - Keeps the main heading as an `<h1>` for clear page structure.
 *
 * @returns The global header with the app title and a theme toggle control.
 * @remarks
 * - The background uses a translucent surface with `backdrop-blur` to match the
 *   card styling used elsewhere in the app.
 * - The inner container width aligns with the main grid (`max-w-6xl`) for a tidy layout.
 */
export default function Header() {
    return (
        <header className="border-b border-slate-200 bg-white/60 p-4 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/60">
            <div className="mx-auto flex max-w-6xl items-center justify-between">
                <h1 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                    Color Contrast Checker
                </h1>
                <ThemeToggle />
            </div>
        </header>
    );
}
