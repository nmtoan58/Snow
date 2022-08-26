<template>
    <header class="header">
        <div class="container">
            <div class="wrap-header">
                <div class="logo">
                    <!-- <router-link class="logo-link logow" to="/home">
                        <img src="../assets/images/logo-light.svg" alt="" />
                    </router-link> -->
                    <router-link class="logo-link logoblack" to="/home">
                        <img src="../assets/images/logo.svg" alt="" />
                    </router-link>
                </div>
                <div class="menu-bar">
                    <ul class="menu-bar__list">
                        <li class="menu-bar__item">
                            <router-link class="menu-bar__link" to="/"
                                >about</router-link
                            >
                        </li>
                        <li class="menu-bar__item">
                            <router-link class="menu-bar__link" to="/home"
                                >contact</router-link
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
                                    <p>2022 © Design by Unvab. Code by Haru</p>
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
    components: { ThemifyIcon },
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
    },
};
</script>
<style lang="scss" scoped>
@import "../assets/css/responsive/responsive.css";
@import "../assets/css/scss/style.scss";
header {
    font-family: $font_text;

    .wrap-header,
    .menu-bar__list {
        @include displayWH(flex, center, space-between);
    }
    .wrap-header {
        padding: 33px 15px;
        .logo .logo-link {
            width: 88px;
            height: 33px;
            display: block;
        }
        .logoblack {
            display: block !important;
        }
        .logowhite {
            width: 88px;
            height: 33px;
            display: block;

            img {
                width: 100%;
                height: 100%;
            }
        }
        .icon-white {
            color: #fff;
        }
        .logo .logo-link img {
            width: 100%;
        }
        .menu-bar-mobile {
            .header-menu-mobile {
                .header-mobile-responsive {
                    width: 100%;

                    .logo {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                }

                @include maxWidth(1023px) {
                    position: fixed;
                    left: 0;
                    right: 0;
                    background-color: rgba(0, 0, 0, 0.9);
                    top: 0;
                    bottom: 0;
                    padding: 15px;
                    z-index: -1;
                    visibility: hidden;
                    opacity: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    font-family: "Playfair Display", serif;
                    transition: all 0.1s ease-in-out;
                }
            }
        }
        .menu-bar__list {
            position: relative;

            @include maxWidth(1023px) {
                .menu-bar__item {
                    opacity: 0;
                }
                .menu-bar__item:nth-child(1) {
                    transition: all 1.4s ease-in-out;
                }
                .menu-bar__item:nth-child(2) {
                    transition: all 1.8s ease-in-out;
                }
                .menu-bar__item:nth-child(3) {
                    transition: all 2.2s ease-in-out;
                }
                .menu-bar__item:nth-child(4) {
                    transition: all 2.4s ease-in-out;
                }
                .menu-bar__item:nth-child(5) {
                    transition: all 2.8s ease-in-out;
                }
            }
        }
        .menu-bar__link {
            text-transform: uppercase;
            display: block;
            padding: 6px 14.6px;
            color: $text-gray;
            font-size: 14px;
            line-height: 2rem;

            @include maxWidth(1023px) {
                text-transform: unset;
            }
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
    }
}

//social
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
//class hide & active
.active-menu-mobile {
    z-index: 2 !important;
    opacity: 1 !important;
    visibility: visible !important;
}
.active-menu-mobile .menu-bar__item {
    opacity: 1 !important;
}
.hide-menu-icon {
    display: none !important;
}
</style>
