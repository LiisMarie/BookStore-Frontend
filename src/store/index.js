import Vue from "vue";
import Vuex from "vuex";
import Api from '../services/Api'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedInUserId: Number,
    shoppingCart: [],
    purchaseTotalPrice: 0,
    productToDelete: Number
  },
  getters: {
    shoppingCart: state => {
      return state.shoppingCart;
    }
  },
  mutations: {
    authenticate(state, { loggedInUserId }) {
      this.loggedInUserId = loggedInUserId;
    },
    SET_ShoppingCart (state, shoppingCart) {
      state.shoppingCart = shoppingCart;
      let totalPrice = 0;
      for (const i in shoppingCart) {
        totalPrice += shoppingCart[i].cost;
      }
      state.purchaseTotalPrice = totalPrice;
    },
    SET_ProductToDelete (state, { productToDelete }) {
      this.productToDelete = productToDelete;
    }
  },
  actions: {
    loadShoppingCart ({ commit }) {
      Api()
          .get('/user/list/1')
          .then(response => [...response.data])
          .then(shoppingCart => {
            commit('SET_ShoppingCart', shoppingCart)
          })
    },
    emptyCart () {
      Api().delete('/shopping/' + this.loggedInUserId)
          .catch(err => console.log(err));
    },
    deleteItemFromCart() {
      console.log("removing book with id:  " + this.productToDelete);
      // todo remove item from cart
    }
  },
  modules: {}
});
