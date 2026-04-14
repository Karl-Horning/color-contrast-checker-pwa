import { describe, expect, it } from "vitest";
import {
    getContrastCompliance,
    getContrastRatio,
    hexToRgb,
    luminance,
} from "./contrastUtils";

describe("hexToRgb", () => {
    it("converts white to [255, 255, 255]", () => {
        expect(hexToRgb("#ffffff")).toEqual([255, 255, 255]);
    });

    it("converts black to [0, 0, 0]", () => {
        expect(hexToRgb("#000000")).toEqual([0, 0, 0]);
    });

    it("converts a 3-digit shorthand hex", () => {
        expect(hexToRgb("#abc")).toEqual([170, 187, 204]);
    });

    it("converts a mixed color correctly", () => {
        expect(hexToRgb("#ff0000")).toEqual([255, 0, 0]);
    });
});

describe("luminance", () => {
    it("returns 1 for white", () => {
        expect(luminance([255, 255, 255])).toBe(1);
    });

    it("returns 0 for black", () => {
        expect(luminance([0, 0, 0])).toBe(0);
    });
});

describe("getContrastRatio", () => {
    it("returns 21 for black on white", () => {
        expect(getContrastRatio("#000000", "#ffffff")).toBe(21);
    });

    it("returns 21 for white on black (order is irrelevant)", () => {
        expect(getContrastRatio("#ffffff", "#000000")).toBe(21);
    });

    it("returns 1 for identical colors", () => {
        expect(getContrastRatio("#ffffff", "#ffffff")).toBe(1);
    });

    it("returns a ratio below 4.5 for a known low-contrast pair", () => {
        // #777777 on white is approximately 4.48:1 — fails AA normal text
        expect(getContrastRatio("#777777", "#ffffff")).toBeLessThan(4.5);
    });
});

describe("getContrastCompliance", () => {
    it("passes all levels at a ratio of 21", () => {
        expect(getContrastCompliance(21)).toEqual({
            aaNormal: true,
            aaLarge: true,
            aaaNormal: true,
            aaaLarge: true,
        });
    });

    it("fails all levels at a ratio of 1", () => {
        expect(getContrastCompliance(1)).toEqual({
            aaNormal: false,
            aaLarge: false,
            aaaNormal: false,
            aaaLarge: false,
        });
    });

    it("passes AA but fails AAA normal text at a ratio of 4.5", () => {
        const result = getContrastCompliance(4.5);
        expect(result.aaNormal).toBe(true);
        expect(result.aaaNormal).toBe(false);
    });

    it("passes AA large text only at a ratio of 3", () => {
        const result = getContrastCompliance(3);
        expect(result.aaLarge).toBe(true);
        expect(result.aaNormal).toBe(false);
        expect(result.aaaNormal).toBe(false);
        expect(result.aaaLarge).toBe(false);
    });
});
