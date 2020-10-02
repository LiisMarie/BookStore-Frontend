import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

import "@babel/polyfill";
import "mutationobserver-shim";
import "./plugins/bootstrap-vue";
import "./plugins/font-awesome";
import "./plugins/vuelidate";
import "./mixins/backMixin";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
