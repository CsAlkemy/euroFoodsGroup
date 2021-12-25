<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 py-24">
      <div
        v-for="img in imgs"
        :key="img.id"
        :class="img.class"
        class="cursor-pointer rounded-xl"
      >
        <img
          @click="showMultiple(img.id)"
          class="object-cover h-96 max-h-96 w-full rounded-xl"
          :src="img.src"
          :alt="img.title"
        />
      </div>
    </div>
    <vue-easy-lightbox
      scrollDisabled
      escDisabled
      moveDisabled
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    >
    </vue-easy-lightbox>
  </div>
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";
const imgSrc = [
  {
    id: 0,
    title: "Title",
    src: require("@/assets/images/gallery/one.jpg"),
  },
  {
    id: 1,
    title: " Title",
    src: require("@/assets/images/gallery/two.jpg"),
  },
  {
    id: 2,
    title: "Title",
    src: require("@/assets/images/gallery/three.png"),
  },
  {
    id: 3,
    title: " Title",
    src: require("@/assets/images/gallery/four.jpg"),
    class: "col-span-1 md:col-span-2",
  },
  {
    id: 4,
    title: "Title",
    src: require("@/assets/images/gallery/five.jpg"),
  },
  {
    id: 5,
    title: "Title",
    src: require("@/assets/images/gallery/six.jpg"),
  },
  {
    id: 6,
    title: "Title",
    src: require("@/assets/images/gallery/seven.png"),
    class: "col-span-1 md:col-span-2",
  },
];
export default {
  components: {
    VueEasyLightbox,
  },
  data() {
    return {
      imgs: imgSrc,
      visible: false,
      loop: true,
      index: 0,
    };
  },
  methods: {
    showMultiple(index) {
      console.log(index);
      this.imgs = imgSrc;
      this.index = index;
      this.show();
    },
    show() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
};
</script>
