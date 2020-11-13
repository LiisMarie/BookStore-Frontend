import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import AllProducts from "@/views/AllProducts.vue";
import Categories from "@/views/Categories";
import ProductDetails from "@/views/ProductDetails";
import Checkout from "@/views/Checkout";
import AddProduct from "@/views/AddProduct";
import EditProduct from "@/views/EditProduct";
import SearchProducts from "@/views/SearchProducts";
import Registration from "@/views/account/Registration";
import LogIn from "@/views/account/LogIn";
import AccountInformation from "@/views/account/AccountInformation";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/products/all",
    name: "AllProducts",
    component: AllProducts
  },
  {
    path: "/products/categories/:category",
    name: "Categories",
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
    path: "/products/add",
    name: "Add book",
    component: AddProduct
  },
  {
    path: "/products/edit/:productIsbn",
    name: "Edit book",
    component: EditProduct,
    props: true
  },
  {
    path: "/products/search/:searchInput",
    name: "Search books",
    component: SearchProducts,
    props: true
  },
  {
    path: "/account/register",
    name: "Registration",
    component: Registration
  },
  {
    path: "/account/login",
    name: "Log in",
    component: LogIn
  },
  {
    path: "/account/information",
    name: "Account information",
    component: AccountInformation
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});

export default router;
