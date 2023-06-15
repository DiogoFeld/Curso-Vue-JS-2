<template>
  <div id="app">
    <axiosApp>
    </axiosApp>

    <axiosAppPost>
    </axiosAppPost>
  </div>
</template>

<script>
import axiosApp from "./components/axiosApp.vue"
import axiosAppPost from "./components/axiosAppPost.vue";

export default {
  name: 'App',
  components: {
    axiosApp,
    axiosAppPost
  }
}
</script>

<style>

</style>