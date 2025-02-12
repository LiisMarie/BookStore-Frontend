import Vue from "vue";
import Api from "../services/Api";

Vue.mixin({
  methods: {
    // CREATE

    async addToCart(product) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        const params = {
          userId: user.userId,
          bookId: product.bookId
        };
        await Api(true)
          .post("/shopping", params)
          .catch(err => console.log(err));
        this.productHeading = product.heading;
        this.productCost = product.cost;
        this.productPicture = product.image;
      }

      this.$bvModal.show("addToCartModal");
    }
  }
});
