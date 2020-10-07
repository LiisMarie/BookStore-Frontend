import Vue from "vue";
import Api from "../services/Api";

Vue.mixin({
  methods: {
    // READ

    async getCategories() {
      let genresMap = [];
      await Api()
        .get("/genres")
        .then(response => {
          let genresResponse = [...response.data];
          for (let i in genresResponse) {
            genresMap.push(genresResponse[i]);
          }
        })
        .catch(err => console.log(err));
      return genresMap;
    }
  }
});
