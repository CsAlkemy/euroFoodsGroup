<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="pt-14 text-black ">
      <h1 class="text-4xl font-extrabold mb-6">Our Feature Category</h1>
    </div>
    <div class="py-10">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-0 md:gap-x-2 gap-y-5 sm:gap-y-3 lg:gap-x-5"
      >
        <div
          v-for="data in cardData"
          :key="data.name"
          :class="data.color"
          class="bg-white rounded-xl justify-center px-6 py-9 shadow-lg w-full sm:max-w-xs cursor-pointer transform-none md:transform duration-500 hover:-translate-y-1"
        >
          <h1 :class="data.text" class="text-xl text-gray-400">
            {{ data.name }}
          </h1>
          <div :class="data.text" class="flex">
            <h1 class="text-3xl  font-bold">{{ data.Amounts }}</h1>
          </div>
          <img
            :src="data.Img"
            alt="car"
            class="object-contain h-28 w-28 mb-9 mx-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Meat from "../../assets/images/cat-meat.png";
import Veg from "../../assets/images/cat-veg.png";
import Fish from "../../assets/images/cat-fish.png";
import Drink from "../../assets/images/cat-drink.png";

import { ChevronRightIcon } from "@heroicons/vue/outline";
const cardData = [
  {
    name: "Fish &",
    Amounts: "SeaFoods",
    Img: Fish,
    color: "bg-white",
    text: "text-black",
  },
  {
    name: "Water &",
    Amounts: "Soft Drinks",
    Img: Drink,
    color: "bg-gray-900 place-self-center",
    text: "text-white",
  },
  {
    name: "Fruit &",
    Amounts: "Vegetables",
    Img: Veg,
    color: "bg-white place-self-end",
    text: "text-black",
  },
  {
    name: "Meat &",
    Amounts: "Poultry",
    Img: Meat,
    color: "bg-gray-900 place-self-center ",
    text: "text-white",
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
