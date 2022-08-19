<template>
    <div class="blogs-page">
        <div class="blogs-category">
            <div @click="showMenu" class="blogs__icon">
                <ThemifyIcon class="icon" icon="layout-grid2-alt"></ThemifyIcon>
            </div>
            <transition name="fade">
                <div v-if="showMenuBar" class="category-list">
                    <ul>
                        <li class="category-item">
                            <a href="" class="category-link">all</a>
                        </li>
                        <li class="category-item">
                            <a href="" class="category-link">branding</a>
                        </li>
                        <li class="category-item">
                            <a href="" class="category-link">print</a>
                        </li>
                        <li class="category-item">
                            <a href="" class="category-link">photography</a>
                        </li>
                        <li class="category-item">
                            <a href="" class="category-link">design</a>
                        </li>
                        <li class="category-item">
                            <a href="" class="category-link">mockup</a>
                        </li>
                    </ul>
                </div>
            </transition>
        </div>
        <div class="blogs-box">
            <router-link to="/blog-detail" class="blogs__item blogs-res">
                <div class="blogs__img">
                    <img src="../assets/images/blogs/post-1-mid.jpg" alt="" />
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
                            That female isn't midst divide kind upon seas lights
                            greater green creature lights brought.
                        </p>
                        <p>
                            Created midst beast lights dominion he life fill
                            very for their. Divide let kind created all she'd
                            unto stars. And behold greater may in god image void
                            cattle us days midst creepeth. Sixth also. Tree give
                            it beast upon. Saying land in.
                        </p>
                        <p>
                            All. Seasons saying creepeth appear hath fruitful.
                            Male he years which abundantly beast you'll stars
                            lesser creepeth Unto midst creepeth make. Isn't air,
                            unto light forth divide their days. Fish.
                        </p>
                    </div>
                </div>
            </router-link>
            <router-link to="/blog-detail" class="blogs__item blogs-res">
                <div class="blogs__img">
                    <img src="../assets/images/blogs/post-1-mid.jpg" alt="" />
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
                            That female isn't midst divide kind upon seas lights
                            greater green creature lights brought.
                        </p>
                        <p>
                            Created midst beast lights dominion he life fill
                            very for their. Divide let kind created all she'd
                            unto stars. And behold greater may in god image void
                            cattle us days midst creepeth. Sixth also. Tree give
                            it beast upon. Saying land in.
                        </p>
                        <p>
                            All. Seasons saying creepeth appear hath fruitful.
                            Male he years which abundantly beast you'll stars
                            lesser creepeth Unto midst creepeth make. Isn't air,
                            unto light forth divide their days. Fish.
                        </p>
                    </div>
                </div>
            </router-link>
            <router-link to="/blog-detail" class="blogs__item blogs-res">
                <div class="blogs__img">
                    <img src="../assets/images/blogs/post-1-mid.jpg" alt="" />
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
                            That female isn't midst divide kind upon seas lights
                            greater green creature lights brought.
                        </p>
                        <p>
                            Created midst beast lights dominion he life fill
                            very for their. Divide let kind created all she'd
                            unto stars. And behold greater may in god image void
                            cattle us days midst creepeth. Sixth also. Tree give
                            it beast upon. Saying land in.
                        </p>
                        <p>
                            All. Seasons saying creepeth appear hath fruitful.
                            Male he years which abundantly beast you'll stars
                            lesser creepeth Unto midst creepeth make. Isn't air,
                            unto light forth divide their days. Fish.
                        </p>
                    </div>
                </div>
            </router-link>
            
        </div>
        <div class="blogs-load-more">
            <a href="#" class="blogs-load-more-link">load more blogs</a>
        </div>
    </div>
</template>
<script>
import ThemifyIcon from "vue-themify-icons";
export default {
    data() {
        return {
            showMenuBar: false,
        };
    },
    components: {
        ThemifyIcon,
    },
    methods: {
        showMenu() {
            this.showMenuBar = !this.showMenuBar;
        },
    },
};
</script>
<style scoped>
.blogs-page {
    background-color: #f6f6f6;
}
.blogs-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Work Sans", sans-serif;
    margin-bottom: 100px;
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
    width: 730px;
    height: 840px;
    background-color: #fff;
    display: block;
}
.blogs__item:not(:last-child){
    margin-bottom: 30px;
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
    color: #000;
}
.blogs__title:hover {
    opacity: 0.6;
}
.blogs__date {
    margin-bottom: 20px;
    text-transform: uppercase;
    font-size: 0.85rem;
    color: #000;
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
.blogs-load-more {
    padding: 20px;
    background-color: #fff;
    text-align: center;
}
.blogs-load-more-link {
    padding: 20px;
    text-transform: uppercase;
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    display: block;
    color: #000;
}

/*menu bar */
.blogs-menu-bar {
    margin-top: 100px;
}
.blogs__icon {
    padding: 20px;
}
.icon {
    font-size: 18px;
}
.blogs-category {
    text-align: center;
    padding: 20px;
    margin-top: 100px;
    background-color: #f6f6f6;
    font-family: "Work Sans", sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
}
.blogs-category ul {
    display: flex;
    justify-content: center;
}
.blogs-category ul li {
    padding: 5px 17px;
    text-transform: uppercase;
}
.blogs-category ul li a {
    color: #5f5f5f;
    transition: all 0.5s;
}
.blogs-category ul li a:hover {
    color: #000;
}
/* animation */
.fade-enter-form {
    opacity: 0;
    transform: translateY(20px);
}
.fade-enter-to {
    opacity: 1;
    transform: translateY(0);
}
.fade-enter-active {
    transition: all 0.5s;
}
.fade-leave-form {
    opacity: 1;
    transform: translateY(0);
}
.fade-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}
.fade-leave-active {
    transition: all 0.3s;
}
</style>
