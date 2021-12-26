<template>
  <div class="bg-green-500 fixed bottom-0 w-full">
    <div class="flex justify-around mx-auto text-white p-3">
      <a
        href="https://maps.google.com/maps/dir//Executive+Wash+%26+Detail+12351+NW+18th+St+Pembroke+Pines,+FL+33026+United+States/@26.0240441,-80.3117539,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x88d9a65d6a4ccd19:0x2544fec230b22d83"
        class="p-4 rounded-full  hover:bg-green-200 hover:text-gray-900 "
        target="_blank"
        ><PaperAirplaneIcon class="h-8 w-8" />
      </a>
      <a
        href="tel:(954) 534-9323"
        class="p-4 rounded-full  hover:bg-green-200 hover:text-gray-900 "
        ><PhoneIcon class="h-8 w-8"
      /></a>

      <a
        href="mailto:info@efg.com"
        class="p-4 rounded-full  hover:bg-green-200 hover:text-gray-900 "
        ><MailIcon class="h-8 w-8"
      /></a>
    </div>
  </div>
</template>

<script>
import {
  PhoneIcon,
  LocationMarkerIcon,
  MailIcon,
  PaperAirplaneIcon,
} from "@heroicons/vue/outline";

export default {
  components: {
    PhoneIcon,
    LocationMarkerIcon,
    MailIcon,
    PaperAirplaneIcon,
  },
  setup() {},
};
</script>
