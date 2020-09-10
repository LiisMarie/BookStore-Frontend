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
      getCategories: function () {
        let listedCategories = []
        this.collections.filter((product) => {
          if (!listedCategories.includes(product.genre)) {
            listedCategories.push(product.genre)
          }
        })
        return listedCategories
      },
      getDisplayProducts (category) {
        let productList = this.collections.filter((product) => {
          if (product.genre === category) {
            return product
          }
        })
        return productList.slice(0, 3)
      }
    }
  };

</script>
