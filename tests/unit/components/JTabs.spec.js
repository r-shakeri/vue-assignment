import { shallowMount } from "@vue/test-utils";
import JTabs from "../../../src/components/JTabs";

describe("JTabs.vue", () => {
    function wrapperFactory({ propsData } = {}) {
        return shallowMount(JTabs, {
          propsData: {
            ...propsData,
          },
        });
    }

    it("Check for the props", () => {
        const wrapper = wrapperFactory({
            propsData: {
                items: ["tab1", "tab2"]
            },
        });

        expect(wrapper.vm.$options.props).toMatchObject({
            tabIndex: {
                type: Number,
                required: false,
                default: 0
            },
            items: {
                type: Array,
                required: true
            }
        })

        wrapper.destroy()
    })
    
    it("Check if the default value for tabIndex prop works correctly", () => {
        const wrapper = wrapperFactory({
            propsData: {
                items: ["tab1", "tab2"]
            },
        });

        expect(wrapper.findAll("li").at(0).classes()).toContain('active')

        wrapper.destroy()
    })

    it("Check if the clicked tab changes the active element", async () => {
        const wrapper = wrapperFactory({
            propsData: {
                items: ["tab1", "tab2"]
            },
        });
        const liElems = wrapper.findAll("li")
       
        await liElems.at(1).trigger("click")
        expect(liElems.at(0).classes().length).toEqual(0)
        expect(liElems.at(1).classes()).toContain('active')

        const updateEvents = wrapper.emitted("update")
        expect(updateEvents[1]).toEqual([1])

        wrapper.destroy()
    })

    it("Check the tabs related to the items prop", async () => {
        const items = ["tab1", "tab2"];
        const wrapper = wrapperFactory({
            propsData: {
                items: items
            },
        });
        const liElems = wrapper.findAll("li")
        expect(liElems.at(0).text()).toMatch(items[0])
        expect(liElems.at(1).text()).toMatch(items[1])

        wrapper.destroy()
    })
})
