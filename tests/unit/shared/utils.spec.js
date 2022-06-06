import Utils from "../../../src/shared/Utils";

describe("Utils", () => {
    it("generateRandomHexColor", () => {
        Math.random = jest.fn().mockReturnValue("0.5")
        expect(Utils.generateRandomHexColor()).toMatch("#888888")
    })
})