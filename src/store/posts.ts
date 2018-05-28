import { actions } from "@/store/posts/actions";
import { getters } from "@/store/posts/getters";
import { mutations } from "@/store/posts/mutations";
import Vuex, { GetterTree, Module } from "vuex";

const namespaced: boolean = true;

export const state: IPostsState = { item: undefined, items: undefined };

export const posts = {
  actions,
  getters,
  mutations,
  namespaced,
  state
};
