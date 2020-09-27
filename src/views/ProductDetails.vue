<template>
    <div class="container">
        <div class="row mt-4">
            <div class="col-sm-4">
                <b-img fluid :src="product.image" class="p-2"></b-img>
            </div>
            <div class="col-sm-8">
                <h3>{{product.heading}}</h3>

                <hr>

                <div class="row">
                    <div class="col-2">Author:</div>
                    <div class="col-10">{{product.author}}</div>
                </div>
                <br>
                <div class="row">
                    <div class="col-2">Publisher:</div>
                    <div class="col-10">{{product.publisher}}</div>
                </div>
                <br>
                <div class="row">
                    <div class="col-2">Genre:</div>
                    <div class="col-10">{{product.genre}}</div>
                </div>
                <br>
                <div class="row">
                    <div class="col-2">Published:</div>
                    <div class="col-10">{{product.releaseYear}}</div>
                </div>
                <br>
                <div class="row">
                    <div class="col-2">ISBN:</div>
                    <div class="col-10">{{product.isbn}}</div>
                </div>

                <hr>

                <div class="row">
                    <div class="col-2">Price:</div>
                    <div class="col-10">{{product.cost}}€</div>
                </div>

                <hr>

                <p>{{product.description}}</p>
                <hr>
                <b-btn variant="primary" @click.prevent="updateCart(product)">Add to Cart</b-btn>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductDetails',
        props: ['updateCart'],
        data () {
            return {
                product: []
            }
        },
        created () {
            this.product = this.getBookByIsbn(this.$route.params.productIsbn);
        }
    }
</script>

<style scoped>

</style>
