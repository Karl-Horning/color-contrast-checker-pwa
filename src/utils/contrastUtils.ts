/**
 * Converts a hex colour string to an RGB array.
 *
 * @param hex - A hex colour string, for example, "#ffffff" or "#abc"
 * @returns A tuple of RGB values, for example, [255, 255, 255]
 */
export const hexToRgb = (hex: string): [number, number, number] => {
    const cleanHex = hex.replace("#", "");
    const bigint = parseInt(cleanHex, 16);

    if (cleanHex.length === 3) {
        // Expand shorthand hex (#abc → #aabbcc)
        return [
            parseInt(cleanHex[0] + cleanHex[0], 16),
            parseInt(cleanHex[1] + cleanHex[1], 16),
            parseInt(cleanHex[2] + cleanHex[2], 16),
        ];
    }

    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
};

/**
 * Calculates the relative luminance of an RGB colour.
 *
 * Uses the formula from WCAG 2.1 for sRGB linearisation.
 *
 * @param rgb - An array of RGB values, for example, [255, 255, 255]
 * @returns The relative luminance value (0.0 to 1.0)
 */
export const luminance = ([r, g, b]: [number, number, number]): number => {
    const channel = (v: number) => {
        const sRGB = v / 255;
        return sRGB <= 0.03928
            ? sRGB / 12.92
            : Math.pow((sRGB + 0.055) / 1.055, 2.4);
    };

    return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
};

/**
 * Calculates the contrast ratio between two hex colour values.
 *
 * @param hex1 - First hex colour (for example, "#000000")
 * @param hex2 - Second hex colour (for example, "#ffffff")
 * @returns The contrast ratio (for example, 21 or 4.5)
 */
export const getContrastRatio = (hex1: string, hex2: string): number => {
    const lum1 = luminance(hexToRgb(hex1));
    const lum2 = luminance(hexToRgb(hex2));
    const lighter = Math.max(lum1, lum2);
    const darker = Math.min(lum1, lum2);
    return (lighter + 0.05) / (darker + 0.05);
};

/**
 * Returns WCAG 2.1 compliance results for a given contrast ratio.
 *
 * @param contrastRatio - The contrast ratio between text and background, for example, 4.5 or 7.23
 * @returns An object indicating which WCAG levels the contrast ratio passes
 */
export const getContrastCompliance = (contrastRatio: number) => {
    return {
        aaNormal: contrastRatio >= 4.5,
        aaLarge: contrastRatio >= 3.0,
        aaaNormal: contrastRatio >= 7.0,
        aaaLarge: contrastRatio >= 4.5,
    };
};
