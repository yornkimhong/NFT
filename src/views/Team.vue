<template>
  <div class="container max-w-6xl mx-auto px-6 mt-32">
    <div class="flex flex-col space-y-3 text-center">
      <h2 class="font-agdasima text-white text-5xl capitalize">our team</h2>
      <p class="text-grey max-w-lg mx-auto">
        Our talented team combines creativity and expertise to deliver
        exceptional NFT solutions, fostering innovation and providing you with
        the tools to navigate the exciting world of digital art and
        collectibles.
      </p>
    </div>
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 my-32 place-items-center"
    >
      <div
        class="relative h-[275px] w-[175px]"
        v-for="person in people"
        :key="person.id"
      >
        <div class="h-full w-full bg-lightBlue rounded-lg -skew-x-6"></div>
        <img
          :src="person.image"
          :alt="person.fullname"
          class="absolute bottom-1 right-6 object-cover h-[225px] w-[150px] hover:scale-105 duration-200"
        />
        <h3 class="text-white font-agdasima text-2xl pt-2">
          {{ person.name }}
        </h3>
        <p class="text-grey">{{ person.role }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { people } from "../data";
export default {
  data() {
    return {
      people,
    };
  },
};
</script>

<style></style>
