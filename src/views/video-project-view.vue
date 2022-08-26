<template>
    <Helmet title="Snow | Work">
        <HeaderSP />
        <div class="video-project">
            <div class="container">
                <div class="video-project-content">
                    <h2>Video Project</h2>
                    <div class="content-box">
                        <div class="content">
                            <p>
                                Nullam lobortis neque turpis, nec tempus sem
                                pharetra at. Donec et quam, ullamcorper velit.
                                Aliquam maximus ullamcorper ligula, at placerat
                                dui hendrerit sed. Sed metus urna, bibendum id
                                tortor, feugiat ipsum. Aliquam vehicula neque
                                sit amet dolor malesuada pretium.
                            </p>
                            <p>
                                Curabitur tristique, felis ut mattis auctor,
                                elit ante laoreet libero, ac lorem quam vitae
                                libero. Suspen disse aliquet eget risus quis
                                vehicula.
                            </p>
                        </div>
                        <div class="infomation">
                            <div class="info-item client">
                                <span><strong>Client:</strong>Anna Doe</span>
                            </div>
                            <div class="info-item date">
                                <span><strong>Date:</strong>02.20.2016</span>
                            </div>
                            <div class="info-item share">
                                <span
                                    ><strong>Share:</strong
                                    ><a href="">Facebook</a
                                    ><a href="">Twitter</a
                                    ><a href="">Pinterest</a></span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="video-img">
                <img
                    src="../assets/images/video-projects-images/portfolio-4-video-thumb.jpg"
                    alt=""
                />
            </div>
        </div>
        <div class="blog-more-post">
            <div class="container">
                <div class="blog-more-post-box">
                    <a href="#" class="btn-prev">
                        <ThemifyIcon icon="angle-left"></ThemifyIcon>
                        <span>Previous work</span>
                    </a>
                    <a href="#" class="icon-more-post">
                        <ThemifyIcon icon="layout-grid2-alt"></ThemifyIcon>
                    </a>
                    <a href="#" class="btn-next">
                        <span>next work</span>
                        <ThemifyIcon icon="angle-right"></ThemifyIcon>
                    </a>
                </div>
            </div>
        </div>
    </Helmet>
</template>
<script>
import ThemifyIcon from "vue-themify-icons";
import HeaderSP from "../components/HeaderSP.vue";
import Helmet from "../components/Helmet.vue";

export default {
    components: {
        ThemifyIcon,
        HeaderSP,
        Helmet,
    },
};
</script>
<style lang="scss" scoped>
@import "../assets/css/scss/style.scss";

.video-project {
    padding-top: 100px;
    font-family: $font_text;
    background-color: $background-gray;

    .video-project-content {
        h2 {
            font-family: $font_title;
            font-size: 2.6rem;
            line-height: 2.6rem;

            @include maxWidth(767px) {
                font-size: 2.6rem !important;
            }
        }
        .content-box {
            padding-top: 30px;
            @include displayW(flex, flex-start);
            .content {
                p {
                    line-height: 18px;
                    color: $text-gray;
                    letter-spacing: $letter-space-text;
                    line-height: $line-high-text;
                    padding-right: 15px;

                    &:first-child {
                        margin-bottom: 1.6rem;
                    }
                    @include maxWidth(767px) {
                        &:first-child {
                            margin-bottom: 0.5rem;
                        }
                    }
                }
            }
            .infomation {
                padding: 0 15px;

                .info-item {
                    line-height: $line-high-text;
                    strong {
                        margin-right: 5px;
                    }

                    a {
                        margin: 5px;
                        color: $black-color;
                    }
                }

                @include maxWidth(767px){
                    padding: 0;
                    margin-top: 15px;
                }
            }

            @include maxWidth(767px) {
                display: flex;
                flex-direction: column;
            }
        }
        @include maxWidth(1024px) {
            padding: 0 30px;
        }
    }

    .video-img {
        margin-top: 100px;
        
        img {
            width: 100%;
            min-height: 400px;
            object-fit: cover;
        }
        
        @include maxWidth(767px){
            margin-top: 50px;
        }
    }
}

.blog-more-post {
    padding: 40px 0;
    background-color: $background-white;
    margin-top: -3px;

    .blog-more-post-box {
        display: flex;
        justify-content: space-between;
        width: 100%;

        a {
            color: $black-color;
            @include displayH(flex, center);
        }

        .btn-prev span,
        .btn-next span {
            text-transform: uppercase;
            margin: 0 15px;
            font-family: "Work Sans", sans-serif;
            font-size: 0.8;

            @include maxWidth(767px){
                display: none;
            }
        }
    }
}
</style>
