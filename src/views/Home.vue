<template>
  <div>
    <Hero />
    <WorkCard />
    <History />
    <Quality />
    <Cta />
    <Brands />
    <!-- <FeaturCard />-->
    <!--<Banner /> -->
    <Service :data="PricingTitleData[0]" :packages="priceDataOne" />
    <Contact />
    <Feedback />
    <NewsLetter />
  </div>
</template>

<script>
import Hero from "@/components/Home/Hero.vue";
import WorkCard from "@/components/common/VhiclTypeCard.vue";
import Service from "@/components/common/PricingParent.vue";
import Cta from "@/components/common/Cta.vue";
import Feedback from "@/components/common/TestimonialCard.vue";
import NewsLetter from "@/components/common/NewsLetter.vue";
import Banner from "@/components/Home/Banner.vue";
import History from "@/components/common/History.vue";
import Quality from "@/components/common/Quality.vue";
import Brands from "@/components/common/Brands.vue";
import Contact from "@/components/common/ContactForm.vue";
// Data Section
const PricingTitleData = [
  {
    title: "Our Products",
    class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  },
];

const priceDataOne = [
  {
    title: "Meat & Poultry",
    img: require("@/assets/images/meat.png"),
    link: "",
    includes: [
      { inc: "Chicken Breast Fillet", id: 1 },
      { inc: "Chicken Breast Fillet", id: 2 },
      { inc: "Chicken Breast Fillet", id: 3 },
      { inc: "Chicken Breast Fillet", id: 4 },
    ],
    isPopular: false,
  },
  {
    title: "Fish & Seafood",
    img: require("@/assets/images/fish.png"),
    link: "",
    includes: [
      { inc: "Item name one", id: 1 },
      { inc: "Item name two", id: 2 },
      { inc: "Item name thre", id: 3 },
      { inc: "Item name four", id: 4 },
    ],
    isPopular: false,
  },
  {
    title: "Dairy Products",
    img: require("@/assets/images/dairy.png"),
    link: "",
    includes: [
      { inc: "Item name one", id: 1 },
      { inc: "Item name two", id: 2 },
      { inc: "Item name thre", id: 3 },
      { inc: "Item name four", id: 4 },
    ],
    isPopular: false,
  },
  {
    title: "Fruit & Vegetables",
    img: require("@/assets/images/fruit.png"),
    link: "",
    includes: [
      { inc: "Item name one", id: 1 },
      { inc: "Item name two", id: 2 },
      { inc: "Item name thre", id: 3 },
      { inc: "Item name four", id: 4 },
    ],
    isPopular: false,
  },
  {
    title: "Herbs & Spices",
    img: require("@/assets/images/herbs.png"),
    link: "",
    includes: [
      { inc: "Item name one", id: 1 },
      { inc: "Item name two", id: 2 },
      { inc: "Item name thre", id: 3 },
      { inc: "Item name four", id: 4 },
    ],
    isPopular: true,
    bg: "bg-gray-900 text-white",
  },
  {
    title: "Oil, Fat & Ghee",
    img: require("@/assets/images/honey.png"),
    link: "",
    includes: [
      { inc: "Item name one", id: 1 },
      { inc: "Item name two", id: 2 },
      { inc: "Item name thre", id: 3 },
      { inc: "Item name four", id: 4 },
    ],
    isPopular: false,
  },
  {
    title: "Drinks",
    img: require("@/assets/images/drinks.png"),
    link: "",
    includes: [
      { inc: "Item name one", id: 1 },
      { inc: "Item name two", id: 2 },
      { inc: "Item name thre", id: 3 },
      { inc: "Item name four", id: 4 },
    ],
    isPopular: false,
  },
  {
    title: "Packaging",
    img: require("@/assets/images/package.png"),
    link: "",
    includes: [
      { inc: "Item name one", id: 1 },
      { inc: "Item name two", id: 2 },
      { inc: "Item name thre", id: 3 },
      { inc: "Item name four", id: 4 },
    ],
    isPopular: false,
  },
];

export default {
  name: "Home",
  components: {
    Hero,
    WorkCard,
    Service,
    Cta,
    Feedback,
    NewsLetter,
    Banner,
    History,
    Quality,
    Brands,
    Contact,
  },

  data() {
    return {
      priceDataOne,
      PricingTitleData,
    };
  },
};
</script>

<style scoped></style>
