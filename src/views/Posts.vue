<template>
  <div>
    <div class="section">
      <div class="container">
        
        <article
          class="box is-half column is-offset-one-quarter"
          v-for="post in $store.getters['posts/all']"
          :key="post.id"
        >
          <header>
            <h2>{{post.title}}</h2>
            <a href="#" rel="author">{{post.author}}</a>
          </header>
          <div class="field is-grouped is-grouped-right">
            <button 
              class="button is-text"
              @click="deleteOnePostClick(post.id)"
            >Delete</button>
            <button
              class="update-post button is-primary"
              @click="updateOnePostStartClick(post.id)"
            >Update</button>
          </div>
        </article>

        <div class="is-half column is-offset-one-quarter">
          <div class="field is-grouped is-grouped-right">
            <button
              id="create-post"
              class="button is-primary"
              @click="createOnePostStartClick()"
            >Create</button>
          </div>
        </div>

      </div>
    </div>

    <PostForm
      v-if="showModal"
      @modalFinished="modalFinished()" 
    />

  </div>
</template>

<script lang="ts">
import PostForm from "@/components/posts/PostForm.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    PostForm
  },
  created() {
    this.readAllPosts();
  },
  data: () => ({
    showModal: false
  }),
  methods: {
    readAllPosts() {
      this.$store.dispatch("posts/readAll");
    },
    deleteOnePostClick(postId: IPost["id"]) {
      this.$store.dispatch("posts/deleteOne", postId);
    },
    createOnePostStartClick() {
      this.showModal = true;
    },
    updateOnePostStartClick(postId: IPost["id"]) {
      this.$store.dispatch("posts/readOne", postId).then(() => {
        this.showModal = true;
      });
    },
    modalFinished() {
      this.readAllPosts();
      this.showModal = false;
    }
  },
  name: "Posts"
});
</script>
