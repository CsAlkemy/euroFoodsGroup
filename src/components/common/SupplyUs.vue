<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 bg-white">
    <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
          >
            Supply Us
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            eveniet molestias rerum doloremque accusantium iure!
          </p>
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-600"
                  >Name</label
                >
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-600"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="phone" class="leading-7 text-sm text-gray-600"
                  >Phone</label
                >
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="subject" class="leading-7 text-sm text-gray-600"
                  >Subject</label
                >
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="message" class="leading-7 text-sm text-gray-600"
                  >Message</label
                >
                <textarea
                  id="message"
                  name="message"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <button
                class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Button
              </button>
            </div>
            <div
              class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"
            >
              <a class="text-indigo-500">info@efg.com</a>
              <p class="leading-normal my-5">
                Lorem ipsum dolor sit amet. <br />
                Lorem ipsum dolor sit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
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
