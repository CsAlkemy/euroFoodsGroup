<template>
  <div class="py-7 sm:py-7">
    <div class="pt-14 text-black max-w-7xl mx-auto px-4 sm:px-6 ">
      <h1 class="text-4xl font-extrabold mb-6">Our Brands</h1>
    </div>
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 bg-white my-8 sm:my-11 py-3 sm:py-8 rounded-xl overflow-hidden gap-x-2 "
    >
      <div class="grid grid-cols-3 sm:grid-cols-6 items-center">
        <img :src="Zoy" alt="Brands" class="object-scale-down" />
        <img :src="Crown" alt="Brands" class="object-scale-down" />
        <img :src="CrownTwo" alt="Brands" class="object-scale-down" />
        <img :src="Masala" alt="Brands" class="object-scale-down" />
        <img :src="Rohim" alt="Brands" class="object-scale-down" />
        <img :src="Kukd" alt="Brands" class="object-scale-down" />
      </div>
    </div>
  </div>
</template>

<script>
import Zoy from "../../assets/images/zoy.png";
import Crown from "../../assets/images/crown.png";
import CrownTwo from "../../assets/images/crown2.png";
import Masala from "../../assets/images/masala.png";
import Rohim from "../../assets/images/rohim.png";
import Kukd from "../../assets/images/kukd.png";
export default {
  name: "Hero",
  setup() {
    return {
      Zoy,
      Crown,
      CrownTwo,
      Masala,
      Rohim,
      Kukd,
    };
  },
  props: {
    data: {
      HeroData: Object,
    },
  },
};
</script>
<style></style>
