import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

const base = axios.create({
 baseURL: "http://localhost:3000"
});

Vue.prototype.$http = base;
Vue.config.productionTip = false;

new Vue({
 router,
 store,
 render: h => h(App)
}).$mount("#app");
