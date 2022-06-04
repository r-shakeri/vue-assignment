import { shallowMount } from "@vue/test-utils";
import JShopItem from "../../../../src/components/shops/JShopItem";

describe("JSearch.vue", () => {
    let wrapper = null

    beforeEach(() => {
        wrapper = shallowMount(JShopItem, {
            propsData: {
                text: "Any Name"
            }
        })
    })
    
    afterEach(() => {
        wrapper.destroy()
    })

    it("Check for the props", () => {

        expect(wrapper.vm.$options.props).toMatchObject({
            text: {
                type: String,
                required: true
            }
        })

        wrapper.destroy()
    })
    
    it("Check for the props", () => {
        expect(wrapper.text()).toContain("Any Name")

        wrapper.destroy()
    })
})