<template>
  <b-modal
    id="makeOrderModal"
    centered
    title="Your order has been received - Thank You!"
    ok-title="Awesome"
    ok-only
  >
    <b-row>
      <b-container>
        <p>Your order has been successfully processed.</p>
        <p>An email will be sent to You shortly.</p>
        <b-img
          id="makeOrderPicture"
          fluid
          center
          src="../../assets/orderConfirmationPhoto.jpg"
        ></b-img>
      </b-container>
    </b-row>
  </b-modal>
</template>

<script>
export default {};
</script>

<style lang="scss">
#makeOrderPicture {
  max-height: 300px;
}
</style>
