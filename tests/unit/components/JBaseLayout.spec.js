import { shallowMount } from "@vue/test-utils";
import JBaseLayout from "../../../src/components/JBaseLayout";

describe("JBaseLayout.vue", () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallowMount(JBaseLayout, {
            slots: {
                default: "<section>Welcome!</section>"
            }
        })
    })
    
    afterEach(() => {
        wrapper.destroy()
    })

    it("Check if the component has header element",  () => {
        expect(wrapper.find("header")).toBeTruthy()
    })

    it("Check if the slot works properly",  () => {
        expect(wrapper.html()).toContain("<section>Welcome!</section>")
    })
})