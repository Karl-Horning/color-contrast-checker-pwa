/**
 * Adds a leading hash (`#`) to a hex value if it's missing.
 *
 * @param value - A colour string, potentially missing a leading hash.
 * @returns The same string with a leading `#` if not already present.
 *
 * @example
 * addHashIfMissing("ffcc00") // "#ffcc00"
 * addHashIfMissing("#ffcc00") // "#ffcc00"
 */
export const addHashIfMissing = (value: string) =>
    value.startsWith("#") ? value : "#" + value;

/**
 * Checks if a string is a valid short or long hex colour code.
 * Accepts 3- or 6-digit hex codes, with or without a leading `#`.
 *
 * @param value - A string representing a hex colour.
 * @returns `true` if the string is a valid hex colour, otherwise `false`.
 *
 * @example
 * isValidHex("#ffcc00") // true
 * isValidHex("abc") // true
 * isValidHex("xyz") // false
 */
export const isValidHex = (value: string) =>
    /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(addHashIfMissing(value.trim()));

/**
 * Normalises a hex colour string to 6-digit lowercase format with leading `#`.
 * Expands 3-digit shorthand hex codes and lowercases everything.
 * Returns an empty string if the input is not a valid hex colour.
 *
 * @param value - A hex colour string (3- or 6-digit, with or without `#`).
 * @returns A 7-character hex string (e.g. `#ffcc00`), or `""` if invalid.
 *
 * @example
 * normaliseHex("fc0") // "#ffcc00"
 * normaliseHex("#ABC") // "#aabbcc"
 * normaliseHex("123456") // "#123456"
 * normaliseHex("zzz") // ""
 */
export const normaliseHex = (value: string) => {
    const val = addHashIfMissing(value.trim());
    if (!isValidHex(value)) return "";
    return val.length === 4
        ? (
              "#" +
              val[1].repeat(2) +
              val[2].repeat(2) +
              val[3].repeat(2)
          ).toLowerCase()
        : val.toLowerCase();
};
