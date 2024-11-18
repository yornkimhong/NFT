<template>
  <div class="relative w-full">
    <div class="container max-w-6xl mx-auto px-6 mt-32">
      <div class="flex flex-col space-y-3 text-center md:text-left">
        <h2 class="font-agdasima text-white text-5xl capitalize">Explore Category</h2>
        <p class="text-grey">
          Discover Unique Digital Treasures in Every Category
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16">
        <div
          class="bg-lightBlue rounded-lg flex flex-col items-center justify-center px-4 pt-4 overflow-hidden"
          v-for="category in categories"
          :key="category.id"
        >
          <img :src="category.image" alt="" class="object-cover rounded-lg hover:scale-125 duration-300 cursor-pointer" />
          <p class="text-white text-lg p-2">{{ category.title }}</p>
        </div>
      </div>
    </div>
  
  </div>
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
