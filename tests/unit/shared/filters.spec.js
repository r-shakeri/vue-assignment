import { removeStr } from "../../../src/shared/Filters";

describe("removeStr", () => {
    it("Check if the fn removes given value from the string", () => {
        expect(removeStr("Jumbo First App", "Jumbo ")).toMatch("First App")
    })
})