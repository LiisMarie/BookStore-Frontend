import Vue from "vue";
import Api from "../services/Api";

Vue.mixin({
  methods: {
    // READ
    async getCategories() {
      let genresMap = [];
      await Api()
        .get("/genres")
        .then(response => {
          let genresResponse = [...response.data];
          for (let i in genresResponse) {
            genresMap.push(genresResponse[i]);
          }
        })
        .catch(err => console.log(err));
      return genresMap;
    },
    async getAllBooks() {
      let books = [];
      await Api()
        .get("/data/books")
        .then(response => {
          books = [...response.data];
        })
        .catch(err => console.log(err));
      return books;
    },
    async getBooksByCategory(category) {
      let books = [];
      await Api()
        .get("/data/books/genre/" + category)
        .then(response => {
          books = [...response.data];
        })
        .catch(err => console.log(err));
      return books;
    },
    async getBookByIsbn(isbn) {
      let book = [];
      await Api()
        .get("/data/books/isbn/" + isbn)
        .then(response => {
          book = response.data;
        })
        .catch(err => console.log(err));
      return book;
    },
    async getBooksBySearch(searchInput) {
      let book = [];
      await Api()
        .get("/data/search/" + searchInput)
        .then(response => {
          book = response.data;
        })
        .catch(err => console.log(err));
      return book;
    },
    async getSortedBooks(sortingAttribute) {
      let book = [];
      await Api()
        .get("/data/sort/price/" + sortingAttribute)
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
      };
      await Api()
        .post("/shopping", params)
        .catch(err => console.log(err));
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
      };
      await Api()
        .post("/books", params)
        .then(response => {
          this.addImage(response.data.bookId, form.isbn, form.image, false);
        })
        .catch(err => {
          console.log(err);
          alert("An error occurred while posting book!");
        });
    },
    async addImage(bookId, bookIsbn, image, editingBook) {
      const imgBlob = new Blob([image], { type: "image/png" });
      const formData = new FormData();
      formData.append("imageFile", imgBlob, bookIsbn);
      await Api()
        .post("/images/" + bookId, formData)
        .then(() => {
          if (editingBook) {
            this.$router.push("/products/" + bookIsbn);
          } else {
            alert("Book added successfully!");
            this.$router.go(0);
          }
        })
        .catch(err => {
          console.log(err);
          alert("An error occurred while posting image!");
        });
    },
    // UPDATE
    async updateBook(form, bookId) {
      const params = {
        isbn: form.isbn,
        heading: form.heading,
        releaseYear: form.releaseYear,
        publisher: form.publisher,
        author: form.author,
        genre: form.genre,
        description: form.description,
        cost: form.cost
      };
      await Api()
        .put("/books/" + bookId, params)
        .then(() => {
          this.addImage(bookId, form.isbn, form.image, true);
        })
        .catch(err => {
          console.log(err);
          alert("An error occurred while updating book!");
        });
    },
    // DELETE
    displayDeleteBookModal(product) {
      this.productHeading = product.heading;
      this.productPicture = product.image;
      this.productId = product.bookId;
      this.$bvModal.show("deleteProductModal");
    },
    async deleteBookById(bookId) {
      await Api()
        .delete("/books/" + bookId)
        .catch(err => console.log(err));
      this.$router.go(0);
    },
    // HELPERS
    replaceSpaceWithUnderscore(strToReplace) {
      return strToReplace.replaceAll(" ", "_");
    },
    replaceUnderscoresWithSpaces(strToReplace) {
      return strToReplace.replaceAll("_", " ");
    },
    placeBookPicture(imageId, pictureByteArray) {
      document.getElementById(imageId).src =
        "data:image/png;base64," + pictureByteArray;
    },
    base64ToFile(base64Data, tempfilename, contentType) {
      contentType = contentType || "";
      const sliceSize = 1024;
      const byteCharacters = atob(base64Data);
      const bytesLength = byteCharacters.length;
      const slicesCount = Math.ceil(bytesLength / sliceSize);
      const byteArrays = new Array(slicesCount);

      for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        const begin = sliceIndex * sliceSize;
        const end = Math.min(begin + sliceSize, bytesLength);

        const bytes = new Array(end - begin);
        for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
          bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
      }
      return new File(byteArrays, tempfilename, { type: contentType });
    },
    goToDetails(isbn) {
      this.$router.push("/products/" + isbn);
    }
  }
});
