<template>
  <div class="container max-w-6xl mx-auto px-6 mt-32">
    <div class="flex flex-col space-y-3 text-center md:text-left mb-16">
      <h2 class="font-agdasima text-white text-5xl capitalize">popular collection</h2>
      <p class="text-grey">
      Collect the Best in Digital Art
</p>
    </div>
    <CollectionCard/>
  </div>
</template>

<script>
import CollectionCard from "../components/CollectionCard.vue";
export default {
  components: { CollectionCard },
};
</script>

<style></style>
