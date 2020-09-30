import Vue from "vue";
import Api from '../services/Api'

Vue.mixin({
    methods: {
        // READ
        async getCategories() {
            let genresMap = [];
            await Api().get('/genres')
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
        // CREATE
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
        async addBook(form) {
            const params = {
                isbn: form.isbn,
                heading: form.heading,
                releaseYear: form.releaseYear,
                publisher: form.publisher,
                author: form.author,
                genre: form.genre,
                description: form.description,
                cost: form.cost
            }
            await Api().post('/books', params)
                .then(response => {
                    this.addImage(response.data.bookId, form.image);
                })
                .catch(err => {
                    console.log(err);
                    alert("An error occurred while posting book!")
                });
        },
        async addImage(bookId, image) {
            const imgBlob = new Blob([image], { type: 'image/png' });
            const formData = new FormData();
            formData.append('imageFile', imgBlob);
            await Api().post('/images/' + bookId, formData)
                .then(() => {
                    alert("Book added successfully!");
                    this.$router.go(0);
                })
                .catch(err => {
                    console.log(err);
                    alert("An error occurred while posting image!");
                });
        },

        replaceSpaceWithUnderscore(strToReplace) {
            return strToReplace.replaceAll(" ", "_");
        },
        replaceUnderscoresWithSpaces(strToReplace) {
            return strToReplace.replaceAll("_", " ");
        },
        placeBookPicture(imageId, pictureByteArray) {
            document.getElementById(imageId).src = "data:image/png;base64," + pictureByteArray;
        }
    }
})
