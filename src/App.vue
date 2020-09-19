<template>
  <div id="app">
    <nav-bar :categories="categories" :amountOfItemsInCart="computeAmountOfItems"></nav-bar>
    <router-view :dataset="collections" :updateCart="addToCart" :cart="cart" :purchaseTotalPrice="computeTotalPrice"/>

    <add-to-cart-modal :title="productHeading" :cost="productCost" :picture="productPicture"/>
  </div>
</template>

<script>
  import Navbar from './components/common_components/Navbar'
  import AddToCartModal from "./components/common_components/AddToCartModal";

  export default {
    name: 'App',
    data () {
      return {
        'collections': [],
        'categories': [],
        'productHeading': "",
        'productCost': 0,
        'productPicture': ""
      }
    },
    components: {
      'nav-bar': Navbar,
      'add-to-cart-modal': AddToCartModal
    },
    created () {
      this.categories = this.getCategories();
      this.collections = this.getAllBooks();
    }
  }
</script>

<style lang="scss">

</style>
