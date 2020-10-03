<template>
  <div>
    <image-carousel />

    <b-container class="mt-3">
      <div v-for="category in categories" :key="category.genreName">
        <product-deck
          :products="getDisplayProducts(category.genreName)"
          :productCategory="category.genreName"
          :updateCart="updateCart"
          :deleteProductModal="deleteProductModal"
        />
      </div>
    </b-container>
  </div>
</template>

<script>
import ProductDeck from "../components/product_components/ProductDeck";
import CarouselForHome from "../components/common_components/CarouselForHome";

export default {
  name: "Home",
  components: {
    "product-deck": ProductDeck,
    "image-carousel": CarouselForHome
  },
  data() {
    return {
      collections: [],
      categories: []
    };
  },
  props: ["updateCart", "deleteProductModal"],
  async created() {
    this.categories = await this.getCategories();
    this.collections = await this.getAllBooks();
  },
  methods: {
    getDisplayProducts(category) {
      let productList = this.collections.filter(product => {
        if (product.genre === category) {
          return product;
        }
      });
      return productList.slice(0, 3);
    }
  }
};
</script>
