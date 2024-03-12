<script setup lang="ts">
import { ref, computed } from 'vue';

const images = ref([
  { src: '/src/img/projet/refontemmi.webp', title: 'MMI redesign site', description: 'Project to redesign the Montbeliard MMI training website.' },
  { src: '/src/img/projet/benevers.webp', title: 'Benevers', description: 'Project on the world of volunteering' },
  { src: '/src/img/projet/backtoback.webp', title: 'Back To Back', description: 'Project inspired by the song "Note pour trop tard" by Orelsan' },
  { src: '/src/img/projet/gaspardtex.webp', title: 'GaspardTex', description: 'Social networking content creation project' }
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
        <div class="mx-12 mt-5">
            <h2 class="text-lg font-bold">{{ currentImage.title }}</h2>
            <p class="text-sm">{{ currentImage.description }}</p>
        </div>
      </div>
      <div class="controls mt-16 justify-between space-x-28 text-center">
        <button @click="prev" class="text-black opacity-50 hover:text-red-700 hover:opacity-100 font-bold py-2 px-4"><</button>
        <button @click="next" class="text-black opacity-50 hover:text-red-700 hover:opacity-100 font-bold py-2 px-4">></button>
      </div>
    </div>
  </template>