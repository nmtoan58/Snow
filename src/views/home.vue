<template>
    <Helmet title="Best Free HTML Portfolio Template">
        <Header></Header>
        <div class="wrap-banner">
            <div class="banner">
                <div class="overlay"></div>
            </div>
            <div class="banner__content">
                <div class="banner-content-inner">
                    <h2 class="content__subtitle">new branding agecy</h2>
                    <h1>
                        We are about to change the way
                        <p></p>
                        <em>you publish on the web</em>
                    </h1>
                    <a
                        href="https://sudinasa.gumroad.com/l/snow-sudinasa"
                        class="btn btn-banner"
                        >free download</a
                    >
                </div>
            </div>
            <div class="banner__btn-brand">
                <a href="#about">
                    <ThemifyIcon icon="angle-down"></ThemifyIcon>
                </a>
            </div>
        </div>
        <div class="about" id="about">
            <div class="container">
                <div class="about-box">
                    <div class="about-title">
                        <h2>About Our Agency</h2>
                    </div>
                    <div class="about-description">
                        <p>
                            We are a new design studio based in USA. We have
                            over 20 years of combined experience, and know a
                            thing or two about designing websites and mobile
                            apps. Clever use of technology and lean processes
                            enable us to work faster and smarter.
                        </p>
                    </div>
                    <div class="about-i">
                        <img
                            src="../assets/images/about-me-signature.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
        <div id="brand" class="brand">
            <div class="container">
                <div class="brand-box">
                    <div class="brand__item">
                        <div class="brand__logo">
                            <ThemifyIcon icon="briefcase"></ThemifyIcon>
                        </div>
                        <div class="brand__data">
                            <div class="brand__data-number">
                                <span>548</span>
                            </div>
                            <div class="brand__data-name">
                                <span>projects completed</span>
                            </div>
                        </div>
                    </div>

                    <div class="brand__item">
                        <div class="brand__logo">
                            <ThemifyIcon icon="time"></ThemifyIcon>
                        </div>
                        <div class="brand__data">
                            <div class="brand__data-number">
                                <span>1465</span>
                            </div>
                            <div class="brand__data-name">
                                <span>working hours</span>
                            </div>
                        </div>
                    </div>
                    <div class="brand__item">
                        <div class="brand__logo">
                            <ThemifyIcon icon="star"></ThemifyIcon>
                        </div>
                        <div class="brand__data">
                            <div class="brand__data-number">
                                <span>612</span>
                            </div>
                            <div class="brand__data-name">
                                <span>positive feedbacks</span>
                            </div>
                        </div>
                    </div>
                    <div class="brand__item">
                        <div class="brand__logo">
                            <ThemifyIcon icon="heart"></ThemifyIcon>
                        </div>
                        <div class="brand__data">
                            <div class="brand__data-number">
                                <span>735</span>
                            </div>
                            <div class="brand__data-name">
                                <span>happy clients</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio">
            <div class="porfolio-title">
                <div class="portfolio__title-head">
                    <div class="portfolio__title-text">
                        <h2>Lastest portfolio</h2>
                    </div>
                    <div class="portfolio__title-description">
                        <p>
                            Donec orci sem, pretium ac dolor et, faucibus
                            faucibus mauris. Etiam,pellentesque faucibus.
                            Vestibulum gravida volutpat ipsum non ultrices.
                        </p>
                    </div>
                </div>
            </div>
            <Portfolio></Portfolio>
        </div>
        <div class="slider-component">
            <Slider></Slider>
        </div>
        <div class="brands">
            <Brands></Brands>
        </div>
        <div class="blogs-component">
            <div class="container"></div>
            <Blogs></Blogs>
        </div>
        <div class="contact-component">
            <Contact></Contact>
        </div>
    </Helmet>
</template>
<script>
import Slider from "@/components/Slider.vue";
import ThemifyIcon from "vue-themify-icons";
import Portfolio from "../components/Portfolio.vue";
import Brands from "@/components/Brands.vue";
import Blogs from "../components/Blogs.vue";
import Contact from "../components/Contact.vue";
import Header from "@/components/Header.vue";
import Helmet from "@/components/Helmet.vue";
export default {
    components: {
        ThemifyIcon,
        Portfolio,
        Slider,
        Brands,
        Blogs,
        Contact,
        Header,
        Helmet,
    },
};
</script>
<style scoped>
.banner {
    background-image: url("../assets/images/home-7.jpg");
    background-size: cover;
    background-position: center;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-repeat: no-repeat;
    height: 100vh;
    font-family: var(--banner-font);
}
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
}
.banner__content {
    position: absolute;
    left: 50%;
    bottom: 25%;
    transform: translate(-50%, -60%);
    text-align: center;
    color: #fff;
    font-weight: bold;
}

.banner__content h1,
h2 {
    font-family: var(--banner-font);
    font-size: 2rem;
}

.banner__content h2 {
    font-size: 0.9rem;
    text-transform: uppercase;
    font-family: var(--header-font);
    letter-spacing: 3px;
    line-height: 16.5px;
    margin-bottom: 1.2rem;
}
.banner-content-inner {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
h1 {
    font-size: 3.2rem !important;
    line-height: 4rem;
}
.btn-banner {
    text-transform: uppercase;
    background-color: #252525;
    border: none;
    color: #fff;
    padding: 18px 0;
    font-weight: 600;
    margin-top: 45px;
    display: block;
}
.btn-banner:hover,
.btn-banner:focus {
    background-color: #444;
    transition: all 0.5s;
}
.banner__btn-brand {
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
}
.banner__btn-brand a {
    text-align: center;
    width: 50px;
    height: 50px;
    border: 1px solid #fff;
    padding: 20px;
    border-radius: 50%;
}
.banner__btn-brand a i {
    width: 100%;
    height: 100%;
    color: #fff;
}
/* //About */
.about {
    padding: 80px 0;
    font-family: "Playfair Display", serif;
    transition: all 0.5s;
    -webkit-font-smoothing: antialiased;
}
.about-box {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.about-title h2 {
    line-height: 3rem;
    font-size: 2.6rem;
}
.about-description {
    width: 70%;
    text-align: center;
}
.about-description p {
    font-family: "Work Sans", sans-serif;
    margin-top: 2rem;
    margin-bottom: 1.6rem;
    letter-spacing: 1px;
    color: #5f5f5f;
    line-height: 1.8rem;
}

/* Brand */
.brand {
    padding: 100px 0;
    background-color: #1f1f1f;
    color: white;
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
}
.brand-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.brand__data {
    text-transform: uppercase;
    margin-left: 30px;
}
.brand__item {
    display: flex;
    align-items: center;
}
.brand__logo {
    font-size: 2.5rem;
}
.brand__data-number {
    margin: 8px 0;
}
.brand__data-number span {
    font-size: 1.2rem;
}
/* Portfolio */
.porfolio-title {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 100px;
}
.portfolio__title-head {
    margin-bottom: 60px;
    width: 60%;
    text-align: center;
}
.portfolio__title-head h2 {
    font-family: "Playfair Display", serif;
    font-size: 2.6rem;
    line-height: 3rem;
    margin-bottom: 30px;
}
.portfolio__title-description p {
    font-family: "Work Sans", sans-serif;
    line-height: 1.65rem;
    letter-spacing: 0.4px;
    color: #5f5f5f;
}
</style>
