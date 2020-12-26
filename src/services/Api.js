import axios from "axios";
import "../mixins/categoriesMixin";
import "../mixins/helpersMixin";
import "../mixins/booksMixin";
import "../mixins/shoppingMixin";
import authHeader from "@/services/auth-header";

export default withAuth => {
  if (withAuth) {
    return axios.create({
      baseURL: "/api/",
      withCredentials: false,
      headers: authHeader()
    });
  }
  return axios.create({
    baseURL: "/api/",
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
};
