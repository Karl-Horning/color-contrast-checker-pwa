/**
 * Props for the `LivePreview` component.
 */
interface LivePreviewProps {
    /** The hex value for the text color */
    textHex: string;
    /** The hex value for the background color */
    backgroundHex: string;
}

/**
 * A live preview component that renders sample text with user-selected text and background colors.
 *
 * @param textHex - The hex value for the text color
 * @param backgroundHex - The hex value for the background color
 * @returns JSX element displaying the live color preview
 */
export default function LivePreview({
    textHex,
    backgroundHex,
}: LivePreviewProps) {
    return (
        <section
            className={[
                "space-y-4 rounded-2xl border",
                "border-slate-200 dark:border-slate-700",
                "bg-white/60 dark:bg-slate-800/60",
                "backdrop-blur-sm",
                "p-4 sm:p-5",
                "shadow-sm",
            ].join(" ")}
            aria-label="Live preview"
        >
            <header className="flex flex-col gap-2">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Live Preview
                </h2>

                {/* Current colors (for quick reference) */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-slate-700 dark:text-slate-300">
                    <span className="inline-flex items-center gap-2">
                        <span
                            aria-hidden="true"
                            className="h-4 w-4 rounded border border-slate-300 shadow-sm dark:border-slate-600"
                            style={{ backgroundColor: textHex }}
                        />
                        <span className="font-mono tabular-nums">
                            Text: {textHex}
                        </span>
                    </span>
                    <span className="inline-flex items-center gap-2">
                        <span
                            aria-hidden="true"
                            className="h-4 w-4 rounded border border-slate-300 shadow-sm dark:border-slate-600"
                            style={{ backgroundColor: backgroundHex }}
                        />
                        <span className="font-mono tabular-nums">
                            Background: {backgroundHex}
                        </span>
                    </span>
                </div>
            </header>

            <div
                className={[
                    "rounded-xl border px-4 py-8 sm:px-6 sm:py-10",
                    "border-slate-300 dark:border-slate-600",
                    "bg-white/70 dark:bg-slate-900/70",
                    "shadow-sm",
                ].join(" ")}
                style={{ backgroundColor: backgroundHex, color: textHex }}
            >
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    This is a live preview of large text
                </h3>
                <p className="mt-2 text-base sm:text-lg">
                    This is a live preview of normal text
                </p>

                {/* Visually hidden helper for screen readers */}
                <span className="sr-only" aria-live="polite">
                    Text color {textHex}. Background color {backgroundHex}.
                </span>
            </div>
        </section>
    );
}
