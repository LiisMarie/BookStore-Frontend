<template>
  <div id="app">
    <nav-bar :categories="categoriesMap"></nav-bar>
    <router-view :updateCart="addToCart" :cart="cart"/>

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
    }
  }
</script>

<style lang="scss">

</style>
