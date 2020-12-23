<template>
  <b-container class="mt-3">
    <b-row class="justify-content-md-center">
      <b-col md="7" lg="6">
        <header class="jumbotron">
          <h4>
            <strong>{{ currentUser.username }}</strong> Profile
          </h4>
        </header>
        <p>
          <strong>Token:</strong>
          {{ currentUser.token.substring(0, 20) }} ...
          {{ currentUser.token.substr(currentUser.token.length - 20) }}
        </p>
        <p>
          <strong>Id:</strong>
          {{ currentUser.userId }}
        </p>
        <p>
          <strong>Email:</strong>
          {{ currentUser.email }}
        </p>
        <strong>Authorities:</strong>
        <ul>
          <li>
            {{ currentUser.role }}
          </li>
        </ul>

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
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.setRouterTo("/account/login");
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.setRouterTo("/account/login");
    }
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
