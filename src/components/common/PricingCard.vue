<template>
  <div :class="Gridclass" class=" gap-7  mb-14">
    <div
      v-for="item in data"
      :key="item.title"
      :class="item.bg"
      class="grid grid-rows-3 bg-white hover:bg-gray-900 hover:text-white cursor-pointer transform-none md:transform duration-300 hover:-translate-y-1 rounded-md shadow-lg"
    >
      <div class="row-span-1">
        <img
          :src="item.img"
          alt="card banner"
          class="object-cover h-40 max-h-40 w-full rounded-t-md"
        />
      </div>
      <div class="row-span-2 p-3">
        <div class="flex my-3 justify-between">
          <h1 class="text-lg tracking-tight font-semibold ">
            {{ item.title }}
          </h1>
          <div v-if="item.isPopular">
            <p class="place-self-end bg-green-600 text-white px-4 rounded-2xl">
              Popular
            </p>
          </div>
        </div>
        <div class="flex my-4"></div>
        <h3 class="text-gray-500 text-base font-medium mb-4">Items Name</h3>
        <ul>
          <li>
            <p v-for="include in item.includes" :key="include.id" class="">
              <CheckCircleIcon
                class="inline-flex mr-2 h-5 w-5 my-auto text-green-400"
              /><span> {{ include.inc }}</span>
            </p>
          </li>
          <li></li>
        </ul>
      </div>
      <router-link
        to="#"
        class=" p-2 bg-green-500 hover:bg-purple-500 text-white place-items-center mb-3 mx-5 text-center rounded-md"
      >
        Buy Now
      </router-link>
    </div>
  </div>
</template>

<script>
import { CheckCircleIcon } from "@heroicons/vue/outline";
export default {
  name: "Price Card",
  props: {
    data: {
      cardData: Object,
    },
    Gridclass: {
      Gridclass: String,
    },
    img: {
      type: String,
      default: require("../../assets/images/vip.jpg"),
    },
  },
  components: {
    CheckCircleIcon,
  },
};
</script>
<style></style>
