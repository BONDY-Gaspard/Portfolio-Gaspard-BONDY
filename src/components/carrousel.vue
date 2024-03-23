<script setup lang="ts">
import { ref, computed } from 'vue';

const images = ref([
  { src: '/refontemmi.webp', title: 'MMI redesign site', description: 'Project to redesign the Montbeliard MMI', projectName: 'mmi-redesign' },
  { src: '/benevers.webp', title: 'Benevers', description: 'Project on the world of volunteering', projectName: 'benevers' },
  { src: '/backtoback.webp', title: 'Back To Back', description: 'Project inspired by the song "Note pour trop tard" by Orelsan', projectName: 'back-to-back' },
  { src: '/gaspardtex.webp', title: 'GaspardTex', description: 'Social networking content creation project', projectName: 'gaspardtex' }
]);

const currentIndex = ref(0);

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
};

const currentImage = computed(() => images.value[currentIndex.value]);

</script>


<template>
    <div>
      <div class="carousel">
        <img :src="currentImage.src" alt="Image carrousel" class="m-auto">
        <div class="mx-12 mt-5 md:mx-0 md:ml-[821px]">
            <h2 class="text-xl font-bold font-rubik">{{ currentImage.title }}</h2>
            <p class="text-base font-rubik">{{ currentImage.description }}</p>
            <router-link :to="{ name: 'projectpage', params: { projectId: currentImage.projectName, projectName: currentImage.projectName } }" class="text-blue-500 hover:underline">En savoir plus</router-link>
        </div>
      </div>
      <div class="mt-16 justify-between space-x-28 text-center md:mt-40">
        <button @click="prev" class="text-black opacity-50 hover:text-red-700 hover:opacity-100 font-bold py-2 px-4"><</button>
        <button @click="next" class="text-black opacity-50 hover:text-red-700 hover:opacity-100 font-bold py-2 px-4">></button>
      </div>
    </div>
  </template>