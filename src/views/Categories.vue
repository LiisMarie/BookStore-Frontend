<template>
    <div class="container">
        <h1>{{this.$route.params.type}}</h1>
        <div class="row mt-3">
            <div v-for="product in computedItems" :key="product.heading + product.cost" class="col-sm-4">
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
                let productList = this.collections.filter((product) => {
                    if (product.genre === this.$route.params.type) {
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
