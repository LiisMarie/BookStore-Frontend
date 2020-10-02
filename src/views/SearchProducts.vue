<template>

  <b-container class="mt-3">
    <h2>Search for books</h2>

    <b-form @submit="onSubmit">
      <b-input-group class="mb-3">
        <b-form-input
            id="input-search"
            v-model="userInput"
            placeholder="Search by ISBN, heading, author or keyword"/>
        <b-input-group-append>
          <b-button type="submit" variant="success">Search</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form>

    <div v-if="isUserInputPresent()">
        <h5>Search results for: {{ this.cleanedSearchInput }}</h5>


      <products-display :updateCart="updateCart" :deleteProductModal="deleteProductModal" :collections="this.collections"/>
    </div>
  </b-container>

</template>

<script>
import ProductsDisplay from '../components/product_components/ProductsDisplay'

export default {
  name: 'SearchProducts',
  components: {
    'products-display': ProductsDisplay
  },
  data () {
    return {
      'collections': [],
      'cleanedSearchInput': String,
      'userInput': ''
    }
  },
  props: ['updateCart', 'deleteProductModal'],
  methods: {
    isUserInputPresent() {
      return this.cleanedSearchInput.trim();
    },
    onSubmit() {
      if (this.userInput.length !== 0) this.$router.push('/search-books/' + this.replaceSpaceWithUnderscore(this.userInput));
    }
  },
  async created () {
    this.cleanedSearchInput = this.replaceUnderscoresWithSpaces(this.$route.params.searchInput);
    if (this.isUserInputPresent()) this.collections = await this.getBooksBySearch(this.cleanedSearchInput);
  }
}
</script>

<style scoped>

</style>
