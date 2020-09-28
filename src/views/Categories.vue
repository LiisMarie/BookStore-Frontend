<template>
    <div class="container">
        <h1>{{this.replaceUnderscoresWithSpaces(this.$route.params.category)}}</h1>

      <p v-if="!collections || collections.length === 0 ">No books to show!</p>

      <div class="row mt-3">
            <div v-for="product in collections" :key="product.isbn" class="col-sm-6 col-md-4 col-lg-3">
                <product-card :product="product" :updateCart="updateCart"></product-card>
            </div>
        </div>
    </div>

</template>

<script>
    import ProductCard from '../components/common_components/ProductCard'

    export default {
        name: 'Categories',
        props: ['updateCart'],
        data () {
            return {
                'collections': []
            }
        },
        components: {
            'product-card': ProductCard
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
