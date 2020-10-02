<template>
  <b-modal
    id="deleteProductModal"
    variant="danger"
    header-bg-variant="danger"
    header-text-variant="light"
    centered
    title="Are You sure about deleting this book?"
    ok-title="Yes! Delete"
    @ok="deleteBook()"
    cancel-title="Cancel"
  >
    <b-col>
      <h4>{{ title }}</h4>
      <b-img
        id="BookPicture"
        center
        fluid
        style="max-height: 250px"
        :src="'data:image/png;base64,' + picture"
      />
    </b-col>
  </b-modal>
</template>

<script>
export default {
  props: {
    bookId: Number,
    title: String,
    picture: String
  },
  methods: {
    deleteBook() {
      this.deleteBookById(this.bookId);
    }
  }
};
</script>
