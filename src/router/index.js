import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
 path: "/Home",
 name: "Home",
 component: Home,
 meta: {
 requiresAuth: true
 }
 },
 {
 path: "/",
 name: "login",
 component: () =>
 import ("../auth/login.vue")
 },
];
const router = new VueRouter({
 mode: "history",
 base: process.env.BASE_URL,
 routes
});
router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
 if (localStorage.getItem("jwt") == null) {
 next({
 path: "/"
 });
 } else {
 next();
 }
 } else {
 next();
 }
});
export default router;