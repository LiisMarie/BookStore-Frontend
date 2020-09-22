import Vue from "vue";
import Data from '../assets/book_list.json'

Vue.mixin({
    data () {
        return {
            'cart': [],
        }
    },
    computed: {
        computeAmountOfItems() {
            if (this.cart.length === 0) {
                return "";
            }
            return this.cart.length;
        },
        computeTotalPrice () {
            let total = 0;
            for (let i = 0; i < this.cart.length; i++) {
                total += Number(this.cart[i].cost);
            }
            return total;
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
                return item.isbn == isbn;
            });
        },
        getCart() {
            // todo get from back
            return this.cart;
        },
        addToCart(product) {
            // todo add to back
            if (!this.cart.includes(product)) {
                this.cart.push(product);
            }
            this.productHeading = product.heading;
            this.productCost = product.cost;
            this.productPicture = product.image;
            this.$bvModal.show("addToCartModal");
        },
        removeFromCart(product) {
            // todo delete from back
            const index = this.cart.indexOf(product);
            if (index > -1) {
                this.cart.splice(index, 1);
            }
        },
        removeAllProductsFromCart() {
            // todo remove from back
            while (this.cart.length) {
                this.cart.pop();
            }
        },
        replaceSpaceWithUnderscore(strToReplace) {
            return strToReplace.replaceAll(" ", "_");
        },
        replaceUnderscoresWithSpaces(strToReplace) {
            return strToReplace.replaceAll("_", " ");
        }
    }
})
