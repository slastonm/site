import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import Vue from 'vue'
import Element from "element-ui";
Vue.use(Element)

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    // console.log(wrapper.vm)
    expect(wrapper.text()).toMatch(msg);
  });
});
