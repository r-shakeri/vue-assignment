import { shallowMount } from "@vue/test-utils";
import JLoading from "../../../src/components/JLoading";

describe("JLoading.vue", () => {
    function wrapperFactory({ propsData } = {}) {
        return shallowMount(JLoading, {
          propsData: {
            ...propsData,
          },
        });
    }

    it("Check for the props", () => {
        const wrapper = wrapperFactory({
            propsData: {
                show: false
            },
        });

        expect(wrapper.vm.$options.props).toMatchObject({
            show: {
                type: Boolean,
                required: true
            }
        })

        wrapper.destroy()
    })

    it("Check if the show prop works correctly", async () => {
        const wrapper = wrapperFactory({
            propsData: {
                show: false
            },
        });
        
        expect(wrapper.find("section").attributes()["style"]).toMatch("display: none;")
        wrapper.destroy()
    })
})
