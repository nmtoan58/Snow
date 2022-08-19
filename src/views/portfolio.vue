<template>
    <div class="portfolio">
        <div class="container">
            <div class="portfolio-box">
                <div class="portfolio-category">
                    <div @click="showMenu" class="portfolio__icon">
                        <ThemifyIcon
                            class="icon"
                            icon="layout-grid2-alt"
                        ></ThemifyIcon>
                    </div>
                    <transition name="fade">
                        <div v-if="showMenuBar" class="category-list">
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
                                    <a href="" class="category-link">print</a>
                                </li>
                                <li class="category-item">
                                    <a href="" class="category-link"
                                        >photography</a
                                    >
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
                <Portfolio></Portfolio>
            </div>
        </div>
    </div>
    <div class="portfolio-load-more">
        <a href="#" class="portfolio-load-more-link">load more works</a>
    </div>
</template>
<script>
import Portfolio from "../components/Portfolio.vue";
import ThemifyIcon from "vue-themify-icons";
export default {
    data() {
        return {
            showMenuBar: false,
        };
    },
    components: {
        Portfolio,
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
.portfolio {
    background-color: #f6f6f6;
    font-family: "Work Sans", sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
}
.portfolio-box {
    margin-top: 100px;
    transition: all 0.5s;
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
    font-family: 'Work Sans',sans-serif;
    font-weight: 500;
    display: block;
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
