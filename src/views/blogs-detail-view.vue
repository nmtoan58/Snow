<template>
    <Helmet title="Snow | Why you should Always First">
        <HeaderSP></HeaderSP>
        <div class="detail-blog">
            <div class="blogs-detail-bg"></div>
            <div class="blogs-detail-box">
                <div class="container">
                    <div class="blogs-box-v">
                        <div class="blog-content">
                            <div class="blog-title">
                                <h2>Why Should You Alway First</h2>
                            </div>
                            <div class="post-media">
                                <div class="date">
                                    <span>August 14, 2016</span>
                                </div>
                                <div class="category">
                                    <span>design</span>
                                </div>
                                <div class="count-comment">
                                    <span>2 comments</span>
                                </div>
                            </div>
                            <div class="content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Pellentesque rhoncus orci a
                                    purus lacinia consectetur. Vestibulum rutrum
                                    ex in odio placerat dictum. Morbi sit amet
                                    tortor mollis, tincidunt magna a, iaculis
                                    nisl. Cras varius odio a arcu rutrum, nec
                                    posuere lacus imperdiet. Proin iaculis, nibh
                                    eleifend elementum pulvinar, erat nisl
                                    consequat quam, ac ornare est sem nec
                                    libero. Fusce ac sagittis quam. Phasellus
                                    mattis, nunc a venenatis laoreet, est ipsum
                                    consectetur turpis, in ullam corper urna
                                    tortor eu purus.
                                </p>
                                <p>
                                    Quisque cursus risus id ante fermentum, in
                                    auctor quam consectetur. Vestibulum est
                                    nisi, tempus ac vehicula sit amet, blandit
                                    et sapien. Ut congue dui enim, at viverra
                                    nisl tempor a. Donec in enim nec massa
                                    lacinia porta. Nullam lobortis, enim aliquam
                                    congue bibendum, libero turpis tincidunt
                                    enim, vel dapibus justo lectus et risus.
                                    Proin eget mi a tortor laoreet dictum.
                                </p>
                                <p>
                                    <em
                                        >Donec consectetur arcu eu diam cursus
                                        consectetur. Interdum malesuada
                                        faucibus. Morbi dapibus eros vitae nisi
                                        blandit lacinia.</em
                                    >
                                </p>
                                <p>
                                    Pellentesque viverra nisl a erat volutpat
                                    commodo. Etiam sem justo, pellentesque
                                    egestas finibus at, rutrum efficitur ex.
                                    Donec facilisis magna in mauris fermentum,
                                    sit amet porttitor lorem dictum. Donec in
                                    purus elementum, sagittis magna sit amet,
                                    auctor enim. Duis purus ex, interdum ac
                                    lacus in, ullamcorper vestibulum urna. Duis
                                    ornare nec purus ut laoreet.
                                </p>
                                <div class="blogs-share">
                                    <strong>Share:</strong>
                                    <a href="#" class="social-link">Facebook</a>
                                    <a href="#" class="social-link">Twitter</a>
                                    <a href="#" class="social-link"
                                        >Pinterest</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="blogs-comment-container">
                <div class="container">
                    <div class="blogs-comment-box">
                        <div class="blog-comments">
                            <div class="comment-title">
                                <h3>Comments:</h3>
                            </div>
                            <div class="comment-item">
                                <div class="comment-author-avt">
                                    <img
                                        src="../assets/images/chad.jpg"
                                        alt=""
                                    />
                                </div>
                                <div class="comment-content-box">
                                    <div class="comment-infor">
                                        <div class="author-name">
                                            <span>John Leonard</span>
                                        </div>
                                        <div class="comment-reply-wrap">
                                            <div class="comment-date">
                                                <span>20 september, 2016</span>
                                            </div>
                                            <div class="comment-reply">
                                                <a href="#">reply</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="comment-content-text">
                                        <p>
                                            Nullam ac dui et purus malesuada
                                            gravida id fermentum orci. In eu
                                            ipsum quis urna hendrerit
                                            condimentum vitae a mauris. In
                                            congue turpis purus, vitae tempus
                                            ante id. Donec orci arcu, sagittis
                                            ut finibus vitae.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="blogs-form-container">
                <div class="container">
                    <div class="blog-from">
                        <div class="form-title">
                            <h3>Leave a Comment:</h3>
                        </div>
                        <form action="">
                            <div class="form-input">
                                <div class="form-name-email">
                                    <input
                                        placeholder="Your Name"
                                        type="text"
                                    />
                                    <input
                                        placeholder="Your Email"
                                        type="text"
                                    />
                                </div>
                                <div class="form-commnent">
                                    <textarea
                                        placeholder="Your Comment"
                                        name=""
                                        id=""
                                        cols="30"
                                        rows="10"
                                    ></textarea>
                                </div>
                                <button class="btn-submit">
                                    post a comment
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="blog-more-post">
                <div class="container">
                    <div class="blog-more-post-box">
                        <a href="#" class="btn-prev">
                            <ThemifyIcon icon="angle-left"></ThemifyIcon>
                            <span>Previous post</span>
                        </a>
                        <a href="#" class="icon-more-post">
                            <ThemifyIcon icon="layout-grid2-alt"></ThemifyIcon>
                        </a>
                        <a href="#" class="btn-next">
                            <span>next post</span>
                            <ThemifyIcon icon="angle-right"></ThemifyIcon>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </Helmet>
</template>
<script>
import ThemifyIcon from "vue-themify-icons";
import HeaderSP from "@/components/HeaderSP.vue";
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
@import '../assets/css/scss/style.scss';
.blogs-detail-bg {
    background: url("../assets/images/post-6.jpg") no-repeat;
    background-size: cover;
    height: 570px;
    background-position: 50% 50%;
}
.blogs-detail-box {
    background-color: #f6f6f6;
}
.container {
    display: flex;
    justify-content: center;
}
.blogs-box-v {
    width: 66%;
}
.blog-content {
    margin-top: 100px;
    font-family: "Work Sans", sans-serif;
}
.blog-title h2 {
    font-size: 2.6rem;
    line-height: 3rem;
    margin-bottom: 20px;
    font-family: "Playfair Display", serif;
}
.post-media {
    display: flex;
    text-transform: uppercase;
    margin-bottom: 25px;
    font-size: 0.9rem;
}
.post-media div {
    margin-right: 40px;
}
.content {
    letter-spacing: 0.5px;
    color: #4b4b4b;
}
.content p {
    margin-bottom: 20px;
    line-height: 1.2rem;
}
.content p:nth-child(3) {
    font-family: "Playfair Display", serif;
    font-size: 1.4rem;
    line-height: 1.4;
}
.blogs-share {
    margin-top: 20px;
    margin-bottom: 80px;
}
.blogs-share a,
strong {
    margin-right: 15px;
}
.blogs-share a {
    color: #000;
}

.blogs-comment-box {
    padding: 80px 0;
    width: 66%;
}
.comment-title h3 {
    font-size: 1.7rem;
    margin-bottom: 30px;
}
.comment-author-avt {
    width: 100px;
    height: 100px;
    margin-right: 30px;
}
.comment-author-avt img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.comment-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Work Sans", sans-serif;
    margin-bottom: 20px;
}
.comment-infor {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
.comment-content-box {
    width: 600px;
}
.author-name span {
    font-weight: bold;
}
.comment-reply {
    a {
        color: $black-color;
    }
}
.comment-reply-wrap {
    display: flex;
    text-transform: uppercase;
}
.comment-date {
    margin-right: 40px;
}
.blogs-form-container {
    background-color: #f6f6f6;
    padding: 60px;
}
.form-title h3 {
    font-size: 1.6rem;
    line-height: 1.6rem;
    padding-bottom: 50px;
}
.blog-from {
    width: 66%;
}
.form-name-email {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}
.form-name-email input {
    width: 48%;
    border: none;
    outline: none;
    padding: 16px 22px;
    font-size: 0.95rem;
    font-weight: 400;
    line-height: 1.2;
    background-color: #fff;
}

textarea {
    border: none;
    outline: none;
    width: 100%;
    margin-bottom: 30px;
    padding: 22px;
    font-family: "Work Sans", sans-serif;
    font-size: 0.95rem;
}
button {
    padding: 18px 25px;
    text-transform: uppercase;
    outline: none;
    border: none;
    background-color: #252525;
    color: #fff;
    font-weight: bold;
}
button:hover {
    background-color: #444;
}
.blog-more-post {
    padding: 40px 0;
}
.blog-more-post-box {
    display: flex;
    justify-content: space-between;
    width: 100%;

    a {
        color: $black-color;
    }
}
.btn-prev span,
.btn-next span {
    text-transform: uppercase;
    margin: 0 15px;
    font-family: "Work Sans", sans-serif;
    font-size: 0.8;
}
</style>
