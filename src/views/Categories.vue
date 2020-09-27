<template>
    <div class="container">
        <h1>{{this.replaceUnderscoresWithSpaces(this.$route.params.category)}}</h1>

      <p v-if="!computedItems || computedItems.length === 0 ">No books to show!</p>

      <div class="row mt-3">
            <div v-for="product in computedItems" :key="product.isbn" class="col-sm-6 col-md-4 col-lg-3">
                <product-card :product="product" :updateCart="updateCart"></product-card>
            </div>
        </div>
    </div>

</template>

<script>
    import ProductCard from '../components/common_components/ProductCard'

    export default {
        name: 'Categories',
        props: ['dataset', 'updateCart'],
        data () {
            return {
                'collections': this.dataset
            }
        },
        components: {
            'product-card': ProductCard
        },
        computed: {
            computedItems () {
                let genreName = this.replaceUnderscoresWithSpaces(this.$route.params.category);
                let productList = this.collections.filter((product) => {
                    if (product.genre === genreName) {
                        return product
                    }
                })
                return productList
            }
        }
    }
</script>

<style scoped>

</style>
