<template>

  <b-container>
    <book-form operation="edit"></book-form>
  </b-container>

</template>

<script>
import BookForm from "@/components/common_components/BookForm";

export default {
  name: 'ProductDetails',
  components: {
    'book-form': BookForm
  }
}
</script>
