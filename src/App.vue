<template>
  <div id="app">
    <nav-bar :categories="categoriesMap" :amountOfItemsInCart="computeAmountOfItems"></nav-bar>
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
        'categoriesMap': [],
        'productHeading': "",
        'productCost': 0,
        'productPicture': ""
      }
    },
    components: {
      'nav-bar': Navbar,
      'add-to-cart-modal': AddToCartModal
    },
    async created () {
      this.categoriesMap = await this.getCategories();
      this.collections = await this.getAllBooks();
    }
  }
</script>

<style lang="scss">

</style>
