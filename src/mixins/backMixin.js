import Vue from "vue";
import Data from '../assets/book_list.json'

Vue.mixin({
    data () {
        return {
            'cart': [],
        }
    },
    computed: {
        amountOfItems() {
            if (this.cart.length === 0) {
                return ""
            }
            return this.cart.length
        },
        totalPrice () {
            let total = 0
            for (let i = 0; i < this.cart.length; i++) {
                total += Number(this.cart[i].cost)
            }
            return total
        }
    },
    methods: {
        getCategories() {
            // todo get from back
            return ["Fiction", "Children’s Books and Teaching", "Hobbies and Free Time", "Body and Mind", "Science and Technology", "Society and Humanities"];
        },
        getAllBooks() {
            // todo get from back
            return Data.collection;
        },
        getBookByIsbn(isbn) {
            // todo get from back
            return this.getAllBooks().find((item) => {
                return item.isbn == isbn
            });
        },
        addToCart: function (product) {
            if (!this.cart.includes(product)) {
                this.cart.push(product)
            }
            this.productHeading = product.heading
            this.productCost = product.cost
            this.productPicture = product.picture
            this.$bvModal.show("addToCartModal")
        },
        removeFromCart: function (product) {
            const index = this.cart.indexOf(product);
            if (index > -1) {
                this.cart.splice(index, 1);
            }
        }
    }
})
