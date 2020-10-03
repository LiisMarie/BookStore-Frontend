<template>
  <b-navbar sticky toggleable="md" type="dark" variant="info">
    <div class="container">
      <b-navbar-brand href="#" @click.prevent="route_to('/')">
        <b-img src="../../assets/logo.png" fluid style="max-height: 30px" />
        eBooks
      </b-navbar-brand>

      <div class="d-flex order-lg-1 ml-auto mr-1 float-right pr-2">
        <a
          href="#"
          class="navbar-text mr-3"
          @click.prevent="route_to('/checkout')"
        >
          <font-awesome-icon :icon="['fas', 'shopping-cart']"
        /></a>

        <ul class="navbar-nav flex-row">
          <li class="nav-item mx-2 mx-lg-0">
            <div class="dropdown">
              <b-nav-item href="#"
                ><font-awesome-icon :icon="['fas', 'user']"
              /></b-nav-item>
              <div class="dropdown-content">
                <a href="#" class="dropdown-item">Account</a>
                <a href="#" class="dropdown-item">Log out</a>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="#" @click.prevent="route_to('/all-products')"
            >All books</b-nav-item
          >
          <b-nav-item-dropdown text="Categories" left>
            <b-dropdown-item
              href="#"
              v-for="category in categories"
              :key="category.genreName"
              @click.prevent="route_to('/categories/' + category.genreName)"
            >
              {{ category.genreName }}
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item href="#" @click.prevent="route_to('/add-book')"
            >Add book</b-nav-item
          >

          <b-nav-item href="#" @click.prevent="route_to('/search-books/_')"
            >Search</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  props: ["categories", "amountOfItemsInCart"],
  methods: {
    route_to(path) {
      const replacedPath = this.replaceSpaceWithUnderscore(path);
      if (this.$route.path !== replacedPath) this.$router.push(replacedPath);
    }
  }
};
</script>

<style>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 0;
  left: auto;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
