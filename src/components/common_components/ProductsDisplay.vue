<template>

  <b-container>
    <div class="row mt-3">
      <p v-if="!collections || collections.length === 0 ">No books to show!</p>

      <div v-for="(product) in collections" :key="product.isbn" class="col-sm-6 col-md-4 col-lg-3">
        <product-card :product="product" :updateCart="updateCart" :deleteBookModal="deleteBookModal"/>
      </div>
    </div>
  </b-container>

</template>

<script>
import ProductCard from '../common_components/ProductCard'

export default {
  name: 'ProductsDisplay',
  props: ['updateCart', 'deleteBookModal', 'collections'],
  components: {
    'product-card': ProductCard
  }
}
</script>

<style scoped>

</style>
