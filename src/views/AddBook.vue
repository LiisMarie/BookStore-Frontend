<template>

  <b-container>
    <book-form operation="add"></book-form>
  </b-container>

</template>

<script>


import BookForm from "@/components/common_components/BookForm";

export default {
  name: 'AddBook',
  components: {
    'book-form': BookForm
  }
}
</script>

<style scoped>

</style>
