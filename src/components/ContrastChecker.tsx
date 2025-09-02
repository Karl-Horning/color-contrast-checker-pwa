import {
    getContrastCompliance,
    getContrastRatio,
} from "../utils/contrastUtils";
import StatusBadge from "./StatusBadge";

/**
 * Props for the `ContrastChecker` component.
 */
interface ContrastCheckerProps {
    /** The hex value for the text colour */
    textHex: string;
    /** The hex value for the background colour */
    backgroundHex: string;
}

/**
 * `ContrastChecker` displays the contrast ratio between two colours and their
 * compliance with WCAG 2.1 accessibility standards (AA and AAA, normal and large text).
 *
 * It calculates the contrast ratio using the `getContrastRatio` utility,
 * formats the result to two decimal places, and renders pass/fail badges
 * for each WCAG requirement using `StatusBadge`.
 *
 * @param textHex - The hex code for the text colour (for example, "#000000")
 * @param backgroundHex - The hex code for the background colour (for example, "#ffffff")
 * @returns A section of JSX displaying contrast results and WCAG compliance status.
 */
export default function ContrastChecker({
    textHex,
    backgroundHex,
}: ContrastCheckerProps) {
    const contrastRatio = getContrastRatio(textHex, backgroundHex);
    const formattedRatio = contrastRatio.toFixed(2);
    const { aaNormal, aaLarge, aaaNormal, aaaLarge } =
        getContrastCompliance(contrastRatio);

    const results = [
        { label: "WCAG AA Normal Text", passed: aaNormal },
        { label: "WCAG AAA Normal Text", passed: aaaNormal },
        { label: "WCAG AA Large Text", passed: aaLarge },
        { label: "WCAG AAA Large Text", passed: aaaLarge },
    ];

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
            aria-labelledby="contrast-heading"
            role="group"
        >
            <header className="flex items-center justify-between">
                <h3
                    id="contrast-heading"
                    className="text-lg font-semibold text-slate-900 dark:text-slate-100"
                >
                    Results
                </h3>

                {/* Prominent ratio display */}
                <div
                    className="rounded-lg border border-slate-300 bg-white/70 px-3 py-1.5 text-sm font-medium shadow-sm dark:border-slate-600 dark:bg-slate-800/70"
                    aria-label="Contrast ratio"
                >
                    <span className="font-mono tabular-nums">
                        {formattedRatio}:1
                    </span>
                </div>
            </header>

            {/* Results list */}
            <dl
                className="grid grid-cols-1 gap-x-6 gap-y-3"
                role="list"
            >
                {results.map(({ label, passed }) => (
                    <div
                        key={label}
                        className="flex items-center justify-between rounded-lg border border-slate-200 bg-white/50 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/50"
                        role="listitem"
                    >
                        <dt className="text-sm font-medium text-slate-800 dark:text-slate-200">
                            {label}
                        </dt>
                        <dd className="ml-4">
                            <StatusBadge status={passed ? "pass" : "fail"} />
                        </dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}
