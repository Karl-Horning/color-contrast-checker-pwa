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
    const contrastCompliance = getContrastCompliance(contrastRatio);
    const { aaNormal, aaLarge, aaaNormal, aaaLarge } = contrastCompliance;
    const results = [
        { label: "WCAG AA Normal Text", passed: aaNormal },
        { label: "WCAG AAA Normal Text", passed: aaaNormal },
        { label: "WCAG AA Large Text", passed: aaLarge },
        { label: "WCAG AAA Large Text", passed: aaaLarge },
    ];

    return (
        <section
            className="space-y-2 rounded-lg border p-4"
            aria-labelledby="contrast-heading"
            role="group"
        >
            <h3 id="contrast-heading" className="text-lg font-bold">
                Results
            </h3>

            <div role="list" className="space-y-2">
                <div role="listitem" className="flex justify-between">
                    <span className="font-medium">Contrast Ratio</span>
                    <span className="font-normal">{formattedRatio}:1</span>
                </div>

                {results.map(({ label, passed }) => (
                    <div key={label} className="flex justify-between">
                        <dt className="font-medium">{label}</dt>
                        <dd>
                            <StatusBadge status={passed ? "pass" : "fail"} />
                        </dd>
                    </div>
                ))}
            </div>
        </section>
    );
}
