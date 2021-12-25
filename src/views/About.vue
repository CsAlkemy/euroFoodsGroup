<template>
  <div>
    <Story />
    <Team />
    <Brands />
    <Cta />
    <Testimonial />
    <News />
  </div>
</template>
<script>
import Story from "@/components/common/Story.vue";
import Testimonial from "@/components/common/TestimonialCard.vue";
import Brands from "@/components/common/Brands.vue";
import Cta from "@/components/common/Cta.vue";
import News from "@/components/common/NewsLetter.vue";
import Team from "@/components/common/Team.vue";

export default {
  name: "About Us",
  components: {
    Story,
    Team,
    Testimonial,
    Brands,
    Cta,
    News,
  },
};
</script>
<style lang=""></style>
