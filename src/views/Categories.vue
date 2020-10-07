<template>
  <b-container class="mt-3">
    <h1>
      {{ this.replaceUnderscoresWithSpaces(this.$route.params.category) }}
    </h1>

    <b-row
      ><search-books-form
        :updateCart="updateCart"
        :deleteProductModal="deleteProductModal"
    /></b-row>

    <products-display
      :updateCart="updateCart"
      :deleteProductModal="deleteProductModal"
      :collections="this.collections"
    />
  </b-container>
</template>

<script>
import ProductsDisplay from "../components/product_components/ProductsDisplay";
import SearchBooksForm from "../components/forms/SearchBooksForm";

export default {
  name: "Categories",
  components: {
    "products-display": ProductsDisplay,
    "search-books-form": SearchBooksForm
  },
  data() {
    return {
      collections: []
    };
  },
  props: ["updateCart", "deleteProductModal"],
  methods: {
    async loadBooks() {
      this.collections = await this.getBooksByCategory(
        this.replaceUnderscoresWithSpaces(this.$route.params.category)
      );
    }
  },
  watch: {
    $route() {
      this.loadBooks();
    }
  },
  async created() {
    await this.loadBooks();
  }
};
</script>
