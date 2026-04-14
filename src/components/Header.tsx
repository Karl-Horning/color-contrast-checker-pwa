import ThemeToggle from "./ThemeToggle";

/**
 * Global header with the app title and theme toggle.
 *
 * @returns A `<header>` element containing the app title and a {@link ThemeToggle}.
 */
export default function Header() {
    return (
        <header className="border-b border-slate-200 bg-white/60 p-4 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/60">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
                <h1 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                    Color Contrast Checker
                </h1>
                <ThemeToggle />
            </div>
        </header>
    );
}
