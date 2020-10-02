<template>

  <b-container>
    <div class="row mt-3">
      <p v-if="!collections || collections.length === 0 ">No books to show!</p>

      <div v-for="(product) in collections" :key="product.isbn" class="col-sm-6 col-md-4 col-lg-3">
        <product-card :product="product" :updateCart="updateCart" :deleteProductModal="deleteProductModal"/>
      </div>
    </div>
  </b-container>

</template>

<script>
import ProductCard from '../product_components/ProductCard'

export default {
  name: 'ProductsDisplay',
  components: {
    'product-card': ProductCard
  },
  props: ['updateCart', 'deleteProductModal', 'collections'],
  watch: {
    'collections' () {
      this.$emit('update:collections', this.collections)
    }
  }
}
</script>
