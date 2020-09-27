<template>
  <b-modal id="addToCartModal"
           centered
           title="Product added to cart!"
           ok-title="Go to cart"
           @ok="goToCart()"
           cancel-title="Continue shopping">

    <b-row>

      <b-col>
        <b-img id="ItemPreview" fluid :src="picture"/>
      </b-col>

      <b-col>
        <h4>{{ title }}</h4>
        <h5>{{ cost }} €</h5>
      </b-col>

    </b-row>

  </b-modal>
</template>

<script>

export default {
  props: {
    title: String,
    cost: Number,
    picture: String
  },
  methods: {
    goToCart () {
      this.$router.push('/checkout')
    }
  }
}
</script>

<style lang="scss">
  .modal-title {
    width: 100%;
    text-align: center;
    color: #00A86B;
  }
</style>
