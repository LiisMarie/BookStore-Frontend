<template>
  <div id="app">
    <nav-bar :categories="categoriesMap"></nav-bar>
    <router-view
      :updateCart="addToCart"
      :deleteProductModal="displayDeleteBookModal"
    />

    <add-to-cart-modal
      :title="productHeading"
      :cost="productCost"
      :picture="productPicture"
    />
    <delete-product-modal
      :bookId="productId"
      :title="productHeading"
      :picture="productPicture"
    />

    <custom-footer />
  </div>
</template>

<script>
import Navbar from "./components/common_components/Navbar";
import AddToCartModal from "./components/modals/AddToCartModal";
import DeleteProductModal from "./components/modals/DeleteProductModal";
import Footer from "./components/common_components/Footer";

export default {
  name: "App",
  components: {
    "nav-bar": Navbar,
    "add-to-cart-modal": AddToCartModal,
    "delete-product-modal": DeleteProductModal,
    "custom-footer": Footer
  },
  data() {
    return {
      categoriesMap: [],
      productId: 0,
      productHeading: "",
      productCost: 0,
      productPicture: ""
    };
  },
  async created() {
    this.categoriesMap = await this.getCategories();
  }
};
</script>

<style lang="scss">
.modal-title {
  width: 100%;
  text-align: center;
}
html {
  position: relative;
  min-height: 100%;
  padding-bottom: 10px;
}
#app {
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  color: #2c3e50;
}
</style>
