import { GetterTree } from "vuex";

export const getters: GetterTree<IPostsState, IRootState> = {
  all(postsState: IPostsState): IPost[] {
    return postsState.items!;
  },
  findOneInAll: (postsState: IPostsState) => (postItemId: IPost["id"]) => {
    return postsState.items
      ? postsState.items.find((item: IPost) => item.id === postItemId)
      : undefined;
  },
  one(postsState: IPostsState): IPost {
    return postsState.item!;
  }
};
