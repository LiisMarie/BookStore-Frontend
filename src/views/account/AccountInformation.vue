<template>
  <b-container class="mt-3">
    <b-row class="justify-content-md-center">
      <b-col md="7" lg="6">
        <b-card header="My account information">
          <!-- username -->
          <b-form-group
            id="input-group-username"
            label="Username"
            label-for="input-username"
          >
            <b-form-input
              id="input-username"
              name="input-username"
              disabled
              v-model="username"
            ></b-form-input>
          </b-form-group>
        </b-card>

        <b-button
          class="action-btn"
          @click="logOut()"
          variant="danger"
          size="sm"
          >Log out</b-button
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "AccountInformation",
  data() {
    return {
      username: ""
    };
  },
  methods: {
    logOut() {
      // TODO log out logic
    }
  },
  async mounted() {
    // TODO fetch/create method for user data retrieval (PART 3)
    this.username = "username comes here";
  }
};
</script>

<style>
.action-btn {
  float: right;
  margin-right: 5px;
  margin-top: 20px;
}
</style>
