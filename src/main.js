import { createApp } from "vue";
import "./assets/input.css";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";

createApp(App).mount("#app");
AOS.init({
  duration: 2500, // Animation duration
  once: true, // If true, animation will only happen once
});