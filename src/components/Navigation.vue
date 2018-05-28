<template>
  <nav class="navbar container" role="navigation" aria-label="main navigation">
    <div class="navbar-brand has-text-centered">
      <router-link class="navbar-item" to="/">Home</router-link>
      <router-link class="navbar-item" to="/posts">Posts</router-link>
      <router-link class="navbar-item" to="/about">About</router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Navigation"
});
</script>

<style lang="scss" scoped>
.navbar {
  margin-bottom: 30px;
}
.router-link-exact-active {
  text-decoration: underline;
}
</style>
