<template>
    <div class="brands">
        <div class="container">
            <div class="brands-box">
                <swiper
                    :slides-per-view="5"
                    :spaceBetween="30"
                    :modules="modules"
                    :breakpoints="{
                        1920: {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        425: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        375: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                    }"
                    class="mySwiper"
                >
                    <swiper-slide>
                        <div class="brands__item">
                            <img
                                src="../assets/images/brand/partner-logo-1-dark.png"
                                alt=""
                            />
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="brands__item">
                            <img
                                src="../assets/images/brand/partner-logo-2-dark.png"
                                alt=""
                            />
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="brands__item">
                            <img
                                src="../assets/images/brand/partner-logo-3-dark.png"
                                alt=""
                            />
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="brands__item">
                            <img
                                src="../assets/images/brand/partner-logo-7-dark.png"
                                alt=""
                            />
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="brands__item">
                            <img
                                src="../assets/images/brand/partner-logo-8-dark.png"
                                alt=""
                            />
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="brands__item">
                            <img
                                src="../assets/images/brand/partner-logo-2-dark.png"
                                alt=""
                            />
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="brands__item">
                            <img
                                src="../assets/images/brand/partner-logo-7-dark.png"
                                alt=""
                            />
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
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
.brands {
    padding: 20px;
    scroll-behavior: smooth;
}
.brands-box {
    display: flex;
    align-items: center;
    width: 100%;
}
.brands__item {
    padding: 20px;
    width: 100%;
    height: 100%;
    cursor: pointer;
}
.brands__item img {
    width: 100%;
    height: 100%;
}
</style>
