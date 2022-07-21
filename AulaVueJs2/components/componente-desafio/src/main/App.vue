<template>
  <v-app>
    <v-navigation-app />
    <v-bar-app />
    <v-corousel-app />
    <v-footer-app />
  </v-app>
</template>

<script>
import navigation_app from "@/components/template/v-navigation.vue";
import corousel_app from "@/components/widgtes/corousel.vue";
import bar_app from "@/components/template/app-bar.vue";
import footer_app from "@/components/template/footer.vue";

export default {
  components: {
    "v-navigation-app": navigation_app,"v-bar-app": bar_app,
    "v-corousel-app": corousel_app,"v-footer-app": footer_app,
  },
};
</script>
