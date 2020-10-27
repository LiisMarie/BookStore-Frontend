import Vue from "vue";

Vue.mixin({
  methods: {
    displayDeleteBookModal(product) {
      this.productHeading = product.heading;
      this.productPicture = product.image;
      this.productId = product.bookId;
      this.$bvModal.show("deleteProductModal");
    },

    goToDetails(isbn) {
      this.setRouterTo("/products/" + isbn);
    },

    setRouterTo(path) {
      window.scrollTo(0, 0);
      this.$router.push(path);
    },

    replaceSpaceWithUnderscore(strToReplace) {
      return strToReplace.replaceAll(" ", "_");
    },

    replaceUnderscoresWithSpaces(strToReplace) {
      return strToReplace.replaceAll("_", " ");
    },

    placeBookPicture(imageId, pictureByteArray) {
      document.getElementById(imageId).src =
        "data:image/png;base64," + pictureByteArray;
    },

    base64ToFile(base64Data, tempfilename, contentType) {
      contentType = contentType || "";
      const sliceSize = 1024;
      const byteCharacters = atob(base64Data);
      const bytesLength = byteCharacters.length;
      const slicesCount = Math.ceil(bytesLength / sliceSize);
      const byteArrays = new Array(slicesCount);

      for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        const begin = sliceIndex * sliceSize;
        const end = Math.min(begin + sliceSize, bytesLength);

        const bytes = new Array(end - begin);
        for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
          bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
      }
      return new File(byteArrays, tempfilename, { type: contentType });
    },

    isEmailValid(email) {
      return email.includes("@");
    },

    isPasswordStrongEnough(password) {
      const passwordRegex = new RegExp(
        "^(?=.*[a-z\\\u0080-\\\uFFFF -])(?=.*[A-Z\\\u0080-\\\uFFFF -])(?=.*[0-9])(?=.{8,})"
      );
      return passwordRegex.test(password);
    }
  }
});
