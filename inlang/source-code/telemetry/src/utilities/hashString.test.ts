import { describe, expect, it } from "vitest"
import { hashString } from "./hashString.js"

describe("hashString", () => {
	it("should hash a string", () => {
		const data = "hello world"
		const hash = hashString(data)
		expect(hash).toBe("b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9")
	})
})
