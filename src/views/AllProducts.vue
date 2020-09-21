<template>
<div class="container">
    <div class="row mt-3">
        <div v-for="(product) in collections" :key="product.heading + product.cost" class="col-sm-6 col-md-4 col-lg-3">
            <product-card :product="product" :updateCart="updateCart"></product-card>
        </div>
    </div>
</div>
</template>

<script>
import ProductCard from '../components/common_components/ProductCard'

export default {
    name: 'AllProducts',
    props: ['dataset', 'updateCart'],
    data() {
        return {
            collections: this.dataset
        }
    },
    components: {
        'product-card': ProductCard
    },
    created() {
        this.collections = this.getAllBooks();
        console.log(this.collections)
    }
}
</script>

<style scoped>

</style>
