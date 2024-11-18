<template>
  <div class="w-full bg-lightBlue">
    <div class="container max-w-6xl mx-auto py-4">
    <div
      class="grid grid-cols-3 grid-rows-2 mx-auto px-6 gap-12 place-content-center lg:grid-cols-5 lg:grid-rows-1"
    >
      <div v-for="partner in partners" :key="partner.id" class="flex items-center justify-center">
        <img :src="partner.image" alt="partner logo" class="object-cover" />
      </div>
    </div>
  </div>
  </div>
</template>


<script>
import { partners } from "../data";
export default {
  data() {
    return {
      partners,
    };
  },
};
</script>
