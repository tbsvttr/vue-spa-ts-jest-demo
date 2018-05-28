<template>
  <div id="app">
    <Navigation />
    <router-view/>
  </div>
</template>

<script lang="ts">
import Navigation from "@/components/Navigation.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    Navigation
  },
  name: "App"
});
</script>

