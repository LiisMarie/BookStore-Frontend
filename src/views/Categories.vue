<template>

    <b-container>
      <h1>{{this.replaceUnderscoresWithSpaces(this.$route.params.category)}}</h1>

      <products-display :updateCart="updateCart" :deleteProductModal="deleteProductModal" :collections="this.collections"/>
    </b-container>

</template>

<script>
    import ProductsDisplay from '../components/common_components/ProductsDisplay'

    export default {
        name: 'Categories',
        components: {
          'products-display': ProductsDisplay
        },
        data () {
          return {
            'collections': []
          }
        },
        props: ['updateCart', 'deleteProductModal'],
        methods: {
          async loadBooks() {
            this.collections = await this.getBooksByCategory(this.replaceUnderscoresWithSpaces(this.$route.params.category));
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
    }
</script>
