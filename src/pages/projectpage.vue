<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const projectName = route.params.projectName;

const projects = [
  { 
    name: 'mmi-redesign',
    title: 'MMI redesign site',
    thumbnail: '/src/img/projet/refontemmi.webp',
    description: "The redesign of the MMI site is a group effort. Our aim was to completely overhaul the MMI Montbéliard training course website. The aim was to recreate the graphic and technical aspects of the site to make it more up to date, but also to renew its content, some subjects of which are no longer topical today. We needed to breathe new life into the MMI site to encourage more future students to opt for MMI training, whether they're continuing their studies or looking for a career change...",
    images: [
      '/src/img/projet/redesign-mmi/createurs.png',
      '/src/img/projet/redesign-mmi/elementgraphique.webp',
      '/src/img/projet/redesign-mmi/couleur.png',
      '/src/img/projet/redesign-mmi/typographie.png',
      '/src/img/projet/redesign-mmi/images.png',
      '/src/img/projet/redesign-mmi/siteweb.webp',
      '/src/img/projet/redesign-mmi/pageaccueil.webp',
      '/src/img/projet/redesign-mmi/accueilmobile.webp',
      '/src/img/projet/redesign-mmi/pagecontenu.webp',
      '/src/img/projet/redesign-mmi/page404.webp',
      '/src/img/projet/redesign-mmi/pagecontenumobile.webp',
    ],
  },
  // Autres projets
];

const project = projects.find(p => p.name === projectName);
</script>


<template>
    <Header />
    <div class="pb-10">
      <h1 class="text-black text-2xl font-bold font-rubik m-5">{{ project.title }}</h1>
      <img :src="project.thumbnail" alt="Miniature du projet" class="m-auto">
      <p class="text-base font-rubik mx-6 mt-10">{{ project.description }}</p>
      <div v-for="image in project.images" :key="image" class="mt-12">
        <img :src="image" alt="Image du projet">
      </div>
    </div>
    <Footer />
  </template>
  