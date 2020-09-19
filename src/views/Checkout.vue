<template>
    <b-container>
        <div class="row mt-2">
            <div class="col-sm-8">
                <b-card header="My Cart">
                  <p v-if="!purchase || purchase.length === 0 ">No Books in the Cart!</p>

                    <div class="row mt-2 md-1" v-for="product in cartItems" :key="product.Item.heading">
                        <div class="col-sm-3">
                          <b-img style="max-height:200px" fluid :src="product.Item.picture" class="p-2"></b-img>
                        </div>
                        <div class="col-sm-9">
                            <div>
                              <b-button size="sm" @click.prevent="removeFromCart(product.Item)" variant="danger" style="float: right"><font-awesome-icon :icon="['fas', 'trash']"/></b-button>

                              <h5>{{product.Item.heading}}</h5>

                                <div class="row">
                                    <div class="col-4">Author:</div>
                                    <div class="col-8">{{product.Item.author}}</div>
                                </div>
                                <div class="row">
                                    <div class="col-4">Price:</div>
                                    <div class="col-8">{{product.Item.cost}}€</div>
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
                    <h3>{{purchase}}€</h3>
                    <hr>
                    <b-btn href="#" variant="outline-primary">Place Order</b-btn>
                </b-card>
            </div>
        </div>
    </b-container>
</template>

<script>
    export default {
        name: 'Checkout',
        props: ['cart', 'purchase', 'updateCart'],
        computed: {
            cartItems () {
                return this.computeCart()
            }
        },
        methods: {
            computeCart: function () {
                let newCart = []
                this.cart.forEach((item) => {
                    let index = newCart.findIndex((element) => {
                        return element.Item === item
                    })
                    if (index >= 0) {
                        newCart[index].amount += 1
                    } else {
                        newCart.push({
                            Item: item,
                            amount: 1
                        })
                    }
                })
                return newCart
            }
        }
    }
</script>

<style scoped>

</style>
