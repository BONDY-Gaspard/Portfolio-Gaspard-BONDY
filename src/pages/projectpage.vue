<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const projectName = route.params.projectName;

const projects = [
  { 
    name: 'mmi-redesign',
    title: 'MMI redesign site',
    thumbnail: '/refontemmi.webp',
    description: "The redesign of the MMI site is a group effort. Our aim was to completely overhaul the MMI Montbéliard training course website. The aim was to recreate the graphic and technical aspects of the site to make it more up to date, but also to renew its content, some subjects of which are no longer topical today. We needed to breathe new life into the MMI site to encourage more future students to opt for MMI training, whether they're continuing their studies or looking for a career change...",
    images: [
      '/mmi-createurs.png',
      '/mmi-elementgraphique.webp',
      '/mmi-couleur.png',
      '/mmi-typographie.png',
      '/mmi-images.png',
      '/mmi-siteweb.webp',
      '/mmi-pageaccueil.webp',
      '/mmi-accueilmobile.webp',
      '/mmi-pagecontenu.webp',
      '/mmi-page404.webp',
      '/mmi-pagecontenumobile.webp',
    ],
  },
  { 
    name: 'benevers',
    title: 'Benevers',
    thumbnail: '/benevers.webp',
    description: "Our project aimed to create an online platform dedicated to volunteers and associations, with the goal of promoting volunteering and facilitating collaboration between the two parties. We embarked on a collective effort to revitalize the landscape of volunteering and associative engagement. Our objective was to envision a platform, focusing on both its aesthetics and functionality, while ensuring that its content addressed the current needs of the volunteer and associative community.",
    images: [
      '/benevers-introduction.png',
      '/benevers-presentation.webp',
      '/benevers-createurs.png',
      '/benevers-elements-graphique.webp',
      '/benevers-couleurs.png',
      '/benevers-mock-up.png',
      '/benevers-siteweb.webp',
      '/benevers-page-accueil.webp',
      '/benevers-page-accueil-mobile.png',
      '/benevers-contenu-projet.webp',
      '/benevers-contenu.webp',
      '/benevers-missions.webp',
      '/benevers-interaction-communautaire.webp',
      '/benevers-reseaux-sociaux.png',
      '/benevers-call-to-action.webp',
    ],
  },
  { 
    name: 'back-to-back',
    title: 'Back-To-Back (mobile)',
    thumbnail: '/backtoback.webp',
    description: 'The Back To Back project aimed to create an online blog with various articles. Inspired by the song "Note pour trop tard" by Orelsan, the goal of this project was to write to our future selves. I undertook this individual endeavor.',
    images: [
      '/btb-createurs.png',
      '/btb-elements-graphique.webp',
      '/btb-couleurs.png',
      '/btb-typographie.png',
      '/btb-siteweb.webp',
      '/btb-accueil.png',
    ],
  },
  { 
    name: 'gaspardtex',
    title: 'GaspardTex',
    thumbnail: '/gaspardtex.webp',
    description: 'GaspardTex, a creator of content on the various social networks',
    images: [
      '/gt-youtube.webp',
      '/gt-twitch.webp',
      '/gt-tiktok.webp',
    ],
  },
];

const project = projects.find(p => p.name === projectName);
</script>

<template>
    <Header />
    <div class="pb-10">
      <h1 class="text-black text-2xl font-bold font-rubik m-5 md:hidden">{{ project.title }}</h1>
      <img :src="project.thumbnail" alt="Miniature du projet" class="m-auto md:mt-20">
      <p class="text-base font-rubik mx-6 mt-10 md:text-center">{{ project.description }}</p>
      <div v-for="image in project.images" :key="image" class="mt-12">
        <img :src="image" alt="Image du projet" class="md:m-auto">
      </div>
    </div>
    <Footer />
  </template>
  