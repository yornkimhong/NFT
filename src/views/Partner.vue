<template>
  <section class="w-full bg-lightBlue mt-[450px] md:mt-36">
    <div class="container max-w-6xl mx-auto py-4">
    <div 
      class="grid grid-cols-3 grid-rows-2 mx-auto px-6 gap-12 place-content-center lg:grid-cols-5 lg:grid-rows-1"
    >
      <div data-aos="zoom-in" v-for="partner in partners" :key="partner.id" class="flex items-center justify-center">
        <img :src="partner.image" alt="partner logo" class="object-cover" />
      </div>
    </div>
  </div>
  </section>
</template>


<script>
import { AOS } from "aos";
import { partners } from "../data";
export default {
  data() {
    return {
      partners,

    };
  },
  onMounted() {
     AOS.init({
        duration: 500, 
        once: true, // If true, animation will only happen once
      });
  }
};
</script>
