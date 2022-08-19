<template>
  <div class="slider">
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="slider-item">
          <div class="quotes">
            <p>
              "Outstanding job and exceeded all expectations. It was a pleasure
              to work with them on a sizable first project and am looking
              forward to start the next one asap.""
            </p>
          </div>
          <div class="client">
            <p>Michael Hopkins</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slider-item">
          <div class="quotes">
            <p>
              Outstanding job and exceeded all expectations. It was a pleasure
              to work with them on a sizable first project and am looking
              forward to start the next one asap.
            </p>
          </div>
          <div class="client">
            <p>Michael Hopkins</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slider-item">
          <div class="quotes">
            <p>
              Outstanding job and exceeded all expectations. It was a pleasure
              to work with them on a sizable first project and am looking
              forward to start the next one asap.
            </p>
          </div>
          <div class="client">
            <p>Michael Hopkins</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
//Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
<style scoped>
.slider {
  padding: 160px 100px 60px 100px;
  background-color: #000;
}
.slider-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 calc((1140px - 920px) / 2);
}
.quotes {
    width: 50%;
}
.quotes p {
  margin-bottom: 1.5rem;
  margin-top: 0;
  line-height: 2rem;
  font-size: 1.6rem;
  font-family: "Rufina";
  text-align: center;
  color: #fff;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  
}
.client {
  margin-bottom: 2.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.client p {
  display: block;
  margin-bottom: 80px;
  font-size: 1rem;
  color: var(--header-text-color);
  font-family: 'Work Sans', sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  color: #fff;
}

::v-deep .swiper-button-next {
  display: none !important;
}

::v-deep .swiper-button-prev {
  display: none !important;
}

::v-deep .swiper-pagination-bullet {
    background-color: #fff;
}

@media (max-width: 1023px) {
  ::v-deep .swiper-pagination {
        margin-top: unset !important;
    }
}
</style>
