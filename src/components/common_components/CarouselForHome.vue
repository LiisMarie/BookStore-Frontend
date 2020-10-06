<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="2000"
      controls
      indicators
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="eBooks are environmentally friendly!"
        img-src="../../assets/carousel_images/reader-timber.jpg"
      />

      <b-carousel-slide
        caption="eBooks are affordable!"
        img-src="../../assets/carousel_images/reader-relax.jpg"
      />

      <b-carousel-slide
        caption="eBooks are accessible everywhere!"
        img-src="../../assets/carousel_images/reader-pool.jpg"
      />

      <b-carousel-slide
        caption="eBooks are compact!"
        img-src="../../assets/carousel_images/reader-books.jpg"
      />
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    onSlideStart(slide) {
      this.sliding = true;
    },
    // eslint-disable-next-line no-unused-vars
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>
