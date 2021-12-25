<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<style lang="scss"></style>
<script>
import ContactFooter from "@/components/layout/ContactFooter.vue";
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
export default {
  components: { ContactFooter, Navbar, Footer },
};
</script>
