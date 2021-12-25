<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 my-20">
    <div class="grid grid-cols-1  lg:grid-cols-3  rounded-2xl bg-white">
      <div
        class=" grid grid-rows-1 bg-gray-900 bg-littleDot bg-no-repeat bg-right-bottom bg-blend-lighten rounded-2xl m-0 md:m-2 mr-0 p-5 text-white"
      >
        <h1 class="text-5xl font-bold tracking-tighter">Contact Us</h1>
        <p class="text-base font-medium tracking-wider text-justify my-10">
          Don't Want to fillup forms ? <br />
          Just give us a call! We will handle the rest.
        </p>
        <div class=" mb-40 ">
          <div class="flex gap-x-3 mb-7">
            <PhoneIcon class="h-7 w-7" />
            <a class="text-xl font-medium" href="tel:+441633636000"
              >+441633636000</a
            >
          </div>

          <div class="flex gap-x-3 mb-7">
            <MailOpenIcon class="h-7 w-7" />
            <a class="text-xl font-medium" href="mailto:info@efg.com"
              >Info@efg.com</a
            >
          </div>

          <div class="flex gap-x-3 mb-7">
            <LocationMarkerIcon class="h-7 w-7" />
            <a class="text-xl font-medium" href="#">
              Llantarnam Park Way Cwmbran Torfaen NP44 3GA</a
            >
          </div>
        </div>
      </div>

      <div class="col-span-2 mx-0 md:mx-10 lg:mx-24">
        <div class="my-10 p-5">
          <form action="">
            <div class="mb-4">
              <label class="block mb-2" for="name">
                Your Name
              </label>
              <input
                class=" w-full p-2 border-2 border-green-500 rounded-md"
                id="name"
                type="text"
                placeholder="Jhone Doe"
              />
            </div>
            <div class="mb-4">
              <label class="block mb-2" for="email">
                Email <span class="text-red-500">*</span>
              </label>
              <input
                class=" w-full p-2 border-2 border-green-500 rounded-md"
                id="email"
                type="email"
                required
                placeholder="jhone.doe@gmail.com"
              />
            </div>
            <div class="mb-4">
              <label class="block mb-2" for="service">
                Food Inquery
              </label>
              <input
                class=" w-full p-2 border-2 border-green-500 rounded-md"
                id="service"
                type="service"
                placeholder="Sea Food"
              />
            </div>
            <div class="mb-4">
              <label class="block mb-2" for="message">
                Message
              </label>
              <textarea
                class=" w-full p-2 border-2 border-green-500 rounded-md"
                id="message"
                type="message"
                placeholder="Message.."
                rows="5"
              />
            </div>
            <div class="mb-4">
              <button
                type="submit"
                class="p-2 px-10 bg-green-500 text-white text-lg font-semibold hover:bg-purple-500 "
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  PhoneIcon,
  LocationMarkerIcon,
  MailOpenIcon,
} from "@heroicons/vue/outline";
export default {
  name: "Form",
  components: {
    PhoneIcon,
    LocationMarkerIcon,
    MailOpenIcon,
  },
  data() {
    return {
      Img: require("@/assets/images/contact.png"),
    };
  },
};
</script>
<style lang=""></style>
