import Vue from 'vue'
import App from './main/App.vue'
import vuetify from './plugins/vuetify';

// import navigation_app from "@/components/template/v-navigation.vue"
// import corousel_app from "@/components/widgtes/corousel.vue";
// import bar_app from "@/components/template/app-bar.vue";
// import footer_app from "@/components/template/footer.vue";


Vue.config.productionTip = false
// Vue.component('v-navigation-app',navigation_app);
// Vue.component('v-bar-app',bar_app);
// Vue.component('v-corousel-app',corousel_app);
// Vue.component('v-footer-app',footer_app);


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
