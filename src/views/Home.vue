<template>
  <div class="container">
    <div v-for="(category) in categories" :key="category.genreName">
      <product-deck  :products="getDisplayProducts(category.genreName)"
                     :productCategory="category.genreName"
                     :updateCart="updateCart"
                     :deleteBookModal="deleteBookModal"/>
    </div>
  </div>
</template>

<script>
  import ProductDeck from '../components/home_components/ProductDeck'

  export default {
    name: "Home",
    components: {
      'product-deck': ProductDeck
    },
    data () {
      return {
        'collections': [],
        'categories': []
      }
    },
    props: ['updateCart', 'deleteBookModal'],
    async created () {
      this.categories = await this.getCategories();
      this.collections = await this.getAllBooks();
    },
    methods: {
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
