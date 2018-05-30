import { makeFakePost } from "%/helper/faker_factory";
import Posts from "@/views/Posts.vue";
import { createLocalVue, shallowMount, Wrapper } from "@vue/test-utils";
import flushPromises from "flush-promises";
import Vuex from "vuex";

// Setup
const localVue = createLocalVue();
localVue.use(Vuex);

const actions = {
  readAll: jest.fn(),
  readOne: jest.fn()
};
const getters = {
  all: jest.fn(() => items)
};
const items: IPost[] = [makeFakePost(), makeFakePost()];
const store = new Vuex.Store({
  modules: {
    posts: {
      actions,
      getters,
      namespaced: true,
      state: { item: undefined, items: undefined }
    }
  }
});

const wrapper: Wrapper<Posts> = shallowMount(Posts, {
  localVue,
  store
});

// Tests
describe("Posts.vue", () => {
  it("Vue Instance", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it("Component Name", () => {
    expect(wrapper.name()).toBe("Posts");
  });

  it("Initial state of Data - showModal", () => {
    expect(wrapper.vm.$data.showModal).toBe(false);
  });

  it("Click #create-post", () => {
    expect(wrapper.vm.$data.showModal).toBe(false);
    wrapper.find("#create-post").trigger("click");
    expect(wrapper.vm.$data.showModal).toBe(true);
    // Teardown
    wrapper.setData({ showModal: false });
  });

  it("should have the number of articles equal to the number of faked post entries.", async () => {
    // Setup
    await flushPromises();
    // Test
    expect(actions.readAll).toHaveBeenCalled();
  });

  it("should dispatch action when created", async () => {
    // Setup
    await flushPromises();
    // Test
    expect(wrapper.findAll("article").length).toBe(items.length);
  });

  it("Click .update-post", async () => {
    // Setup
    expect(wrapper.vm.$data.showModal).toBe(false);
    wrapper.find(".update-post").trigger("click");
    await flushPromises();
    // Test
    expect(actions.readOne).toHaveBeenCalled();
    expect(wrapper.vm.$data.showModal).toBe(true);
    // Teardown
    wrapper.setData({ showModal: false });
  });
});
