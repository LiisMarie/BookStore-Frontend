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
              :options="sortingOptions"/>
        </div>
      </b-col>
    </b-row>

    <products-display :updateCart="updateCart"
                      id="productsDisplay"
                      ref="productsDisplay"
                      :deleteBookModal="deleteBookModal"
                      :collections.sync="collections"/>
  </b-container>

</template>

<script>
    import ProductsDisplay from '../components/common_components/ProductsDisplay'

    export default {
        name: 'AllProducts',
        props: ['updateCart', 'deleteBookModal'],
        data () {
          return {
            'collections': [],
            'selectedSortingOption': 'randomly',
            sortingOptions: [
              { value: 'randomly', text: 'No attributes' },
              { value: 'ascending', text: 'Price: low to high' },
              { value: 'descending', text: 'Price: high to low' },
            ]
          }
        },
        async mounted () {
          this.collections = await this.getAllBooks();
        },
        components: {
          'products-display': ProductsDisplay
        },
        watch: {
          async selectedSortingOption() {
            if (this.selectedSortingOption === 'randomly') {
              this.collections = await this.getAllBooks();
            } else {
              this.collections = await this.getSortedBooks(this.selectedSortingOption);
            }
          }
        }
      }
</script>

<style scoped>

</style>
