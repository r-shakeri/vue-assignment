import { shallowMount, createLocalVue } from "@vue/test-utils";
import JShopsDashboard from "../../../../src/components/shops/JShopsDashboard";
import JTabs from "../../../../src/components/JTabs";
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe("JSearch.vue", () => {
    let wrapper = null
    
    const computed = {
        cities: () => ["City1", "City2"],
        filteredShops: () => [{ id: 0, addressName: "Store1", city: "City1", cityColor: "#FFFFFF"}]
    };
    const getters = {
        cities: () => ["Aalsmeer", "Aalst"],
        filteredShops: () => [
            { id: "gmcKYx4X5HEAAAFIdhIYwKxK", addressName: "Aalsmeer Ophelialaan.", city: "Aalsmeer", cityColor: "#FFFFFF" },
            { id: "zkIKYx4XXxcAAAFI7CMYwKxK", addressName: "Aalst Aalst-Waalre", city: "Aalst", cityColor: "#FFF333" }
        ]
    }
    const actions = {
        getShopsInfo: jest.fn()
    }
    const store = new Vuex.Store({
        modules: {
            shops: {
                namespaced: true,
                actions,
                getters
            }
        }
    })
    beforeEach(() => {
        wrapper = shallowMount(JShopsDashboard, {
            data() {
                return {
                    searchedValue: "",
                    tabIndex: 1,
                    tabs: ["stores", "cities"]
                }
            },
            computed,
            localVue,
            store
        })
    })
    
    afterEach(() => {
        wrapper.destroy()
    })

    it("Check if the store getShopsInfo action is called once", () => {
        expect(actions.getShopsInfo).toBeCalledTimes(1)
    })

    it("Check if the JTabs component changes its defult active tab", () => {
        expect(wrapper.findComponent(JTabs).props.tabIndex).toEqual(1)
    })

    it("Check if the stores list and cities are shown", () => {
        const stores = wrapper.findAll("ul.stores li")
        expect(stores.lenght).toEqual(2)
        expect(stores.at(0).text()).toMatch("Aalsmeer Ophelialaan.")

        const cities = wrapper.findAll("ul.cities li")
        expect(cities.lenght).toEqual(2)
        expect(stores.at(1).text()).toMatch("Aalst")
    })

    // it("Check if the searchedValue data works properly to find stores", () => {

    // })

    it("Check if the method works correctly", () => {
        const result = wrapper.vm.getStylePerCity("#FFF333");
        expect(result).toMatchObject({ "background-color": "#FFF333" })
    })
})