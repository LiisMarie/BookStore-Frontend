<template>
  <div class="container">
    <h4 v-if="product.length === 0" class="row mt-4">
      Unfortunately, we don't have a book with ISBN
      {{ this.$route.params.productIsbn }}
    </h4>

    <div v-if="product.length !== 0" class="row mt-4">
      <div class="col-sm-4">
        <b-img
          fluid
          :id="product.isbn"
          :src="'data:image/png;base64,' + product.image"
          class="p-2"
        ></b-img>
      </div>

      <div class="col-sm-8">
        <h3>{{ product.heading }}</h3>

        <hr />

        <div class="row">
          <div class="col-2">Author:</div>
          <div class="col-10">{{ product.author }}</div>
        </div>
        <br />
        <div class="row">
          <div class="col-2">Publisher:</div>
          <div class="col-10">{{ product.publisher }}</div>
        </div>
        <br />
        <div class="row">
          <div class="col-2">Genre:</div>
          <div class="col-10">{{ product.genre }}</div>
        </div>
        <br />
        <div class="row">
          <div class="col-2">Published:</div>
          <div class="col-10">{{ product.releaseYear }}</div>
        </div>
        <br />
        <div class="row">
          <div class="col-2">ISBN:</div>
          <div class="col-10">{{ product.isbn }}</div>
        </div>

        <hr />

        <div class="row">
          <div class="col-2">Price:</div>
          <div class="col-10">{{ product.cost.toFixed(2) }}€</div>
        </div>

        <hr />

        <p>{{ product.description }}</p>
        <hr />

        <b-button variant="success" @click.prevent="updateCart(product)">
          <font-awesome-icon :icon="['fas', 'cart-plus']" />
          Add to Cart
        </b-button>
        <b-button
          class="action-btn"
          variant="secondary"
          @click="goToEditBook(product.isbn)"
          v-if="isAdmin"
        >
          <font-awesome-icon :icon="['fas', 'edit']" />
          Edit
        </b-button>
        <b-button
          class="action-btn"
          variant="danger"
          @click="deleteProductModal(product)"
          v-if="isAdmin"
        >
          <font-awesome-icon :icon="['fas', 'trash']" />
          Delete
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  data() {
    return {
      product: []
    };
  },
  props: ["updateCart", "deleteProductModal"],
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    isAdmin() {
      return this.isLoggedAccountAdmin(this.currentUser);
    }
  },
  methods: {
    goToEditBook(isbn) {
      this.setRouterTo("/products/edit/" + isbn);
    }
  },
  async created() {
    this.product = await this.getBookByIsbn(this.$route.params.productIsbn);
  }
};
</script>

<style scoped>
.action-btn {
  margin-left: 10px;
}
</style>
