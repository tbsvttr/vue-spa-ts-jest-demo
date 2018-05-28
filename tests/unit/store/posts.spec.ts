import DB from "!/db.json";
import { makeFakePost } from "%/helper/faker_factory";
import { store } from "@/store";

describe("initial state", () => {
  it("posts.item via state", () => {
    expect(store.state.posts).toEqual({ item: undefined });
  });

  it("posts.items via state", () => {
    expect(store.state.posts).toEqual({ items: undefined });
  });

  it("posts.item via getter", () => {
    expect(store.getters["posts/one"]).toBe(undefined);
  });

  it("posts.items via getter", () => {
    expect(store.getters["posts/all"]).toBe(undefined);
  });
});

describe("store and read many posts", () => {
  const fakePosts: IPost[] = [makeFakePost(), makeFakePost()];
  it("can commit them", () => {
    expect(store.commit("posts/storeAll", fakePosts));
  });
  it("can read them all", () => {
    expect(store.getters["posts/all"]).toEqual(fakePosts);
  });
  it("can read one of them", () => {
    expect(store.getters["posts/findOneInAll"](fakePosts[0].id)).toEqual(
      fakePosts[0]
    );
  });
});

describe("store and read one post", () => {
  const fakePost: IPost = makeFakePost();
  it("can commit it", () => {
    expect(store.commit("posts/storeOne", fakePost));
  });
  it("can read it", () => {
    expect(store.getters["posts/one"]).toEqual(fakePost);
  });
});

describe("store and read one post", () => {
  const fakePost: IPost = makeFakePost();
  it("can commit it", () => {
    expect(store.commit("posts/storeOne", fakePost));
  });
  it("can read it", () => {
    expect(store.getters["posts/one"]).toEqual(fakePost);
  });
});

// Actions
describe("actions work", () => {
  const fakePost: IPost = makeFakePost();

  it("readAll works", async () => {
    await store.dispatch("posts/readAll").then(() => {
      expect(store.getters["posts/all"]).toEqual(DB.posts);
    });
  });

  it("readOne works", async () => {
    const firstId = store.getters["posts/all"][0].id;
    await store.dispatch("posts/readOne", firstId).then(() => {
      expect(store.getters["posts/one"]).toEqual(
        DB.posts.find((post: IPost) => post.id! === firstId)
      );
    });
  });

  it("updateOne works", async () => {
    // Setup
    await store.dispatch("posts/readAll").then(async () => {
      const firstPost = store.getters["posts/all"][0];
      const firstId = firstPost.id;
      const fakePostWithFirstId: IPost = {
        author: fakePost.author,
        id: firstId,
        title: fakePost.title
      };
      // Test
      await store
        .dispatch("posts/updateOne", fakePostWithFirstId)
        .then(async () => {
          await store.dispatch("posts/readAll").then(async () => {
            expect(
              store.getters["posts/all"].find(
                (post: IPost) => post.id! === firstId
              )
            ).toEqual(fakePostWithFirstId);
            // Teardown
            await store.dispatch("posts/updateOne", firstPost);
          });
        });
    });
  });

  it("deleteOne works", async () => {
    // Setup
    await store.dispatch("posts/readAll").then(async () => {
      const firstPost = store.getters["posts/all"][0];
      const firstPostWithOutId = {
        author: firstPost.author,
        title: firstPost.title
      };
      const firstId = firstPost.id;
      const fakePostWithFirstId: IPost = {
        author: fakePost.author,
        id: firstId,
        title: fakePost.title
      };
      // Test
      expect(
        await store.dispatch("posts/deleteOne", firstId).then(async () => {
          await store.dispatch("posts/readAll").then(async () => {
            expect(
              store.getters["posts/all"].find(
                (post: IPost) => post.id! === firstId
              )
            ).toEqual(undefined);
            // Teardown
            await store.dispatch("posts/createOne", firstPostWithOutId);
          });
        })
      );
    });
  });

  it("createOne works", async () => {
    // Setup
    await store.dispatch("posts/readAll").then(async () => {
      const fakePostWithoutId: IPost = {
        author: fakePost.author,
        title: fakePost.title
      };
      // Test
      expect(
        await store
          .dispatch("posts/createOne", fakePostWithoutId)
          .then(async () => {
            await store.dispatch("posts/readAll").then(async () => {
              const postFromServer: IPost = store.getters["posts/all"].find(
                (post: IPost) =>
                  post.author === fakePostWithoutId.author &&
                  post.title === fakePostWithoutId.title
              );
              expect(store.getters["posts/all"]).toContainEqual(postFromServer);
              // Teardown
              await store.dispatch("posts/deleteOne", postFromServer.id);
            });
          })
      );
    });
  });
});
