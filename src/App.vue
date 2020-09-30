<template>
  <div id="app">
    <nav-bar :categories="categoriesMap"></nav-bar>
    <router-view :updateCart="addToCart"/>

    <add-to-cart-modal :title="productHeading" :cost="productCost" :picture="productPicture"/>
    <delete-product-modal :bookId="productId" :title="productHeading" :picture="productPicture"/>
  </div>
</template>

<script>
  import Navbar from './components/common_components/Navbar'
  import AddToCartModal from "./components/common_components/AddToCartModal";
  import DeleteProductModal from "./components/common_components/DeleteProductModal";

  export default {
    name: 'App',
    data () {
      return {
        'categoriesMap': [],
        'productId': 0,
        'productHeading': "",
        'productCost': 0,
        'productPicture': ""
      }
    },
    components: {
      'nav-bar': Navbar,
      'add-to-cart-modal': AddToCartModal,
      'delete-product-modal': DeleteProductModal
    },
    async created () {
      this.categoriesMap = await this.getCategories();
    }
  }
</script>

<style lang="scss">
  .modal-title {
    width: 100%;
    text-align: center;
  }
</style>
