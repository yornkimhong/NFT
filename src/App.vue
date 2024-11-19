<template>
 
  <Hero />
  <Partner />
  <About />
  <Category />
  <Collection />
  <Benefit />
  <Team />
</template>

<script>
import Hero from "./views/Hero.vue";
import Partner from "./views/Partner.vue";
import About from "./views/About.vue";
import Category from "./views/Category.vue";
import Collection from "./views/Collection.vue";
import Benefit from "./views/Benefit.vue";
import Team from "./views/Team.vue";
export default {
  components: { Hero, Partner, About, Category, Collection, Benefit, Team },
};
</script>

<style></style>
