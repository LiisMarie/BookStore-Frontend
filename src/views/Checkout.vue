<template>
    <div class="container">
        <div class="row mt-2">
            <div class="col-sm-8">
                <b-card header="My Cart">
                    <p v-if="!purchase || purchase.length === 0 ">No Books in the Cart!</p>
                    <div class="row mt-2 md-1" v-for="product in cartItems" :key="product.Item.heading">
                        <div class="col-sm-3">
                            <b-img fluid :src="product.Item.picture" class="p-2"></b-img>
                        </div>
                        <div class="col-sm-9">
                            <div>
                                <h5>{{product.Item.heading}}</h5>
                                <p>Author: {{product.Item.author}}</p>
                                <p>Amount: {{product.amount}}</p>
                                <p>Price: {{product.Item.cost}}€</p>
                            </div>
                        </div>
                    </div>
                </b-card>
            </div>
            <div class="col-sm-4 text-center">
                <b-card header="Pricing Details">
                    <p>Total Price:</p>
                    <h3>${{purchase}}</h3>
                    <hr>
                    <b-btn href="#" variant="outline-primary">Place Order</b-btn>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Checkout',
        props: ['cart', 'purchase'],
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
