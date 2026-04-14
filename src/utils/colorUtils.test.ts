import { describe, expect, it } from "vitest";
import { addHashIfMissing, isValidHex, normaliseHex } from "./colorUtils";

describe("addHashIfMissing", () => {
    it("adds a leading hash when missing", () => {
        expect(addHashIfMissing("ffcc00")).toBe("#ffcc00");
    });

    it("leaves the value unchanged when a hash is already present", () => {
        expect(addHashIfMissing("#ffcc00")).toBe("#ffcc00");
    });
});

describe("isValidHex", () => {
    it("accepts a 6-digit hex with a hash", () => {
        expect(isValidHex("#ffcc00")).toBe(true);
    });

    it("accepts a 6-digit hex without a hash", () => {
        expect(isValidHex("ffcc00")).toBe(true);
    });

    it("accepts a 3-digit hex with a hash", () => {
        expect(isValidHex("#abc")).toBe(true);
    });

    it("accepts a 3-digit hex without a hash", () => {
        expect(isValidHex("abc")).toBe(true);
    });

    it("rejects non-hex characters", () => {
        expect(isValidHex("xyz")).toBe(false);
    });

    it("rejects a 7-digit hex", () => {
        expect(isValidHex("#1234567")).toBe(false);
    });

    it("rejects an empty string", () => {
        expect(isValidHex("")).toBe(false);
    });
});

describe("normaliseHex", () => {
    it("expands a 3-digit shorthand hex to 6 digits", () => {
        expect(normaliseHex("fc0")).toBe("#ffcc00");
    });

    it("lowercases a 3-digit hex with a hash", () => {
        expect(normaliseHex("#ABC")).toBe("#aabbcc");
    });

    it("adds a hash and lowercases a 6-digit hex", () => {
        expect(normaliseHex("123456")).toBe("#123456");
    });

    it("returns an empty string for an invalid hex", () => {
        expect(normaliseHex("zzz")).toBe("");
    });

    it("returns an empty string for an empty string", () => {
        expect(normaliseHex("")).toBe("");
    });
});
