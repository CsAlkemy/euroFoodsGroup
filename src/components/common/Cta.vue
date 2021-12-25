<template>
  <div class="bg-gray-900  mt-11 text-white">
    <div class=" bg-blend-multiply bg-no-repeat bg-bigCar bg-right pt-20 pb-10">
      <div class="clear-right"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4 mt-0 lg:mt-11"
        >
          <div
            class="flex-row place-items-start bg-gray-500 opacity-95 rounded-md lg:rounded-none lg:bg-gray-900 p-3 pb-11 sm:pb-0"
          >
            <h1
              class="text-4xl uppercase font-bold text-white tracking-normal lg:tracking-widest mb-5"
            >
              Looking to be <br />
              a supplier <br />
              of EFG?
            </h1>
            <router-link
              to="supply"
              class="p-3 px-7 text-lg font-semibold bg-white hover:bg-green-500 mt-5 text-black hover:text-white rounded-sm shadow-lg"
              >Supply Us</router-link
            >
          </div>
          <div
            class="grid grid-rows-3 place-items-start bg-black rounded-md lg:rounded-none opacity-95 lg:bg-gray-900 p-3  mb-10 gap-y-0 md:gap-y-4"
          >
            <div class="inline-flex gap-x-4">
              <ClockIcon class="h-9 w-9" />
              <div>
                <h1 class="text-xl font-semibold uppercase">We are open</h1>
                <p class="text-base font-normal">
                  24/7
                </p>
              </div>
            </div>
            <a
              href="tel:441633636000"
              class="inline-flex gap-x-4 hover:text-green-500"
            >
              <PhoneIcon class="h-9 w-9" />
              <div>
                <h1 class="text-xl font-semibold uppercase">Call Us</h1>
                <a href="tel:441633636000" class="text-base font-normal">
                  +441633636000
                </a>
              </div>
            </a>
            <div class="inline-flex gap-x-4">
              <MapIcon class="h-9 w-9" />
              <div>
                <h1 class="text-xl font-semibold uppercase">We are here</h1>
                <p class="text-base font-normal">
                  Llantarnam Park Way Cwmbran Torfaen NP44 3GA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bike from "../../assets/images/foodbike.png";
import { ClockIcon, MapIcon, PhoneIcon } from "@heroicons/vue/solid";

export default {
  name: "Cta",
  components: {
    ClockIcon,
    MapIcon,
    PhoneIcon,
  },
  date() {
    return {
      Bike,
    };
  },
  props: {
    img: {
      type: String,
      default: Bike,
    },
  },
};
</script>
<style></style>
