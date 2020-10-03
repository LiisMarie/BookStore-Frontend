import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faCartPlus,
  faInfo,
  faPlus,
  faMinus,
  faTrash,
  faUser,
  faEdit
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faShoppingCart,
  faCartPlus,
  faInfo,
  faPlus,
  faMinus,
  faTrash,
  faUser,
  faEdit
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
