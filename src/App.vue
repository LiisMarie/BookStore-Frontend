<template>
  <div id="app">
    <nav-bar :categories="categories" :purchase="amountOfItems"></nav-bar>
    <router-view :dataset="collections" :updateCart="addToCart" :cart="cart" :purchase="totalPrice" />

    <add-to-cart-modal :title="productHeading" :cost="productCost" :picture="productPicture"/>
  </div>
</template>

<script>
  import Navbar from './components/common_components/Navbar'
  import Data from './assets/book_list.json'
  import AddToCartModal from "./components/common_components/AddToCartModal";

  export default {
    name: 'App',
    data () {
      return {
        'collections': Data.collection,
        'categories': [],
        'cart': [],
        'productHeading': "",
        'productCost': 0,
        'productPicture': ""
      }
    },
    computed: {
      amountOfItems() {
        if (this.cart.length === 0) {
          return ""
        }
        return this.cart.length
      },
      totalPrice () {
        let total = 0
        for (let i = 0; i < this.cart.length; i++) {
          total += Number(this.cart[i].cost)
        }
        return total
      }
    },
    components: {
      'nav-bar': Navbar,
      'add-to-cart-modal': AddToCartModal
    },
    created () {
      this.categories = this.getCategories()
    },
    methods: {
      getCategories: function () {
        let listedCategories = []
        this.collections.filter((product) => {
          if (!listedCategories.includes(product.genre)) {
            listedCategories.push(product.genre)
          }
        })
        return listedCategories
      },
      addToCart: function (product) {
          if (!this.cart.includes(product)) {
              this.cart.push(product)
          }
          this.productHeading = product.heading
          this.productCost = product.cost
          this.productPicture = product.picture
          this.$bvModal.show("addToCartModal")
      }
    }
  }
</script>

<style lang="scss">

</style>
