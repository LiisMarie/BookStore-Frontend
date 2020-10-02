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
  }
};
</script>
