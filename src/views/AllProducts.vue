<template>

  <b-container>
    <h1>All books</h1>

    <products-display :updateCart="updateCart" :deleteBookModal="deleteBookModal" :collections="this.collections"/>
  </b-container>

</template>

<script>
    import ProductsDisplay from '../components/common_components/ProductsDisplay'

    export default {
        name: 'AllProducts',
        props: ['updateCart', 'deleteBookModal'],
        data () {
          return {
            'collections': []
          }
        },
        async created () {
          this.collections = await this.getAllBooks();
        },
        components: {
              'products-display': ProductsDisplay
        }
      }
</script>

<style scoped>

</style>
