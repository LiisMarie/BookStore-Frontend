import axios from "axios";
import "../mixins/categoriesMixin";
import "../mixins/helpersMixin";
import "../mixins/booksMixin";
import "../mixins/shoppingMixin";

export default () => {
  return axios.create({
    baseURL: "http://localhost:8080/api",
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
};
