import { normaliseHex } from "../utils/colourUtils";

/**
 * Props for the `ColourPicker` component.
 */
interface ColourPickerProps {
    /** The current hex value for the text colour */
    textValue: string;
    /** The current hex value for the background colour */
    backgroundValue: string;
    /** Callback to update the text colour value */
    onTextChange: (val: string) => void;
    /** Callback to update the background colour value */
    onBackgroundChange: (val: string) => void;
}

/**
 * A colour input field containing both a colour picker and a text field for hex input.
 *
 * @param label - The label for the colour input (for example, "Text", "Background")
 * @param value - The current hex colour value
 * @param onChange - Callback when the value changes
 * @param placeholder - The placeholder text for the text input
 * @returns JSX element containing the input
 */
const ColourInput = ({
    label,
    value,
    onChange,
    placeholder,
}: {
    label: string;
    value: string;
    onChange: (val: string) => void;
    placeholder: string;
}) => {
    const id = `${label.toLowerCase()}Input`.replace(/\s+/g, "");
    const isValid = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value.trim());
    const normalised = isValid ? normaliseHex(value) : "#000000";

    return (
        <div className="w-full space-y-2">
            <label
                htmlFor={id}
                className="block text-sm font-medium text-slate-700 dark:text-slate-200"
            >
                {label}
            </label>

            {/* Native colour picker */}
            <div className="flex items-center gap-3">
                <input
                    type="color"
                    value={normalised}
                    onChange={(e) => onChange(e.target.value)}
                    aria-label={`${label} colour`}
                    className="h-10 w-10 cursor-pointer rounded-md border border-slate-300 dark:border-slate-600"
                />

                {/* Hex input */}
                <input
                    id={id}
                    type="text"
                    inputMode="text"
                    aria-label={`${label} hex value`}
                    aria-invalid={!isValid}
                    aria-describedby={!isValid ? `${id}-error` : `${id}-hint`}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className={[
                        "w-full rounded-lg border bg-white/70 dark:bg-slate-800/70",
                        "px-3 py-2 text-sm",
                        "placeholder:text-slate-400",
                        "border-slate-300 dark:border-slate-600",
                        "shadow-sm focus:ring-2 focus:ring-slate-400 focus:outline-none dark:focus:ring-slate-500",
                        !isValid &&
                            "border-red-500 focus:ring-red-400 dark:border-red-400 dark:focus:ring-red-500",
                    ]
                        .filter(Boolean)
                        .join(" ")}
                />
            </div>

            {/* Helper / error text */}
            {isValid ? (
                <p
                    id={`${id}-hint`}
                    className="text-xs text-slate-500 dark:text-slate-400"
                >
                    Normalised: <span className="font-mono">{normalised}</span>
                </p>
            ) : (
                <p
                    id={`${id}-error`}
                    className="text-xs text-red-600 dark:text-red-400"
                >
                    Please enter a valid hex value (for example, #000, #1a2b3c).
                </p>
            )}
        </div>
    );
};

/**
 * A component for selecting text and background colours using hex values.
 * Includes validation and normalisation of hex codes.
 *
 * @param textValue - The current text colour hex value
 * @param backgroundValue - The current background colour hex value
 * @param onTextChange - Callback when the text colour value changes
 * @param onBackgroundChange - Callback when the background colour value changes
 * @returns JSX element with both colour pickers
 */
const ColourPicker = ({
    textValue,
    backgroundValue,
    onTextChange,
    onBackgroundChange,
}: ColourPickerProps) => {
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
            aria-label="Background and text colour pickers"
        >
            <header className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Colours
                </h3>
            </header>

            <div className="flex flex-col gap-4">
                <ColourInput
                    label="Text"
                    value={textValue}
                    onChange={onTextChange}
                    placeholder="#000000"
                />
                <ColourInput
                    label="Background"
                    value={backgroundValue}
                    onChange={onBackgroundChange}
                    placeholder="#ffffff"
                />
            </div>
        </section>
    );
};

export default ColourPicker;
