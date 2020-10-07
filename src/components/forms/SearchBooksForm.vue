<template>
  <b-container class="mt-3">
    <b-form @submit="onSubmit">
      <b-input-group class="mb-3">
        <b-form-input
          id="input-search"
          v-model="userInput"
          placeholder="Search by ISBN, heading, author or keyword"
        />
        <b-input-group-append>
          <b-button type="submit" variant="success">Search</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form>
  </b-container>
</template>

<script>
export default {
  name: "SearchBooksForm",
  data() {
    return {
      collections: [],
      userInput: "",
      cleanedSearchInput: ""
    };
  },
  props: ["updateCart", "deleteProductModal"],
  methods: {
    onSubmit() {
      if (this.userInput.length !== 0)
        this.setRouterTo(
          "/search-books/" + this.replaceSpaceWithUnderscore(this.userInput)
        );
    }
  }
};
</script>
