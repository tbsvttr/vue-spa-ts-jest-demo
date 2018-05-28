import { MutationTree } from "vuex";

export const mutations: MutationTree<IPostsState> = {
  storeAll(state: IPostsState, payload: IPost[]) {
    state.items = payload;
  },
  resetAll(state: IPostsState) {
    state.items = undefined;
  },
  storeOne(state: IPostsState, payload: IPost) {
    state.item = payload;
  },
  resetOne(state: IPostsState) {
    state.item = undefined;
  }
};
