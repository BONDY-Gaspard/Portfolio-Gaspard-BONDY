<script setup lang="ts">
import presentation from '@/components/presentation.vue';
import parcours from '@/components/parcours.vue';

import { ref, computed } from 'vue';

const currentIndex = ref(0);
const components = [presentation, parcours];

const currentComponent = computed(() => components[currentIndex.value]);

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + components.length) % components.length;
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % components.length;
};

</script>

<template>
    <Header />
    <h1 class="text-black text-2xl font-bold font-rubik m-5 md:hidden">About me</h1>
      <component :is="currentComponent" :key="currentIndex" />
    <div class="my-16 justify-between space-x-28 text-center md:pb-16 md:mt-40">
      <button @click="prevSlide" class="text-black opacity-50 hover:text-red-700 hover:opacity-100 font-bold py-2 px-4"><</button>
      <button @click="nextSlide" class="text-black opacity-50 hover:text-red-700 hover:opacity-100 font-bold py-2 px-4">></button>
    </div>
    <Footer />
  </template>
  