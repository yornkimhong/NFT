<template>
  <div class="container max-w-6xl mx-auto px-6 mt-32">
    <div class="flex flex-col space-y-3 text-center md:text-left">
      <h2 class="font-agdasima text-white text-5xl capitalize">
        why NFT’s is useful
      </h2>
      <p class="text-grey">let’s know of using NFT’s</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-4  mt-32">
      <div
        class="bg-dark h-[300px] rounded-lg flex flex-col space-y-4 items-center justify-center text-center px-4 relative"
        v-for="benefit in benefits"
        :key="benefit.id"
      >
        <div class="flex justify-center items-center absolute -top-14 right-0 left-0 mx-auto rounded-full h-28 w-28 bg-darkLight">
            <h3 class="font-agdasima text-5xl text-white">{{ benefit.page }}</h3>
        </div>

        <h3 class="font-agdasima text-3xl text-white ">{{ benefit.title }}</h3>
        <p class="text-grey leading-[150%] max-w-md">{{ benefit.description }}</p>
        
      </div>
    </div>
  </div>
</template>

<script>
import { benefits } from "../data";
export default {
  data() {
    return {
      benefits,
    };
  },
};
</script>

<style></style>
