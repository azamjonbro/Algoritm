import { createApp } from "vue";
import App from "./App.vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import router from "./Router";
import i18n from "./Utils/i18n";
import "./assets/CSS/style.css";

const app = createApp(App);

app.use(router);
app.use(Toast);

// Global $t funksiyani qo'shamiz
app.config.globalProperties.$t = (key) => i18n.t(key);

app.mount("#app");
