<template>
  <b-modal
    id="addToCartModal"
    centered
    :title="currentUser ? 'Product added to cart!' : 'Please Sign In'"
    :ok-title="currentUser ? 'Go to cart' : 'Go to login'"
    @ok="currentUser ? goToCart() : goToLogin()"
    :cancel-title="currentUser ? 'Continue shopping' : 'Cancel'"
  >
    <div v-if="currentUser">
      <b-row>
        <b-col>
          <b-img
            id="BookPicture"
            fluid
            :src="'data:image/png;base64,' + picture"
          />
        </b-col>

        <b-col>
          <h4>{{ title }}</h4>
          <h5>{{ cost.toFixed(2) }} €</h5>
        </b-col>
      </b-row>
    </div>
    <div v-if="!currentUser">
      In order to add books to cart and make a purchase, it is necessary to be
      logged in.
    </div>
  </b-modal>
</template>

<script>
export default {
  props: {
    title: String,
    cost: Number,
    picture: String
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    goToCart() {
      this.setRouterTo("/checkout");
    },
    goToLogin() {
      this.setRouterTo("/account/login");
    }
  }
};
</script>
