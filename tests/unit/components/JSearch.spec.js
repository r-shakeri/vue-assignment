import { shallowMount } from "@vue/test-utils";
import JSearch from "../../../src/components/JSearch";

describe("JSearch.vue", () => {
    let wrapper = null

    beforeEach(() => {
        wrapper = shallowMount(JSearch)
    })
    
    afterEach(() => {
        wrapper.destroy()
    })

    it("Check if the value from outside is set to the input value", async () => {
        await wrapper.setProps({ value: "veghel" });
        expect(wrapper.find("input").element.value).toMatch("veghel")
    })
    
    it("Check if the value of the input is trimed and is set to small letters", () => {
        const inputElem = wrapper.find("input")
        inputElem.element.value = "  VeGHel "
        inputElem.trigger("input")
        const inputEvents = wrapper.emitted("input")
        expect(inputEvents[0]).toEqual(["veghel"])
    })
})