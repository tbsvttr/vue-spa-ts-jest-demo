import Vue from "vue";
import Vuex, { Store, StoreOptions } from "vuex";
import { getStoreAccessors } from "vuex-typescript";
import { posts } from "./store/posts";

Vue.use(Vuex);

export const storeOptions: StoreOptions<IRootState> = {
  modules: {
    posts
  },
  strict: true
};

export const store: Store<IRootState> = new Vuex.Store(storeOptions);
