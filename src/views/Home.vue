<template>
  <div class="container">
    <div v-for="(category) in categories" :key="category">
      <product-deck  :products="getDisplayProducts(category)" :product_category="category" :updateCart="updateCart"></product-deck>
    </div>
  </div>
</template>

<script>
  import ProductDeck from '../components/home_components/ProductDeck'

  export default {
    name: "Home",
    props: ['dataset', 'updateCart'],
    data () {
      return {
        'collections': this.dataset,
        'categories': []
      }
    },
    components: {
      'product-deck': ProductDeck
    },
    created () {
      this.categories = this.getCategories()
    },
    methods: {
      getDisplayProducts (category) {
        let productList = this.collections.filter((product) => {
          if (product.genre === category.genreName) {
            return product
          }
        })
        return productList.slice(0, 3)
      }
    }
  };

</script>
