<template>
    <b-container>
        <div class="row mt-2">
            <div class="col-sm-8">
                <b-card header="My Cart" id="cart">

                  <p v-if="!purchaseTotalPrice || purchaseTotalPrice.length === 0 ">No Books in the Cart!</p>

                  <div class="row mt-2 md-1" v-for="product in shoppingCart" :key="product.isbn">
                        <div class="col-sm-3">
                          <!-- TODO fix picture
                          <b-img style="max-height:200px" fluid src="" :id="product.isbn" class="p-2"></b-img>
                          -->
                        </div>
                        <div class="col-sm-9">
                            <div>
                              <b-button size="sm" @click.prevent="removeFromCart(product)" variant="danger" style="float: right"><font-awesome-icon :icon="['fas', 'trash']"/></b-button>

                              <h5>{{ product.heading }}</h5>

                                <div class="row">
                                    <div class="col-4">Author:</div>
                                    <div class="col-8">{{ product.author }}</div>
                                </div>
                                <div class="row">
                                    <div class="col-4">Price:</div>
                                    <div class="col-8">{{ product.cost }}€</div>
                                </div>

                                <hr>
                            </div>
                        </div>
                    </div>
                </b-card>
            </div>
            <div class="col-sm-4 text-center">
                <b-card header="Pricing Details">
                    <p>Total Price:</p>
                    <h3>{{ purchaseTotalPrice }}€</h3>
                    <hr>
                    <b-button @click="emptyUserCart" variant="outline-primary">Place Order</b-button>
                </b-card>
            </div>
        </div>
    </b-container>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'Checkout',
        props: ['updateCart'],
        beforeCreate() {
          this.$store.dispatch('loadShoppingCart');
        },
        computed:
          mapState([
              'shoppingCart',
              'purchaseTotalPrice'
          ]),
        methods: {
            emptyUserCart() {
              this.$store.commit('authenticate', {loggedInUserId: 1}) // TODO part2 real user authentication
              this.$store.dispatch('emptyCart');
              this.$store.dispatch('loadShoppingCart');
              this.$router.go(0);
            }
          }
    }
</script>

<style scoped>

</style>
