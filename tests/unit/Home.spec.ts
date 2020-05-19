import { shallowMount, createLocalVue  } from "@vue/test-utils";
import HeaderComponent from "@/views/Home.vue";
import Vue from 'vue'
import Element from "element-ui";
import * as Vuex from 'vuex'

Vue.use(Element);

const localVue = createLocalVue()
localVue.use(Vuex)
describe("HelloWorld.vue", () => {
  const $t = jest.fn();

  const store = new Vuex.Store({
    modules: {
      Articles: {
        namespaced: true,
      },
    },
  })
  let wrapper

  beforeEach(() => {

    wrapper = shallowMount(HeaderComponent, {
      localVue,
      store,
      mocks: {
        $t,
      }
    });

  })
  it("Check default value", () => {
    expect(wrapper.vm.searchValue).toBeFalsy();
    expect(wrapper.vm.viewMode).toBeTruthy();
  });
  it("Check changeView functions", () => {
    wrapper.vm.changeView()
    expect(wrapper.vm.viewMode).toBeFalsy();
  });
  it("Check changeView call", () => {

    wrapper.vm.changeView = jest.fn();
    wrapper.vm.changeView();
    expect(wrapper.vm.changeView).toHaveBeenCalled();
  });
});
