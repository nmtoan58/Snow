<template>
    <div class="blogs">
        <div class="blog__title-header">
            <div class="blogs__title-head">
                <div class="blogs__title-text">
                    <h2>Lastest BLogs</h2>
                </div>
                <div class="blogs__title-description">
                    <p>
                        Donec orci sem, pretium ac dolor et, faucibus faucibus
                        mauris. Etiam,pellentesque faucibus. Vestibulum gravida
                        volutpat ipsum non ultrices.
                    </p>
                </div>
            </div>
        </div>
        <div class="container">
            <swiper
                :spaceBetween="30"
                :centeredSlides="true"
                :pagination="{
                    clickable: true,
                }"
                :navigation="true"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide>
                    <div class="blogs-box">
                        <div class="blogs__item">
                            <div class="blogs__img">
                                <img
                                    src="../assets/images/blogs/post-1-mid.jpg"
                                    alt=""
                                />
                                <div class="btn-category">
                                    <span>Nature</span>
                                </div>
                            </div>
                            <div class="blogs__content">
                                <div class="blogs__title">
                                    <p>Something I need to tell you</p>
                                </div>
                                <div class="blogs__date">
                                    <p>September 18, 2016</p>
                                </div>
                                <div class="blogs__description">
                                    <p>
                                        That female isn't midst divide kind upon
                                        seas lights greater green creature
                                        lights brought.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="blogs__item">
                            <div class="blogs__img">
                                <img
                                    src="../assets/images/blogs/post-1-mid.jpg"
                                    alt=""
                                />
                                <div class="btn-category">
                                    <span>Nature</span>
                                </div>
                            </div>
                            <div class="blogs__content">
                                <div class="blogs__title">
                                    <p>Something I need to tell you</p>
                                </div>
                                <div class="blogs__date">
                                    <p>September 18, 2016</p>
                                </div>
                                <div class="blogs__description">
                                    <p>
                                        That female isn't midst divide kind upon
                                        seas lights greater green creature
                                        lights brought.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="blogs__item">
                            <div class="blogs__img">
                                <img
                                    src="../assets/images/blogs/post-1-mid.jpg"
                                    alt=""
                                />
                                <div class="btn-category">
                                    <span>Nature</span>
                                </div>
                            </div>
                            <div class="blogs__content">
                                <div class="blogs__title">
                                    <p>Something I need to tell you</p>
                                </div>
                                <div class="blogs__date">
                                    <p>September 18, 2016</p>
                                </div>
                                <div class="blogs__description">
                                    <p>
                                        That female isn't midst divide kind upon
                                        seas lights greater green creature
                                        lights brought.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="blogs-box">
                        <div class="blogs__item">
                            <div class="blogs__img">
                                <img
                                    src="../assets/images/blogs/post-1-mid.jpg"
                                    alt=""
                                />
                                <div class="btn-category">
                                    <span>Nature</span>
                                </div>
                            </div>
                            <div class="blogs__content">
                                <div class="blogs__title">
                                    <p>Something I need to tell you</p>
                                </div>
                                <div class="blogs__date">
                                    <p>September 18, 2016</p>
                                </div>
                                <div class="blogs__description">
                                    <p>
                                        That female isn't midst divide kind upon
                                        seas lights greater green creature
                                        lights brought.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="blogs__item">
                            <div class="blogs__img">
                                <img
                                    src="../assets/images/blogs/post-1-mid.jpg"
                                    alt=""
                                />
                                <div class="btn-category">
                                    <span>Nature</span>
                                </div>
                            </div>
                            <div class="blogs__content">
                                <div class="blogs__title">
                                    <p>Something I need to tell you</p>
                                </div>
                                <div class="blogs__date">
                                    <p>September 18, 2016</p>
                                </div>
                                <div class="blogs__description">
                                    <p>
                                        That female isn't midst divide kind upon
                                        seas lights greater green creature
                                        lights brought.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="blogs__item">
                            <div class="blogs__img">
                                <img
                                    src="../assets/images/blogs/post-1-mid.jpg"
                                    alt=""
                                />
                                <div class="btn-category">
                                    <span>Nature</span>
                                </div>
                            </div>
                            <div class="blogs__content">
                                <div class="blogs__title">
                                    <p>Something I need to tell you</p>
                                </div>
                                <div class="blogs__date">
                                    <p>September 18, 2016</p>
                                </div>
                                <div class="blogs__description">
                                    <p>
                                        That female isn't midst divide kind upon
                                        seas lights greater green creature
                                        lights brought.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <!-- <swiper-slide> </swiper-slide>
        <swiper-slide> </swiper-slide> -->
            </swiper>
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
.blogs-box {
    display: flex;
    justify-content: space-between;
}
.blogs {
    padding: 160px 100px 100px 100px;
    background-color: #fafafa;
    font-family: "Work Sans", sans-serif;
    text-align: center;
}
.blog__title-header {
  display: flex;
  justify-content: center;
  width: 100%;
}
.blogs__title-head {
    margin-bottom: 60px;
    width: 60%;
    text-align: center;
}
.blogs__title-head h2 {
    font-family: "Playfair Display", serif;
    font-size: 2.6rem;
    line-height: 3rem;
    margin-bottom: 30px;
}
.blogs__title-description p {
    font-family: "Work Sans", sans-serif;
    line-height: 1.65rem;
    letter-spacing: 0.4px;
    color: #5f5f5f;
}
.blogs__item {
    width: 31.5%;
    background-color: #fff;
}

.blogs__img {
    position: relative;
}
.blogs__content {
    padding: 25px 30px;
}
.blogs__title {
    font-family: "Playfair Display", serif;
    font-weight: bold;
    font-size: 1.4rem;
    margin: 0 0 20px 0;
    transition: all 0.5s;
}
.blogs__title:hover {
    opacity: 0.6;
}
.blogs__date {
    margin-bottom: 20px;
    text-transform: uppercase;
    font-size: 0.85rem;
}
.blogs__description {
    color: #5f5f5f;
    line-height: 1.5rem;
    letter-spacing: 0.4px;
}
.btn-category {
    position: absolute;
    bottom: 10px;
    left: 10px;
    min-width: 90px;
    background-color: #000;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    padding: 7px;
    transition: all 0.5s;
}
.btn-category:hover {
    background-color: #393939;
}
.btn-category span {
    font-size: 0.8rem;
}
.blogs__img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 1s;
    filter: brightness(90%);
}
.blogs__img img:hover {
    filter: brightness(110%);
}
::v-deep .swiper-button-next {
    display: none !important;
}

::v-deep .swiper-button-prev {
    display: none !important;
}

::v-deep .swiper-pagination-bullet {
    background-color: #333;
}
::v-deep .swiper-pagination {
  position: unset;
  margin-top: 80px;
}
</style>
