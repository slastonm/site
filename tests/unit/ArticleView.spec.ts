
import { shallowMount, createLocalVue } from "@vue/test-utils";
import ArticleView from "@/components/ArticleView.vue";
import Vue from 'vue'
import Element from "element-ui";
import * as Vuex from 'vuex'

Vue.use(Element);

const localVue = createLocalVue()
localVue.use(Vuex)
describe("HelloWorld.vue", () => {
  const $t = jest.fn();
  const item = {};
  const search = 'test';
  const viewMode = true;
  const store = new Vuex.Store({
    modules: {
      Articles: {
        namespaced: true,
      },
    },
  })
  let wrapper

  beforeEach(() => {

    wrapper = shallowMount(ArticleView, {
      localVue,
      store,
      mocks: {
        $t,
      },
      propsData: {
        item,
        search,
        viewMode
      }
    });

  })
  
  it("Truncate function must cut long string", () => {
    wrapper.vm.truncate('lemon', 3);
    expect(wrapper.vm.truncate('lemon', 3)).toEqual('le ...');
    expect(wrapper.vm.truncate('lemon', 3)).toBeDefined();
  });
  it("Truncate function musnt cut short text", () => {
    expect(wrapper.vm.truncate('lemon', 3)).toBeDefined();
    expect(wrapper.vm.truncate('lem', 3)).toHaveLength(3);
  });
});
