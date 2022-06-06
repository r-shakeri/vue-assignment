import { shallowMount, createLocalVue } from "@vue/test-utils";
import JShopsDashboard from "../../../../src/components/shops/JShopsDashboard";
import JShopItem from "../../../../src/components/shops/JShopItem";
import JTabs from "../../../../src/components/JTabs";
import JSearch from "../../../../src/components/JSearch";
import JLoading from "../../../../src/components/JLoading";
import Vuex from 'vuex';

const localVue = createLocalVue()
localVue.use(Vuex)

describe("JSearch.vue", () => {
    function wrapperFactory({ setData, getters, actions } = {}) {
        const store = new Vuex.Store({
            modules: {
                shops: {
                    namespaced: true,
                    getters,
                    actions
                }
            }
        })
        return shallowMount(JShopsDashboard, {
            localVue,
            store,
            data() {
                return setData
            }
        })
    }

    it("Check if the store getShopsInfo action is called once", () => {
        const setData = {
            searchedValue: ""
        }
        const getters = {
            filteredShops: () => () => {}
        }
        const actions = {
            getShopsInfo: jest.fn()
        }
        const wrapper = wrapperFactory({ setData, getters, actions });
        expect(actions.getShopsInfo).toBeCalledTimes(1)
        wrapper.destroy()
    })

    it("Check if the JTabs component changes its defult active tab", () => {
        const setData = {
            tabIndex: 1
        }
        const getters = {
            filteredShops: () => () => {}
        }
        const actions = {
            getShopsInfo: jest.fn()
        }
        const wrapper = wrapperFactory({ setData, getters, actions });
        expect(wrapper.findComponent(JTabs).props().tabIndex).toEqual(1)
        wrapper.destroy()
    })

    it("Check if the searchedValue data works properly to find stores", () => {
        const setData = {
            searchedValue: "Aa"
        }
        const getters = {
            filteredShops: () => () => {}
        }
        const actions = {
            getShopsInfo: jest.fn()
        }
        const wrapper = wrapperFactory({ setData, getters, actions });
        expect(wrapper.findComponent(JSearch).props().value).toMatch("Aa")
        wrapper.destroy()
    })

    it("Check if the searchedValue data works properly to find stores", () => {
        const setData = {
            searchedValue: "Waalre"
        }
        const getters = {
            cities: () => {
                return ["Aalsmeer", "Aalst"]
            },
            filteredShops: () => () => {
                return [
                    { id: "zkIKYx4XXxcAAAFI7CMYwKxK", addressName: "Aalst Aalst-Waalre", city: "Aalst", cityColor: "#FFF333" }
                ]
            }
        }
        const actions = {
            getShopsInfo: jest.fn()
        }
        const wrapper = wrapperFactory({ setData, getters, actions })
        expect(wrapper.findAllComponents(JShopItem).at(0).attributes()["text"]).toMatch("Aalst Aalst-Waalre")
        wrapper.destroy()
    })

    it("Check if the method works correctly", () => {
        const setData = {
            searchedValue: ""
        }
        const getters = {
            filteredShops: () => () => {}
        }
        const actions = {
            getShopsInfo: jest.fn()
        }
        const wrapper = wrapperFactory({ setData, getters, actions });
        const result = wrapper.vm.getStylePerCity("#FFF333");
        expect(result).toMatchObject({ "border-left": "40px solid #FFF333" })
        wrapper.destroy()
    })
})