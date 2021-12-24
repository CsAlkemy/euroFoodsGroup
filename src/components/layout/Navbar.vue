<template>
  <Popover class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="flex justify-between items-center py-4 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/">
            <span class="sr-only">Workflow</span>
            <img
              class="h-12 rounded-xl w-auto sm:h-14 text-green-500"
              :src="Image"
              alt="logo"
            />
          </router-link>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <router-link
            v-for="item in navItems"
            :key="item.name"
            :to="item.href"
            exact
            exact-active-class="text-green-500"
            class="text-base font-medium text-gray-500"
            >{{ item.name }}</router-link
          >
        </PopoverGroup>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <router-link
            to="supply"
            exact
            exact-active-class="bg-purple-500"
            class="bg-green-500 hover:shadow-lg hover:bg-gray-900  text-white ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium"
          >
            Supply Us
          </router-link>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        v-slot="{ close }"
        focus
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div
          class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <router-link to="/">
                  <img
                    class="h-12 w-auto"
                    :src="Image"
                    @click="accept(close)"
                    alt="Workflow"
                  />
                </router-link>
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <router-link
                  @click="accept(close)"
                  v-for="item in navItems"
                  :key="item.name"
                  :to="item.href"
                  exact
                  exact-active-class="bg-gray-50"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <component
                    :is="item.icon"
                    class="flex-shrink-0 h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {{ item.name }}
                  </span>
                </router-link>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div>
              <router-link
                @click="accept(close)"
                to="supply"
                exact
                exact-active-class="bg-black"
                class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-500 hover:bg-purple-500"
              >
                Supply Us
              </router-link>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import Image from "@/assets/images/logoEFG.png";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  HomeIcon,
  PhotographIcon,
  DeviceMobileIcon,
  MenuIcon,
  XIcon,
  OfficeBuildingIcon,
  ShoppingBagIcon,
} from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "About Us",
    href: "about",
    icon: OfficeBuildingIcon,
  },
  {
    name: "Products",
    href: "products",
    icon: ShoppingBagIcon,
  },
  {
    name: "Gallery",
    href: "gallery",
    icon: PhotographIcon,
  },
  {
    name: "Contact",
    href: "contacts",
    icon: DeviceMobileIcon,
  },
];

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
  },

  setup() {
    return {
      navItems,
      Image,
      accept: async (close) => {
        close();
      },
    };
  },
  methods: {
    closeNavMobile() {
      this.$emit("closeNav");
    },
  },
};
</script>
