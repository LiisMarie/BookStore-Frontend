import Vue from "vue";
import Api from "../services/Api";

Vue.mixin({
  methods: {
    // CREATE

    async addToCart(product) {
      const params = {
        userId: 1,
        bookId: product.bookId
      };
      await Api()
        .post("/shopping", params)
        .catch(err => console.log(err));
      this.productHeading = product.heading;
      this.productCost = product.cost;
      this.productPicture = product.image;
      this.$bvModal.show("addToCartModal");
    }
  }
});
