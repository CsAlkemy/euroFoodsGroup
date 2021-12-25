<template>
  <div class="bg-white py-7 sm:py-7">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 bg-green-50 my-8 sm:my-11 py-5 sm:py-8 rounded-md overflow-hidden "
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
        <div class="col-span-2">
          <main class="my-10 mx-auto max-w-7xl px-4 sm:mt-7 sm:px-6 lg:px-8">
            <div class="sm:text-center lg:text-left">
              <h1
                class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl leading-relaxed"
              >
                <span class="block xl:inline capitalize"
                  >Ensuring the Highest</span
                >
                {{ " " }}
                <span class="block text-green-500 xl:inline capitalize mt-2"
                  >Quality.</span
                >
              </h1>
              <p
                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Wholesale suppliers to the catering industry, restaurants and
                specialist supermarkets.
              </p>
              <div
                class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <div class="rounded-md shadow">
                  <a
                    href="#"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-sm text-white bg-green-500 hover:bg-gray-900 md:py-3 md:text-lg md:px-6"
                  >
                    Order Online
                  </a>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-sm text-white bg-gray-900 hover:bg-green-500 hover:text-white md:py-3 md:text-lg md:px-6"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div>
          <img
            :src="ImageHero"
            alt="HeroImage"
            class="img-fluid object-cover my-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageHero from "../../assets/images/heroImage.png";
export default {
  name: "Hero",
  setup() {
    return {
      ImageHero,
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
