<template>
    <b-card v-if="products.length !== 0" no-body class="mt-3">
        <b-card-header>{{ product_category }} <b-btn class="float-right btn-info btn-sm" v-on:click="seeAll(product_category)">See all</b-btn></b-card-header>
        <b-card-body>
            <b-card-group deck class="row">
                <div class="col-sm-6 col-md-4" v-for="product in products" :key="product.isbn">
                    <product-card :product="product" :updateCart="updateCart"></product-card>
                </div>
            </b-card-group>
        </b-card-body>
    </b-card>
</template>

<script>
    import ProductCard from '../common_components/ProductCard'

    export default {
        name: 'ProductDeck',
        components: {
            'product-card': ProductCard
        },
        props: ['products', 'product_category', 'updateCart'],
        methods: {
          seeAll(category) {
            this.$router.push('/categories/' + this.replaceSpaceWithUnderscore(category))
          }
        }
    }
</script>

<style scoped>

</style>
