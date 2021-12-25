<template>
  <div class="bg-white py-8 ">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        :class="data.bgImage"
        class="my-8 sm:my-11 py-24 sm:py-28 text-white rounded-2xl overflow-hidden bg-gray-900"
      >
        <div class="flex h-full items-center justify-center">
          <div>
            <h1
              class="text-5xl md:text-6xl  uppercase tracking-tight text-center font-semibold"
            >
              {{ data.titleOne }}
            </h1>
            <h1
              class="text-5xl md:text-6xl  uppercase tracking-tight text-center font-semibold mt-0 md:mt-5"
            >
              {{ data.titleTwo[0] }}
              <span class="text-green-300">{{ data.titleTwo[1] }}</span>
            </h1>
            <p
              class="text-xl font-normal tracking-wider text-center mt-9 capitalize px-3 md:px-24 lg:px-48"
            >
              {{ data.subtitle }}
            </p>
            <div class="flex gap-4 justify-center mt-9">
              <router-link
                class="p-2 px-4 py-2 text-base font-semibold hover:bg-purple-500 bg-green-500  rounded-md"
                to="#"
                >Call Us</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    data: {
      HeroData: Object,
    },
  },
};
</script>
<style></style>
