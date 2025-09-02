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
        <div className="w-1/2">
            <label htmlFor={id} className="block font-medium">
                {label}
            </label>
            <input
                type="color"
                value={normalised}
                onChange={(e) => onChange(e.target.value)}
                className="h-10 w-full rounded border"
            />
            <input
                id={id}
                type="text"
                aria-label={`${label} hex value`}
                aria-invalid={!isValid}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={`w-full rounded border px-2 py-1 ${
                    isValid ? "border-gray-300" : "border-red-500"
                }`}
            />
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
            className="space-y-3 rounded-lg border p-4"
            role="region"
            aria-label="Background and text colour pickers"
        >
            <h3 className="text-lg font-bold">Colours</h3>
            <div className="flex gap-4">
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
