import { errorHandler } from "@/errors";
import Axios, { AxiosError, AxiosResponse } from "axios";
import { ActionContext, ActionTree } from "vuex";

export const actions: ActionTree<IPostsState, IRootState> = {
  readAll(context: ActionContext<IPostsState, IRootState>): Promise<void> {
    return Axios.get(`http://localhost:3000/posts`).then(
      (response: AxiosResponse) => {
        context.commit("storeAll", response.data);
      },
      (error: AxiosError) => {
        errorHandler(error);
      }
    );
  },
  readOne(
    context: ActionContext<IPostsState, IRootState>,
    id: IPost["id"]
  ): Promise<void> {
    return Axios.get(`http://localhost:3000/posts/${id}`).then(
      (response: AxiosResponse) => {
        context.commit("storeOne", response.data);
      },
      (error: AxiosError) => {
        errorHandler(error);
      }
    );
  },
  deleteOne(
    context: ActionContext<IPostsState, IRootState>,
    id: IPost["id"]
  ): Promise<void> {
    return Axios.delete(`http://localhost:3000/posts/${id}`).then(
      (response: AxiosResponse) => {
        context.dispatch("readAll");
      },
      (error: AxiosError) => {
        errorHandler(error);
      }
    );
  },
  createOne(
    context: ActionContext<IPostsState, IRootState>,
    post: IPost
  ): Promise<void> {
    return Axios.post(`http://localhost:3000/posts`, post).then(
      (response: AxiosResponse) => {
        context.commit("resetOne");
      },
      (error: AxiosError) => {
        errorHandler(error);
      }
    );
  },
  updateOne(
    context: ActionContext<IPostsState, IRootState>,
    post: IPost
  ): Promise<void> {
    return Axios.put(`http://localhost:3000/posts/${post.id}`, post).then(
      (response: AxiosResponse) => {
        context.commit("resetOne");
      },
      (error: AxiosError) => {
        errorHandler(error);
      }
    );
  }
};
