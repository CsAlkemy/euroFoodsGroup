<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-14 my-12">
    <div class="text-black my-12">
      <h1 class="text-2xl font-medium tracking-tight">
        Our Customer
      </h1>
      <h1 class="text-4xl font-extrabold mb-12">Reviews</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div
          v-for="item in data"
          :key="item.id"
          :class="item.color"
          class=" grid grid-row justify-evenly gap-10 p-4 bg-white rounded-md shadow-lg"
        >
          <p class="text-justify text-base font-light">
            {{ item.text }}
          </p>
          <div class="flex gap-4">
            <img
              :src="item.img"
              alt="small icon"
              class="h-10 w-10 rounded-full object-cover my-auto"
            />
            <div class="my-auto">
              <h3 class="text-base font-medium">{{ item.name }}</h3>
              <p class="text-sm text-gray-700 capitalize font-normal">
                {{ item.type }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const data = [
  {
    id: 2,
    text:
      "I am from Wailes and this is the best Frozen Food Provider from north to south. Guys pay full attention to all the details. Price is reasonable as well.",
    name: "Alex S Ali ",
    type: "Customer",
    img: require("../../assets/images/user2.png"),
  },
  {
    id: 3,
    text:
      "I am from Wailes and this is the best Frozen Food Provider from north to south. Guys pay full attention to all the details. Price is reasonable as well.",
    name: "Ryan Yocum ",
    type: "Customer",
    img: require("../../assets/images/user1.png"),
    color: "bg-gray-900 text-white",
  },
  {
    id: 4,
    text:
      "I am from Wailes and this is the best Frozen Food Provider from north to south. Guys pay full attention to all the details. Price is reasonable as well.",
    name: "George Law ",
    type: "Customer",
    img: require("../../assets/images/user3.png"),
  },
];

export default {
  name: "Testimonial Card",

  data() {
    return {
      data,
    };
  },
};
</script>
<style></style>
