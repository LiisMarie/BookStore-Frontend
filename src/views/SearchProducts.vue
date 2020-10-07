<template>
  <b-container class="mt-3">
    <h2>Search for books</h2>

    <search-books-form
      :updateCart="updateCart"
      :deleteProductModal="deleteProductModal"
    />

    <div v-if="isUserInputPresent()">
      <h5>Search results for: {{ this.cleanedSearchInput }}</h5>

      <products-display
        :updateCart="updateCart"
        :deleteProductModal="deleteProductModal"
        :collections="this.collections"
      />
    </div>
  </b-container>
</template>

<script>
import ProductsDisplay from "../components/product_components/ProductsDisplay";
import SearchBooksForm from "../components/forms/SearchBooksForm";

export default {
  name: "SearchProducts",
  components: {
    "products-display": ProductsDisplay,
    "search-books-form": SearchBooksForm
  },
  data() {
    return {
      collections: [],
      cleanedSearchInput: String,
      userInput: ""
    };
  },
  props: ["updateCart", "deleteProductModal"],
  methods: {
    isUserInputPresent() {
      return this.cleanedSearchInput.trim();
    }
  },
  async created() {
    this.cleanedSearchInput = this.replaceUnderscoresWithSpaces(
      this.$route.params.searchInput
    );
    if (this.isUserInputPresent())
      this.collections = await this.getBooksBySearch(this.cleanedSearchInput);
  }
};
</script>
