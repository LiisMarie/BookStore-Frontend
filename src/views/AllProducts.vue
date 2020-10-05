<template>
  <b-container class="mt-3">
    <b-row>
      <b-col lg="9" md="8">
        <h1>All books</h1>
      </b-col>

      <b-col lg="3" md="4">
        <div class="form-inline">
          <p class="mr-2">Sort by</p>
          <b-form-select
            size="sm"
            v-model="selectedSortingOption"
            :options="sortingOptions"
            style="max-width: 150px"
          />
        </div>
      </b-col>
    </b-row>

    <b-row
      ><search-books-form
        :updateCart="updateCart"
        :deleteProductModal="deleteProductModal"
    /></b-row>

    <products-display
      :updateCart="updateCart"
      id="productsDisplay"
      ref="productsDisplay"
      :deleteProductModal="deleteProductModal"
      :collections.sync="collections"
    />
  </b-container>
</template>

<script>
import ProductsDisplay from "../components/product_components/ProductsDisplay";
import SearchBooksForm from "../components/forms/SearchBooksForm";

export default {
  name: "AllProducts",
  components: {
    "products-display": ProductsDisplay,
    "search-books-form": SearchBooksForm
  },
  data() {
    return {
      collections: [],
      selectedSortingOption: "randomly",
      sortingOptions: [
        { value: "randomly", text: "No attributes" },
        { value: "ascending", text: "Price: low to high" },
        { value: "descending", text: "Price: high to low" }
      ]
    };
  },
  props: ["updateCart", "deleteProductModal"],
  watch: {
    async selectedSortingOption() {
      if (this.selectedSortingOption === "randomly") {
        this.collections = await this.getAllBooks();
      } else {
        this.collections = await this.getSortedBooks(
          this.selectedSortingOption
        );
      }
    }
  },
  async mounted() {
    this.collections = await this.getAllBooks();
  }
};
</script>
