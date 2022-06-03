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
        expect(wrapper.html()).toContain("<header></header>")
    })

    it("Check if the slot works properly",  () => {
        wrapper.op
        expect(wrapper.html()).toContain("<section>Welcome!</section>")
    })
})