<template>
  <div class="relative">
    <Hero />
    <Partner />
    <About />
    <Category />
    <Collection />
    <Benefit />
    <Team />
    <Footer />

    <!-- Arrow Up Button -->
    <button
      v-if="isVisible"
      class="fixed bottom-5 p-2 rounded-md right-5 z-50 bg-gradientPrimary"
      @click.prevent="scrollToTop"
    >
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M12.75 20C12.75 20.4142 12.4142 20.75 12 20.75C11.5858 20.75 11.25 20.4142 11.25 20L11.25 10.75H6.00002C5.69668 10.75 5.4232 10.5673 5.30711 10.287C5.19103 10.0068 5.25519 9.68417 5.46969 9.46967L11.4697 3.46967C11.6103 3.32902 11.8011 3.25 12 3.25C12.1989 3.25 12.3897 3.32902 12.5304 3.46967L18.5304 9.46967C18.7449 9.68417 18.809 10.0068 18.6929 10.287C18.5768 10.5673 18.3034 10.75 18 10.75H12.75L12.75 20Z"
            fill="#ffffff"
          ></path>
        </g>
      </svg>
    </button>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Hero from "./views/Hero.vue";
import Partner from "./views/Partner.vue";
import About from "./views/About.vue";
import Category from "./views/Category.vue";
import Collection from "./views/Collection.vue";
import Benefit from "./views/Benefit.vue";
import Team from "./views/Team.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Hero,
    Partner,
    About,
    Category,
    Collection,
    Benefit,
    Team,
    Footer,
  },
  setup() {
    const isVisible = ref(false);
    const checkScroll = () => {
      if (window.scrollY > 200) {
        isVisible.value = true;
      } else {
        isVisible.value = false;
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0 });
    };

    onMounted(() => {
      window.addEventListener("scroll", checkScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", checkScroll);
    });

    return {
      isVisible,
      scrollToTop,
    };
  },
};
</script>
