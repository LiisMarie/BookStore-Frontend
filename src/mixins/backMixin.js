import Vue from "vue";
import Api from '../services/Api'

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
        }
    },
    methods: {
        async getCategories() {
            let genresMap = [];
            await Api().get('/genre')
                .then(response => {
                    let genresResponse = [...response.data];
                    for (let i in genresResponse) {
                        genresMap.push(genresResponse[i]);
                    }
                })
                .catch(err => console.log(err))
            return genresMap;
        },
        async getAllBooks() {
            let books = [];
            await Api().get('/data/books')
                .then(response => {
                    books = [...response.data];
                })
                .catch(err => console.log(err));
            return books;
        },
        async getBooksByCategory(category) {
            let books = [];
            await Api().get('/data/books/genre/' + category)
                .then(response => {
                    books = [...response.data];
                })
                .catch(err => console.log(err));
            return books;
        },
        async getBookByIsbn(isbn) {
            let book = [];
            await Api().get('/data/books/isbn/' + isbn)
                .then(response => {
                   book = response.data;
                })
                .catch(err => console.log(err));
            return book;
        },
        async addToCart(product) {
            const params = {
                userId: 1,
                bookId: product.bookId
            }
            await Api().post('/shopping', params).catch(err => console.log(err));
            this.productHeading = product.heading;
            this.productCost = product.cost;
            this.productPicture = product.image;
            this.$bvModal.show("addToCartModal");
        },
        removeFromCart(product) {
            // todo delete from back
            console.log("product to delete " + product);
        },
        async removeAllProductsFromCart() {
            await Api().delete('/shopping/1')
                .then(response => {
                    console.log(response.data);
                })
                .catch(err => console.log(err));
            // todo display a modal
        },
        addBook() {
            // todo add to real back
            console.log("adding book");
            alert("Form submitted!");
        },
        replaceSpaceWithUnderscore(strToReplace) {
            return strToReplace.replaceAll(" ", "_");
        },
        replaceUnderscoresWithSpaces(strToReplace) {
            return strToReplace.replaceAll("_", " ");
        },
        placeBookPicture(imageId, pictureByteArray) {
            document.getElementById(imageId).src = this.getSrcForPictureFromByteArray(pictureByteArray);
        },
        getSrcForPictureFromByteArray(pictureByteArray) {
            return "data:image/png;base64," + pictureByteArray;
        }
    }
})
