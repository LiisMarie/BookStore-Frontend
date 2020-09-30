<template>
    <div class="container">
      <b-card style="max-width: 20rem;" class="mb-2 text-center">

          <b-img fluid :id="product.isbn" src="" class="p-2"></b-img>

            <h4>
                {{ product.heading }}
            </h4>
            <p class="card-text">
                Author: {{ product.author }}
            </p>

            <p>Price: {{ product.cost }}€</p>

            <b-button size="sm" variant="success" @click.prevent="updateCart(product)"><font-awesome-icon :icon="['fas', 'cart-plus']"/></b-button>
            <b-button size="sm" variant="info" @click="goToDetails(product.isbn)" style="margin-left: 10px"> <font-awesome-icon :icon="['fas', 'info']"/> </b-button>
            <b-button size="sm" variant="secondary" @click="goToEditBook(product.isbn)" style="margin-left: 10px"><font-awesome-icon :icon="['fas', 'edit']"/></b-button>
            <b-button size="sm" variant="danger" @click="deleteBookModal(product)" style="margin-left: 10px"><font-awesome-icon :icon="['fas', 'trash']"/></b-button>

      </b-card>
    </div>
</template>

<script>
    export default {
        name: 'ProductCard',
        props: ['product', 'updateCart', 'deleteBookModal'],
        methods: {
            goToDetails (isbn) {
                this.$router.push('/products/' + isbn)
            },
            goToEditBook (isbn) {
                this.$router.push('/edit-book/' + isbn)
            }
        },
        mounted() {
          this.placeBookPicture(this.product.isbn, this.product.image);
        }
    }
</script>

<style scoped>

</style>
