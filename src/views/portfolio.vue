<template>
    <Helmet title="Snow | Portfolio">
        <HeaderSP></HeaderSP>
        <div class="portfolio">
            <div class="container">
                <div class="portfolio-wrap">
                    <div class="portfolio-category">
                        <div @click="showMenu" class="portfolio__icon">
                            <ThemifyIcon
                                class="icon icon-color"
                                icon="layout-grid2-alt"
                            ></ThemifyIcon>
                        </div>
                        <transition name="fade">
                            <div class="category-list">
                                <ul>
                                    <li class="category-item">
                                        <a href="" class="category-link">all</a>
                                    </li>
                                    <li class="category-item">
                                        <a href="" class="category-link"
                                            >branding</a
                                        >
                                    </li>
                                    <li class="category-item">
                                        <a href="" class="category-link"
                                            >print</a
                                        >
                                    </li>
                                    <li class="category-item">
                                        <a href="" class="category-link"
                                            >photography</a
                                        >
                                    </li>
                                    <li class="category-item">
                                        <a href="" class="category-link"
                                            >design</a
                                        >
                                    </li>
                                    <li class="category-item">
                                        <a href="" class="category-link"
                                            >mockup</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </transition>
                    </div>
                    <div class="portfolio-effect">
                        <Portfolio></Portfolio>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio-load-more">
            <a href="#" class="portfolio-load-more-link">load more works</a>
        </div>
    </Helmet>
</template>
<script>
import Portfolio from "../components/Portfolio.vue";
import ThemifyIcon from "vue-themify-icons";
import HeaderSP from "@/components/HeaderSP.vue";
import Helmet from "@/components/Helmet.vue";
export default {
    data() {
        return {};
    },
    components: {
        Portfolio,
        ThemifyIcon,
        HeaderSP,
        Helmet,
    },
    methods: {
        showMenu() {
            document
                .querySelector(".category-list")
                .classList.toggle("active-nav");
            document
                .querySelector(".portfolio-effect")
                .classList.toggle("portfolio-effect-active");
            document
                .querySelector(".icon-color")
                .classList.toggle("active-color");
        },
    },
};
</script>
<style lang="scss" scoped>
@import "../assets/css/scss/style.scss";
.portfolio {
    background-color: #f6f6f6;
    font-family: "Work Sans", sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
    transition: all 0.5s ease-in-out;
}
.portfolio__icon {
    padding: 20px;
}
.icon {
    font-size: 18px;
}
.portfolio-category {
    text-align: center;
    padding: 20px;
}
.portfolio-category ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.portfolio-category ul li {
    padding: 5px 17px;
    text-transform: uppercase;
}
.portfolio-category ul li a {
    color: #5f5f5f;
    transition: all 0.5s;
}
.portfolio-category ul li a:hover {
    color: #000;
}

.portfolio-load-more {
    padding: 20px;
    background-color: #fff;
    text-align: center;
}
.portfolio-load-more-link {
    padding: 20px;
    text-transform: uppercase;
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    display: block;
    color: #000;
}
.portfolio-load-more-link:hover {
    opacity: 0.8;
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

/* active class */
.category-list {
    opacity: 0;
    visibility: hidden;
    transition: all 1s ease-in-out;
}
.active-nav {
    opacity: 1 !important;
    visibility: visible !important;
}
.portfolio-effect {
    transition: all 1s ease-in-out;
}
.icon-color {
    color: #5f5f5f;
    transition: all 0.5s ease-in-out;
}
.active-color {
    color: #000;
}
</style>
