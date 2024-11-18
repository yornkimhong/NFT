<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center"
  >
    <div
      class="bg-darkLight rounded-lg flex flex-col p-4 overflow-hidden"
      v-for="collection in collections"
      :key="collection.id"
    >
      <img
        :src="collection.image"
        :alt="collection.title"
        class="object-cover rounded-lg h-[400px] hover:scale-110 duration-300 cursor-pointer"
      />
      <div class="flex justify-between items-center pt-4">
        <div class="flex flex-col text-left space-y-2">
          <h3 class="font-agdasima text-2xl text-white">
            {{ collection.title }}
          </h3>
          <p class="text-white capitalize">
            price <br /><span class="font-agdasima text-2xl">
              ${{ collection.price }}</span
            >
          </p>
        </div>
        <button
          class="py-2 px-4 text-white uppercase flex space-x-2 bg-gradientPrimary rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <p>buy now</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { collections } from "@/data";
export default {
  data() {
    return {
      collections,
    };
  },
};
</script>

<style></style>
