import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./mixins/backMixin";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faBook, faCartPlus, faInfo, faPlus, faMinus, faTrash, faUser} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faShoppingCart, faBook, faCartPlus, faInfo, faPlus, faMinus, faTrash, faUser);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
