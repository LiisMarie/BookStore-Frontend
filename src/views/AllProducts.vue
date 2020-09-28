<template>
    <div class="container">
        <div class="row mt-3">
            <div v-for="(product) in collections" :key="product.isbn" class="col-sm-6 col-md-4 col-lg-3">
                <product-card :product="product" :updateCart="updateCart"></product-card>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductCard from '../components/common_components/ProductCard'

    export default {
        name: 'AllProducts',
        props: ['updateCart'],
        data () {
          return {
            'collections': []
          }
        },
        async created () {
          this.collections = await this.getAllBooks();
        },
        components: {
              'product-card': ProductCard
          }
      }
</script>

<style scoped>

</style>
