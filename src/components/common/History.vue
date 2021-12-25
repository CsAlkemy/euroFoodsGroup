<template>
  <div class="py-10">
    <div class="bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 my-12">
        <div class="pt-14 pb-5 text-white ">
          <h1 class="text-2xl font-medium tracking-tight">
            A Proud History of
          </h1>
          <h1 class="text-4xl font-extrabold mb-5">Service and Quality</h1>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-12">
          <div>
            <div
              class="py-10 px-5 text-justify bg-gray-800 text-gray-50 rounded-lg mb-5"
            >
              Euro Foods Group is a leading international manufacturer and
              distributor of frozen and fresh foods, serving the restaurant,
              catering and specialist supermarket sectors.
            </div>
            <div
              class="py-10 px-5 text-justify bg-gray-500 text-white rounded-lg mb-14"
            >
              Established in 1991, the company began the journey by supplying
              the Indian restaurants and takeaways in Wales and the West
              Country. With hard work and determination the business then
              developed rapidly, and the supply chain became national.
            </div>
          </div>
          <div class="justify-self-end mb-3">
            <img
              :src="HistoryBanner"
              alt="history banner"
              class="img-fluid max-w-full max-h-96 h-80  object-scale-down rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HistoryBanner from "../../assets/images/histotyBanner.jpg";
export default {
  name: "History",
  components: {},
  data() {
    return {
      HistoryBanner,
    };
  },
};
</script>
<style></style>
