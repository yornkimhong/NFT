import { createApp } from "vue";
import "./assets/input.css";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";

createApp(App).mount("#app");
AOS.init({
  duration: 2000,
  once: true, 
});