<template>
  <b-card-group>
    <b-card class="mb-2 text-center">
      <b-img
        @click="goToDetails(product.isbn)"
        fluid
        :id="product.isbn"
        src=""
        class="p-2"
      ></b-img>

      <h4 @click="goToDetails(product.isbn)">
        {{ product.heading }}
      </h4>
      <p class="card-text" @click="goToDetails(product.isbn)">
        Author: {{ product.author }}
      </p>

      <p @click="goToDetails(product.isbn)">
        Price: {{ product.cost.toFixed(2) }}€
      </p>

      <b-button
        size="sm"
        variant="success"
        @click.prevent="updateCart(product)"
      >
        <font-awesome-icon :icon="['fas', 'cart-plus']" />
      </b-button>
      <b-button
        class="action-btn"
        size="sm"
        variant="info"
        @click="goToDetails(product.isbn)"
      >
        <font-awesome-icon :icon="['fas', 'info']" />
      </b-button>
      <b-button
        class="action-btn"
        size="sm"
        variant="secondary"
        @click="goToEditBook(product.isbn)"
      >
        <font-awesome-icon :icon="['fas', 'edit']" />
      </b-button>
      <b-button
        class="action-btn"
        size="sm"
        variant="danger"
        @click="deleteProductModal(product)"
      >
        <font-awesome-icon :icon="['fas', 'trash']" />
      </b-button>
    </b-card>
  </b-card-group>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["product", "updateCart", "deleteProductModal"],
  methods: {
    goToEditBook(isbn) {
      this.setRouterTo("/products/edit/" + isbn);
    }
  },
  mounted() {
    this.placeBookPicture(this.product.isbn, this.product.image);
  }
};
</script>

<style lang="scss">
.action-btn {
  margin-left: 10px;
}
</style>
