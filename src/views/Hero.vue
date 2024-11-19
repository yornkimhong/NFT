<template>
  <section id="hero" class="relative max-w-screen">
    <div class="container mx-auto max-w-6xl px-6 lg:min-h-screen">
    <Navbar />
      <div
        class="flex flex-col md:flex-row items-center md:justify-between h-screen pt-10 space-y-20 md:space-y-0"
      >
        <div
         
          class="flex flex-col text-center md:text-left items-center md:items-start space-y-4 max-w-lg my-24"
        >
          <h1 class="font-agdasima text-white text-4xl md:text-5xl lg:text-6xl">
            Create, Sell, and Collect <span class="">Unique</span> Digital
            <span>NFT Items</span>
          </h1>
          <p class="text-grey">
            Discover a world of exclusive digital creations that can’t be found
            anywhere else. These limited edition NFTs are your chance to own a
            truly unique piece of the future.
          </p>

          <div class="flex space-x-3">
            <button
              class="py-3 px-6 rounded-md font-semibold uppercase bg-gradientSecondary text-white"
            >
              create
            </button>
            <button
              class="py-3 px-6 rounded-md font-semibold uppercase border-2 border-white text-white hover:bg-gradientPrimary"
            >
              explore
            </button>
          </div>

          <div class="flex space-x-4">
            <div class="flex flex-col">
              <h2 class="font-agdasima text-2xl text-blue">50M</h2>
              <p class="text-white">Execute assets</p>
            </div>
            <div class="flex flex-col">
              <h2 class="font-agdasima text-2xl text-blue">150M</h2>
              <p class="text-white">NFT best Create</p>
            </div>
            <div class="flex flex-col">
              <h2 class="font-agdasima text-2xl text-blue">250M</h2>
              <p class="text-white">Platform Support</p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-left"
          class="flex flex-col items-center justify-center space-y-6"
        >
          <img
            src="../assets/images/hero1.png"
            alt="hero image"
            class="object-contain md:h-[450px] md:w-[350px] lg:h-[550px] lg:w-[550px]"
          />
        </div>
      </div>
    </div>

    <img
      src="../assets/images/Ellipse 1.png"
      alt=""
      class="absolute -top-10 -left-24 -z-10"
    />
    <img
      src="../assets/images/Ellipse 3.png"
      alt=""
      class="absolute -top-5 right-0 -z-10"
    />
    <img
      src="../assets/images/Ellipse 2.png"
      alt=""
      class="absolute -top-16 right-0 left-0 -z-10"
    />
  </section>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  components: {Navbar},
  setup() {
    onMounted(() => {
      AOS.init({
        duration: 3000, // Animation duration
        once: true, // If true, animation will only happen once
      });
    });
  },
};
</script>

<style>
/* Global styles can be defined here if needed */
</style>
