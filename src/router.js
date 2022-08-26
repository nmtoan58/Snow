import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/home";
import Portfolio from "./views/portfolio.vue";
import Blogs from "./views/blogs.vue";
import BlogDetail from "./views/blogs-detail-view.vue";
const routes = [
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/",
        component: Home,
    },
    {
        path: "/video",
        component: import("./views/video-project-view"),
    },
    {
        path: "/:pathMatch(.*)*",
        component: import("../src/views/home.vue"),
    },
    {
        path: "/portfolio",
        component: Portfolio,
    },
    {
        path: "/blog",
        component: Blogs,
    },
    {
        path: "/blog-detail",
        component: BlogDetail,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
