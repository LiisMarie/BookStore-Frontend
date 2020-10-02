<template>

  <b-container>
    <product-form operation="add"></product-form>
  </b-container>

</template>

<script>


import ProductForm from "@/components/common_components/ProductForm";

export default {
  name: 'AddProduct',
  components: {
    'product-form': ProductForm
  }
}
</script>
