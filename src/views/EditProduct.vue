<template>
  <b-container class="mt-3">
    <product-form operation="edit"></product-form>
  </b-container>
</template>

<script>
import ProductForm from "@/components/forms/ProductForm";

export default {
  name: "EditProduct",
  components: {
    "product-form": ProductForm
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  created() {
    if (this.currentUser) {
      if (!this.isLoggedAccountAdmin(this.currentUser)) {
        this.setRouterTo("/");
      }
    } else {
      this.setRouterTo("/");
    }
  }
};
</script>
