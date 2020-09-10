import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Categories from "../views/Categories"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/all-products",
    name: "AllProducts",
    component: () =>
        import("../views/AllProducts.vue")
  },
  {
    path: '/categories/:type',
    name: 'Categories',
    component: Categories,
    props: true
  },
  {
    path: "/products/:productIsbn",
    name: "ProductDetails",
    component: () =>
        import("../views/ProductDetails.vue")
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () =>
        import("../views/Checkout.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
