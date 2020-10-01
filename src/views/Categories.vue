<template>

    <b-container>
      <h1>{{this.replaceUnderscoresWithSpaces(this.$route.params.category)}}</h1>

      <products-display :updateCart="updateCart" :deleteBookModal="deleteBookModal" :collections="this.collections"/>
    </b-container>

</template>

<script>
    import ProductsDisplay from '../components/common_components/ProductsDisplay'

    export default {
        name: 'Categories',
        props: ['updateCart', 'deleteBookModal'],
        data () {
            return {
                'collections': []
            }
        },
        components: {
            'products-display': ProductsDisplay
        },
        watch: {
          $route() {
            this.loadBooks();
          }
        },
        async created() {
            await this.loadBooks();
        },
        methods: {
            async loadBooks() {
              this.collections = await this.getBooksByCategory(this.replaceUnderscoresWithSpaces(this.$route.params.category));
            }
        }
    }
</script>

<style scoped>

</style>
