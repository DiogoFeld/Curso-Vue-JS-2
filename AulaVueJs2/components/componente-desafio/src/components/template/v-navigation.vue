<template>
  <div>
    <v-navigation-drawer app>
    <v-toolbar />
      
      <v-divider></v-divider>
    <v-list />
      
    </v-navigation-drawer>
  </div>
</template>

<script>
import v_list from "@/components/template/v-navigation.vue";
import v_toolbar from "@/components/template/toolbar.vue"
export default {
  components: { "v-list": v_list,"v-toolbar":v_toolbar},
};
</script>

<style>
</style>