import Vue from "vue";
import Vuex from "vuex";
import Api from "../services/Api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedInUserId: Number,
    shoppingCart: [],
    purchaseTotalPrice: 0,
    productToDelete: Number
  },
  getters: {
    shoppingCart: state => state.shoppingCart,
    purchaseTotalPrice: state => state.purchaseTotalPrice
  },
  mutations: {
    authenticate(state, { loggedInUserId }) {
      this.loggedInUserId = loggedInUserId;
    },
    SET_ShoppingCart(state, shoppingCart) {
      state.shoppingCart = shoppingCart;
      let totalPrice = 0;
      for (const i in shoppingCart) {
        totalPrice += shoppingCart[i].cost;
      }
      state.purchaseTotalPrice = totalPrice.toFixed(2);
    },
    SET_ProductToDelete(state, { productToDelete }) {
      this.productToDelete = productToDelete;
    }
  },
  actions: {
    loadShoppingCart({ commit }) {
      Api()
        .get("/user/1/shopping")
        .then(response => [...response.data])
        .then(shoppingCart => {
          commit("SET_ShoppingCart", shoppingCart);
        });
    },
    emptyCart() {
      Api()
        .delete("/shopping/" + this.loggedInUserId)
        .then(() => this.dispatch("loadShoppingCart"))
        .catch(err => console.log(err));
    },
    deleteItemFromCart() {
      Api()
        .delete(
          "/shopping/user/" +
            this.loggedInUserId +
            "/book/" +
            this.productToDelete
        )
        .then(() => this.dispatch("loadShoppingCart"))
        .catch(err => console.log(err));
    }
  },
  modules: {}
});
