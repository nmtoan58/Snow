<template>
    <header class="header" v-on:scroll="handleScroll">
        <div class="container">
            <div class="wrap-header">
                <div class="logo">
                    <router-link class="logo-link logow" to="/home">
                        <img src="../assets/images/logo-light.svg" alt="" />
                    </router-link>
                    <router-link class="logo-link logob" to="/home">
                        <img src="../assets/images/logo.svg" alt="" />
                    </router-link>
                </div>
                <div class="menu-bar">
                    <ul class="menu-bar__list">
                        <li class="menu-bar__item">
                            <a class="menu-bar__link" href="#about">about</a>
                        </li>
                        <li class="menu-bar__item">
                            <a class="menu-bar__link" href="#contact"
                                >contact</a
                            >
                        </li>
                        <li class="menu-bar__item">
                            <router-link to="/portfolio" class="menu-bar__link"
                                >portfolio</router-link
                            >
                        </li>
                        <li class="menu-bar__item">
                            <router-link to="/blog" class="menu-bar__link"
                                >blog</router-link
                            >
                        </li>
                        <li class="menu-bar__item">
                            <router-link
                                to="/wordpresstheme"
                                class="menu-bar__link"
                                >wordpress theme</router-link
                            >
                        </li>
                    </ul>
                </div>
                <div class="menu-bar-mobile hide-on-pc">
                    <ThemifyIcon
                        @click="showMenuMobile"
                        id="icon-open-menu"
                        icon="menu"
                    ></ThemifyIcon>
                    <div class="header-menu-mobile">
                        <div class="header-mobile-responsive">
                            <div class="logo">
                                <router-link class="logowhite" to="/home">
                                    <img
                                        src="../assets/images/logo-light.svg"
                                        alt=""
                                    />
                                </router-link>
                                <div
                                    class="btn-close-menu-mobile"
                                    @click="closeMenuMobile"
                                >
                                    <ThemifyIcon
                                        class="icon-white"
                                        icon="close"
                                    ></ThemifyIcon>
                                </div>
                            </div>
                        </div>
                        <div class="menu-bar-moblie-res">
                            <ul class="menu-bar__list">
                                <li class="menu-bar__item">
                                    <router-link class="menu-bar__link" to="/"
                                        >About</router-link
                                    >
                                </li>
                                <li class="menu-bar__item">
                                    <router-link
                                        class="menu-bar__link"
                                        to="/home"
                                        >Contact</router-link
                                    >
                                </li>
                                <li class="menu-bar__item">
                                    <router-link
                                        to="/portfolio"
                                        class="menu-bar__link"
                                        >Portfolio</router-link
                                    >
                                </li>
                                <li class="menu-bar__item">
                                    <router-link
                                        to="/blog"
                                        class="menu-bar__link"
                                        >Blog</router-link
                                    >
                                </li>
                                <li class="menu-bar__item">
                                    <router-link
                                        to="/wordpresstheme"
                                        class="menu-bar__link"
                                        >Wordpress theme</router-link
                                    >
                                </li>
                            </ul>
                        </div>
                        <div class="social-mobile">
                            <div class="footer-box">
                                <div class="footer__items">
                                    <div class="footer__socials">
                                        <a href="#" class="footer__social-link"
                                            ><ThemifyIcon
                                                icon="twitter"
                                            ></ThemifyIcon
                                        ></a>
                                    </div>
                                    <div class="footer__socials">
                                        <a href="#" class="footer__social-link"
                                            ><ThemifyIcon
                                                icon="facebook"
                                            ></ThemifyIcon
                                        ></a>
                                    </div>
                                    <div class="footer__socials">
                                        <a href="#" class="footer__social-link"
                                            ><ThemifyIcon
                                                icon="dribbble"
                                            ></ThemifyIcon
                                        ></a>
                                    </div>
                                    <div class="footer__socials">
                                        <a href="#" class="footer__social-link"
                                            ><ThemifyIcon
                                                icon="instagram"
                                            ></ThemifyIcon
                                        ></a>
                                    </div>
                                </div>
                                <div class="footer__copyright">
                                    <p>2022 ?? Design by Unvab. Code by Haru</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import ThemifyIcon from "../../node_modules/vue-themify-icons/ThemifyIcon.vue";
export default {
    data() {
        return {};
    },
    methods: {
        showMenuMobile() {
            document
                .querySelector(".header-menu-mobile")
                .classList.add("active-menu-mobile");
        },
        closeMenuMobile() {
            document
                .querySelector(".header-menu-mobile")
                .classList.remove("active-menu-mobile");
        },
        // changeColorText(){
        //   let ele = document.getElementsByClassName("menu-bar__link");
        //   for (let i = 0; i < ele.length; i++) {
        //       ele[i].classList.add('menu-bar__link-than50')
        //       // ele[i].style.color = colorDark;
        //       // ele[i].onmouseover = function () {
        //       //   this.style.color = colorLight;
        //       // };
        //       // ele[i].onmouseout = function () {
        //       //   this.style.color = colorDark;
        //       // };
        //     }
        // },
        handleScroll() {
            let whiteColor = "#fff";
            let colorDark = "#0e0e0e";
            let colorLight = "#bfbfbf";
            if (document.documentElement.scrollTop > 50) {
                document.querySelector(".logob").style.display = "block";
                document.querySelector(".logow").style.display = "none";
                document.querySelector(".header").style.backgroundColor =
                    "white";
            }
            if (document.documentElement.scrollTop < 50) {
                document.querySelector(".logob").style.display = "none";
                document.querySelector(".logow").style.display = "block";
                document.querySelector(".header").style.backgroundColor =
                    "transparent";
                // for (i; i < ele.length; i++) {
                //   ele[i].classList.add('menu-bar__link-less50')
                //   // ele[i].style.color = colorLight;
                //   // ele[i].onmouseover = function () {
                //   //   this.style.color = colorDark;
                //   // };
                //   // ele[i].onmouseout = function () {
                //   //   this.style.color = colorLight;
                //   // };
                // }
            }
        },
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
        document.querySelector(".logow").style.display = "block";
        document.querySelector(".logob").style.display = "none";
        document.querySelector(".header").style.backgroundColor = "transparent";
        // //Color
        // let ele = document.getElementsByClassName("menu-bar__link");
        // let i = 0;
        // for (i; i < ele.length; i++) {
        //   ele[i].style.color = colorDark;
        //   ele[i].onmouseover = function () {
        //     this.style.color = colorLight;
        //   };
        //   ele[i].onmouseout = function () {
        //     this.style.color = colorDark;
        //   };
        // }
        // window.addEventListener("onload", this.changeColorText())
    },
    components: { ThemifyIcon },
};
</script>
<style scoped>
header {
    font-family: var(--header-font);
    /* color: var(--header-text-color); */

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: all 0.5s;
    z-index: 10;
}
.wrap-header,
.menu-bar__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.wrap-header {
    padding: 33px 15px;
}
.header-mobile-responsive {
    width: 100%;
}
.icon-white {
    color: #fff;
}
.logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.logo .logo-link {
    width: 88px;
    height: 33px;
    display: block;
}
.logo .logo-link img {
    width: 100%;
}
.menu-bar__list {
    position: relative;
    padding-left: 20px;
}
.menu-bar__link {
    text-transform: uppercase;
    /* font-weight: bold; */
    display: block;
    padding: 6px 14.6px;
    color: var(--header-text-color);
    font-size: 14px;
}
.menu-bar__link-less50:hover {
    color: #fff;
}
.menu-bar__link:hover {
    color: #000;
    transition: all 0.5s;
}
.router-link-exact-active {
    color: #000;
}

/* //social */
.footer__items {
    display: flex;
}
.footer-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.footer__social-link {
    display: block;
    padding: 3px 10px;
    color: #fff;
    transition: all 0.5;
}
.footer__social-link:hover {
    opacity: 1;
}
.footer__copyright {
    font-family: "Work Sans", sans-serif;
    margin-top: 20px;
    color: #fff;
}

/* class hide & active */
.active-menu-mobile {
    z-index: 2 !important;
    opacity: 1 !important;
    visibility: visible;
}
.active-menu-mobile .menu-bar__item {
    opacity: 1 !important;
}
.hide-menu-icon {
    display: none !important;
}
</style>
