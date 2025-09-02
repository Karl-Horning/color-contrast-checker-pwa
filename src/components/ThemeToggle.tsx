import { useEffect, useState } from "react";

/**
 * Theme toggle button that switches between light and dark modes.
 *
 * Reads the initial state from the `<html>` element (set by a small pre-load script)
 * to avoid UI mismatch on first render. If the user hasn't explicitly chosen a theme,
 * it follows system changes live; once the user toggles, their choice is persisted
 * to `localStorage` and synced across tabs via the `storage` event.
 *
 * Accessibility:
 * - `aria-label` and `title` describe the action (“Switch to dark/light mode”).
 * - `aria-pressed` reflects the current state for assistive tech.
 *
 * @returns A button that toggles the `dark` class on `<html>` and persists preference.
 */
export default function ThemeToggle() {
    // Read the current class set by your <head> script to avoid UI flicker/mismatch
    const [isDark, setIsDark] = useState(() =>
        typeof document !== "undefined"
            ? document.documentElement.classList.contains("dark")
            : false
    );

    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const hasExplicitPref = () => localStorage.getItem("theme") !== null;

        // If the user hasn't set a preference, follow system changes live.
        const handleSystemChange = (e: MediaQueryListEvent) => {
            if (!hasExplicitPref()) {
                document.documentElement.classList.toggle("dark", e.matches);
                setIsDark(e.matches);
            }
        };
        mq.addEventListener("change", handleSystemChange);

        // Sync theme across tabs/windows
        const handleStorage = (e: StorageEvent) => {
            if (e.key === "theme") {
                const prefers = mq.matches;
                const dark = e.newValue ? e.newValue === "dark" : prefers;
                document.documentElement.classList.toggle("dark", dark);
                setIsDark(dark);
            }
        };
        window.addEventListener("storage", handleStorage);

        return () => {
            mq.removeEventListener("change", handleSystemChange);
            window.removeEventListener("storage", handleStorage);
        };
    }, []);

    const applyTheme = (dark: boolean) => {
        document.documentElement.classList.toggle("dark", dark);
        setIsDark(dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
    };

    const toggle = () => applyTheme(!isDark);

    const label = isDark ? "Switch to light mode" : "Switch to dark mode";

    return (
        <button
            type="button"
            onClick={toggle}
            aria-pressed={isDark}
            aria-label={label}
            title={label}
            className={[
                "cursor-pointer rounded-md border px-3 py-1.5 text-sm",
                "border-slate-300 bg-white/70 text-slate-800 shadow-sm hover:bg-slate-200",
                "dark:border-slate-600 dark:bg-slate-800/70 dark:text-slate-100 dark:hover:bg-slate-600",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2",
                "ring-offset-white dark:ring-offset-slate-900",
                "transition-colors motion-safe:duration-150",
            ].join(" ")}
        >
            {isDark ? "Light mode" : "Dark mode"}
        </button>
    );
}
