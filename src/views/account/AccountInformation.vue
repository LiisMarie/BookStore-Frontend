<template>
  <b-container class="mt-3">
    <b-row class="justify-content-center">
      <b-jumbotron>
        <h4>
          <strong>{{ currentUser.username }}</strong> Profile
        </h4>
        <br />
        <img
          id="profile-img"
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          class="profile-img-card"
          alt="Profile picture"
        />
        <br />
        <div>
          Email:
          <br />
          <strong>{{ currentUser.email }}</strong>
        </div>
        <br />
        <b-button
          class="action-btn"
          @click="logOut()"
          variant="danger"
          size="sm"
          >Log out</b-button
        >
      </b-jumbotron>
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

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>
