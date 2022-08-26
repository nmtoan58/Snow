<template>
    <div class="portfolio">
        <div class="container">
            <div class="portfolio-box">
                <router-link to="/video" class="item">
                    <div class="item__img">
                        <img
                            src="../assets/images/best-projects/portfolio-7-sm.jpg"
                            alt=""
                        />
                    </div>
                    <div class="item__overlay"></div>
                    <div class="item__content">
                        <div class="item__title">
                            <span>Vinyl Record</span>
                        </div>
                        <div class="item__category">
                            <span>mockup</span>
                        </div>
                    </div>
                </router-link>
                <router-link to="/video" class="item">
                    <div class="item__img">
                        <img
                            src="../assets/images/best-projects/portfolio-4-sm.jpg"
                            alt=""
                        />
                    </div>
                    <div class="item__overlay"></div>
                    <div class="item__content">
                        <div class="item__title">
                            <span>Modern T-Shirt</span>
                        </div>
                        <div class="item__category">
                            <span>print</span>
                        </div>
                    </div>
                </router-link>
                <router-link to="/video" class="item">
                    <div class="item__img">
                        <img
                            src="../assets/images/best-projects/portfolio-5-sm.jpg"
                            alt=""
                        />
                    </div>
                    <div class="item__overlay"></div>
                    <div class="item__content">
                        <div class="item__title">
                            <span>Minimal Bag</span>
                        </div>
                        <div class="item__category">
                            <span>branding</span>
                        </div>
                    </div>
                </router-link>
                <router-link to="/video" class="item">
                    <div class="item__img">
                        <img
                            src="../assets/images/best-projects/portfolio-9-sm.jpg"
                            alt=""
                        />
                    </div>
                    <div class="item__overlay"></div>
                    <div class="item__content">
                        <div class="item__title">
                            <span>Clean & Groovy</span>
                        </div>
                        <div class="item__category">
                            <span>design</span>
                        </div>
                    </div>
                </router-link>
                <router-link to="/video" class="item">
                    <div class="item__img">
                        <img
                            src="../assets/images/best-projects/portfolio-3-sm.jpg"
                            alt=""
                        />
                    </div>
                    <div class="item__overlay"></div>
                    <div class="item__content">
                        <div class="item__title">
                            <span>Minimal Mobile App</span>
                        </div>
                        <div class="item__category">
                            <span>design</span>
                        </div>
                    </div>
                </router-link>
                <router-link to="/video" class="item">
                    <div class="item__img">
                        <img
                            src="../assets/images/best-projects/portfolio-8-sm.jpg"
                            alt=""
                        />
                    </div>
                    <div class="item__overlay"></div>
                    <div class="item__content">
                        <div class="item__title">
                            <span>White T-Shirt</span>
                        </div>
                        <div class="item__category">
                            <span>print</span>
                        </div>
                    </div>
                </router-link>
                <router-link to="/video" class="item">
                    <div class="item__img">
                        <img
                            src="../assets/images/best-projects/portfolio-2-sm.jpg"
                            alt=""
                        />
                    </div>
                    <div class="item__overlay"></div>
                    <div class="item__content">
                        <div class="item__title">
                            <span>Business Card</span>
                        </div>
                        <div class="item__category">
                            <span>branding</span>
                        </div>
                    </div>
                </router-link>
                <router-link to="/video" class="item">
                    <div class="item__img">
                        <img
                            src="../assets/images/best-projects/portfolio-6-sm.jpg"
                            alt=""
                        />
                    </div>
                    <div class="item__overlay"></div>
                    <div class="item__content">
                        <div class="item__title">
                            <span>Heja Stockholm</span>
                        </div>
                        <div class="item__category">
                            <span>photography</span>
                        </div>
                    </div>
                </router-link>
                <router-link to="/video" class="item">
                    <div class="item__img">
                        <img
                            src="../assets/images/best-projects/portfolio-12-sm.jpg"
                            alt=""
                        />
                    </div>
                    <div class="item__overlay"></div>
                    <div class="item__content">
                        <div class="item__title">
                            <span>Paper Bag</span>
                        </div>
                        <div class="item__category">
                            <span>photography</span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
/* @keyframes fade{
    from {
        opacity: 0.5;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(10px);
    }
} */
.portfolio-box {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 100px;
    transition: all 0.5s ease-in-out;
}
.item__img {
    width: 100%;
    height: 100%;
}
.item__img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.item {
    width: 370px;
    height: 370px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
.item:hover .item__overlay,
.item:focus .item__overlay {
    opacity: 1;
    transition: all 0.8s;
}
.item:hover .item__title,
.item:focus .item__title {
    opacity: 1;
    transform: translateY(-10px);
    transition: all 0.5s;
}
.item:hover .item__category,
.item:focus .item__category {
    opacity: 1;
    transform: translateY(-10px);
    transition: all 0.8s;
}
.item__overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.9);
    opacity: 0;
}
.item__content {
    text-align: center;
    color: #fff;
    position: absolute;
}
.item__title {
    margin-bottom: 1.2rem;
    opacity: 0;
    transform: translateY(10px);
}
.item__title span {
    font-family: "Playfair Display", serif;
    font-size: 1.6rem;
    font-weight: 600;
}
.item__category span {
    font-family: "Work Sans", sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
}
.item__category {
    opacity: 0;
    transform: translateY(10px);
}
</style>
