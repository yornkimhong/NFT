<template>
  <section id="category" class="relative w-full pt-32">
    <div class="container max-w-6xl mx-auto px-6 ">
      <div data-aos="fade-right" class="flex flex-col space-y-3 text-center md:text-left">
        <h2  class="font-agdasima text-white text-5xl capitalize">Explore Category</h2>
        <p class="text-grey">
          Discover Unique Digital Treasures in Every Category
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16">
        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
          class="bg-lightBlue rounded-lg flex flex-col items-center justify-center px-4 pt-4 overflow-hidden"
          v-for="category in categories"
          :key="category.id"
        >
          <img :src="category.image" alt="" class="object-cover rounded-lg hover:scale-125 duration-300 cursor-pointer" />
          <p class="text-white text-lg p-2">{{ category.title }}</p>
        </div>
      </div>
    </div>
  
  </section>
</template>

<script>
import { categories } from "@/data";
export default {
  data() {
    return { categories };
  },
};
</script>

<style></style>
