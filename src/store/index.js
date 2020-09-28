import Vue from "vue";
import Vuex from "vuex";
import Api from '../services/Api'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedInUserId: Number,
    shoppingCart: [],
    purchaseTotalPrice: 0,
    amountOfItemsInCart: 0,
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
      var totalPrice = 0;
      var amountOfItems = 0;
      for (var i in shoppingCart) {
        totalPrice += shoppingCart[i].cost;
        amountOfItems ++;
      }
      state.purchaseTotalPrice = totalPrice;
      state.amountOfItemsInCart = amountOfItems;
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
      console.log("emptying cart that belongs to user with id:  " + this.loggedInUserId);
      Api().delete('/shopping/' + this.loggedInUserId)
          .catch(err => console.log(err));
    }
  },
  modules: {}
});
