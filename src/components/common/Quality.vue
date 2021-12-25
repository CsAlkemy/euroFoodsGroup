<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="text-black ">
      <h1 class="text-4xl font-extrabold mb-6">We Belive In</h1>
    </div>
    <div class="py-10">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-0 md:gap-x-2 gap-y-3 sm:gap-y-2 lg:gap-x-5"
      >
        <div
          v-for="data in cardData"
          :key="data.name"
          class="bg-white hover:bg-green-100 rounded-2xl justify-center px-6 py-9 hover:shadow-lg w-full sm:max-w-xs cursor-pointer transform-none md:transform duration-500 hover:-translate-y-1"
        >
          <img
            :src="data.Img"
            alt="car"
            class="object-contain h-28 w-28 mb-9 mx-auto"
          />
          <h1 class="text-3xl text-center font-bold my-5">
            {{ data.name }}
          </h1>
          <p class="text-center font-medium text-base mb-3">
            {{ data.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Meat from "../../assets/images/Reliability.png";
import Veg from "../../assets/images/Commitment.png";
import Fish from "../../assets/images/quality.png";
import Drink from "../../assets/images/innovation.png";

import { ChevronRightIcon } from "@heroicons/vue/outline";
const cardData = [
  {
    name: "Quality",
    description:
      "As the UK’s largest supplier of the Asian food market, we have a passion for the delivery of high quality produce.",
    Img: Fish,
  },
  {
    name: "Innovation",
    description:
      "We lead the industry with innovation in products and services to ensure ongoing, loyal customer relationships .",
    Img: Drink,
  },
  {
    name: "Commitment",
    description:
      "We promise to fulfil our customer’s needs and engage with their views to help improve our services for everyone.",
    Img: Veg,
  },
  {
    name: "Reliability",
    description:
      "We work in an honest and trustworthy manner to gain and maintain the respect of our customers.",
    Img: Meat,
  },
];
export default {
  name: "WorkTypeCard",
  components: {
    ChevronRightIcon,
  },
  data() {
    return {
      cardData,
    };
  },
};
</script>
<style></style>
