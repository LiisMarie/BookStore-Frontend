<template>

  <b-container>
    <product-form operation="add"></product-form>
  </b-container>

</template>

<script>


import ProductForm from "@/components/forms/ProductForm";

export default {
  name: 'AddProduct',
  components: {
    'product-form': ProductForm
  }
}
</script>
