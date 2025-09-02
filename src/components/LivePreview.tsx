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
            className="rounded-lg border p-4"
            role="region"
            aria-label="Live preview"
        >
            <h3 className="mb-2 text-lg font-bold">Live Preview</h3>

            <div
                className="rounded-lg px-4 py-8"
                style={{ backgroundColor: backgroundHex, color: textHex }}
            >
                <p className="text-xl font-semibold">
                    This is a live preview of large text
                </p>
                <p>This is a live preview of normal text</p>
            </div>
        </section>
    );
}
