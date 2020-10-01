import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import AllProducts from "@/views/AllProducts.vue";
import Categories from "@/views/Categories";
import ProductDetails from "@/views/ProductDetails";
import Checkout from "@/views/Checkout";
import AddBook from "@/views/AddBook";
import EditBook from "@/views/EditBook";
import SearchProducts from "@/views/SearchProducts";

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
    component: AllProducts
  },
  {
    path: '/categories/:category',
    name: 'Categories',
    component: Categories,
    props: true
  },
  {
    path: "/products/:productIsbn",
    name: "ProductDetails",
    component: ProductDetails
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout
  },
  {
    path: "/add-book",
    name: "Add book",
    component: AddBook
  },
  {
    path: "/edit-book/:productIsbn",
    name: "Edit book",
    component: EditBook,
    props: true
  },
  {
    path: "/search-books/:searchInput",
    name: "Search books",
    component: SearchProducts,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
