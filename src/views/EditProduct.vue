<template>
  <b-container>
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
