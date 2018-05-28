<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box is-half column is-offset-one-quarter">
        <div class="field">
          <label class="label">Title</label>
          <input
            v-model="title"
            class="input"
            type="text"
            name="title"
            id="title"
          />
        </div>
        <div class="field">
          <label class="label">Author</label>
          <input
            v-model="author"
            class="input"
            type="text"
            name="author"
            id="author"
          />
        </div>
        <div class="field is-grouped is-grouped-right">
          <button
            v-if="$store.getters['posts/one']"
            class="button is-primary"
            @click="updateOnePostFinishClick($store.getters['posts/one'].id)"
          >
            Update
          </button>
          <button
            v-if="!$store.getters['posts/one']"
            class="button is-primary"
            @click="createOnePostFinishClick()"
          >
            Create
          </button>
        </div>
      </div>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="abort()"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  created() {
    if (this.$store.getters["posts/one"]) {
      this.title = this.$store.getters["posts/one"].title;
      this.author = this.$store.getters["posts/one"].author;
    }
  },
  data: () => ({
    author: "",
    title: ""
  }),
  methods: {
    createOnePostFinishClick() {
      const post: IPost = {
        author: this.author,
        title: this.title
      };
      this.$store.dispatch("posts/createOne", post).then(() => {
        this.$emit("modalFinished");
      });
    },
    updateOnePostFinishClick(postId: IPost["id"]) {
      const post: IPost = {
        author: this.author,
        id: postId,
        title: this.title
      };
      this.$store.dispatch("posts/updateOne", post).then(() => {
        this.$emit("modalFinished");
      });
    },
    abort() {
      this.$store.commit("posts/resetOne");
      this.$emit("modalFinished");
    }
  },
  name: "PostForm"
});
</script>

