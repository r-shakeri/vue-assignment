import { shallowMount, createLocalVue } from "@vue/test-utils";
import JShopsDashboard from "../../../../src/components/shops/JShopsDashboard";
import JTabs from "../../../../src/components/JTabs";
import JSearch from "../../../../src/components/JSearch";
import Vuex from 'vuex';

const localVue = createLocalVue()
localVue.use(Vuex)

describe("JSearch.vue", () => {
    let wrapper = null
    
    const computed = {
        cities: () => ["Aalsmeer", "Aalst"],
        filteredShops: () => [
            { id: "gmcKYx4X5HEAAAFIdhIYwKxK", addressName: "Aalsmeer Ophelialaan.", city: "Aalsmeer", cityColor: "#FFFFFF" },
            { id: "zkIKYx4XXxcAAAFI7CMYwKxK", addressName: "Aalst Aalst-Waalre", city: "Aalst", cityColor: "#FFF333" }
        ]
    };
    
    const actions = {
        getShopsInfo: jest.fn()
    }

    const store = new Vuex.Store({
        modules: {
            shops: {
                namespaced: true,
                actions,
            }
        }
    })
    beforeEach(() => {
        wrapper = shallowMount(JShopsDashboard, {
            localVue,
            store,
            computed,
            data() {
                return {
                    searchedValue: "Aa",
                    tabIndex: 1,
                    tabs: ["stores", "cities"]
                }
            },
            
        })
    })
    
    afterEach(() => {
        wrapper.destroy()
    })

    it("Check if the store getShopsInfo action is called once", () => {
        expect(actions.getShopsInfo).toBeCalledTimes(1)
    })

    it("Check if the JTabs component changes its defult active tab", () => {
        expect(wrapper.findComponent(JTabs).props().tabIndex).toEqual(1)
    })

    it("Check if the searchedValue data works properly to find stores", () => {
        expect(wrapper.findComponent(JSearch).props().value).toMatch("Aa")
    })

    it("Check if the method works correctly", () => {
        const result = wrapper.vm.getStylePerCity("#FFF333");
        expect(result).toMatchObject({ "border-left": "40px solid #FFF333" })
    })
})