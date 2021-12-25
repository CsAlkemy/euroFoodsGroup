<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 py-6">
    <div class="mt-16 mb-12">
      <h1 class="text-5xl font-extrabold mb-12 ">Our Story</h1>
    </div>
    <div
      class="grid justify-items-end grid-cols-1 md:grid-cols-3 gap-y-2 mb-10"
    >
      <div class="col-span-2">
        <div class="grid grid-rows-1 gap-y-2">
          <div
            v-for="item in storyData"
            :key="item.name"
            :class="item.class"
            class="bg-white py-14 px-4 rounded-2xl"
          >
            <p class="text-lg font-light text-justify">{{ item.name }}</p>
          </div>
        </div>
      </div>
      <div class=" col-span-1  hidden md:contents">
        <img
          class=" object-cover h-full w-80 rounded-2xl"
          :src="Img"
          alt="Company Data"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Img from "@/assets/images/bannerStory.png";
const storyData = [
  {
    class: "bg-green-50 font-semibold",
    name:
      "With an initial investment of £20, Euro Foods Group founder, Shelim Hussain MBE began his adventure into the frozen foods industry.",
  },
  {
    class: "bg-white font-semibold",
    name:
      "Established in 1991, the company began the journey by supplying the Indian restaurants and takeaways in Wales and the West Country. With hard work and determination the business then developed rapidly, and the supply chain became national.",
  },
  {
    class: "bg-white font-semibold",
    name:
      "The story has many successful chapters, Euro Foods started with frozen, fresh and ambient food distribution – as demand grew, Euro Foods progressed their services into manufacturing and established",
  },
];

export default {
  name: "Story",
  data() {
    return {
      storyData,
      Img,
    };
  },
};
</script>
<style></style>
