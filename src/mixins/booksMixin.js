import Vue from "vue";
import Api from "../services/Api";

Vue.mixin({
  methods: {
    // CREATE

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
            this.setRouterTo("/products/" + bookIsbn);
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

    // READ

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

    async deleteBookById(bookId) {
      await Api()
        .delete("/books/" + bookId)
        .catch(err => console.log(err));
      this.$router.go(0);
    }
  }
});
