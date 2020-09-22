<template>
    <b-navbar sticky toggleable="md" type="dark" variant="info">
        <div class="container">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand href="#" @click.prevent="route_to('/')"><font-awesome-icon :icon="['fas', 'book']"/> BookStore</b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item href="#" @click.prevent="route_to('/all-products')">All books</b-nav-item>
                    <b-nav-item-dropdown text="Categories" left>
                        <b-dropdown-item href="#"
                                         v-for="category in categories"
                                         :key="category"
                                         @click.prevent="route_to('/categories/'+category)">
                          {{category}}
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                  <b-nav-item href="#" @click.prevent="route_to('/add-book')">Add book</b-nav-item>
                </b-navbar-nav>
            </b-collapse>

          <b-navbar-nav is-nav class="ml-auto mr-1 float-right">
              <a class="nav-link ml-auto mr-1" @click.prevent="route_to('/checkout')">
                <font-awesome-icon :icon="['fas', 'shopping-cart']"/> {{amountOfItemsInCart}}
              </a>
          </b-navbar-nav>

        </div>
    </b-navbar>
</template>

<script>
    export default {
        name: 'Navbar',
        props: ['categories', 'amountOfItemsInCart'],
        methods: {
            route_to (path) {
                this.$router.push(this.replaceSpaceWithUnderscore(path));
            }
        }
    }
</script>

<style scoped>

</style>
