/**
 * Props for the `LivePreview` component.
 */
interface LivePreviewProps {
    /** The hex value for the text colour */
    textHex: string;
    /** The hex value for the background colour */
    backgroundHex: string;
}

/**
 * A live preview component that renders sample text with user-selected text and background colours.
 *
 * @param textHex - The hex value for the text colour
 * @param backgroundHex - The hex value for the background colour
 * @returns JSX element displaying the live colour preview
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
            role="region"
            aria-label="Live preview"
        >
            <header className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Live Preview
                </h3>

                {/* Current colours (for quick reference) */}
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
                role="img"
                aria-label={`Preview area with text colour ${textHex} on background ${backgroundHex}`}
            >
                <p className="text-xl font-semibold tracking-tight sm:text-2xl">
                    This is a live preview of large text
                </p>
                <p className="mt-2 text-base sm:text-lg">
                    This is a live preview of normal text
                </p>

                {/* Visually hidden helper for screen readers */}
                <span className="sr-only" aria-live="polite">
                    Text colour {textHex}. Background colour {backgroundHex}.
                </span>
            </div>
        </section>
    );
}
