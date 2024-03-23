<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const projectName = route.params.projectName;

const projects = [
  { 
    name: 'mmi-redesign',
    title: 'MMI redesign site',
    thumbnail: '/src/img/refontemmi.webp',
    description: "The redesign of the MMI site is a group effort. Our aim was to completely overhaul the MMI Montbéliard training course website. The aim was to recreate the graphic and technical aspects of the site to make it more up to date, but also to renew its content, some subjects of which are no longer topical today. We needed to breathe new life into the MMI site to encourage more future students to opt for MMI training, whether they're continuing their studies or looking for a career change...",
    images: [
      '/src/img/mmi-createurs.png',
      '/src/img/mmi-elementgraphique.webp',
      '/src/img/mmi-couleur.png',
      '/src/img/mmi-typographie.png',
      '/src/img/mmi-images.png',
      '/src/img/mmi-siteweb.webp',
      '/src/img/mmi-pageaccueil.webp',
      '/src/img/mmi-accueilmobile.webp',
      '/src/img/mmi-pagecontenu.webp',
      '/src/img/mmi-page404.webp',
      '/src/img/mmi-pagecontenumobile.webp',
    ],
  },
  { 
    name: 'benevers',
    title: 'Benevers',
    thumbnail: '/src/img/benevers.webp',
    description: "Our project aimed to create an online platform dedicated to volunteers and associations, with the goal of promoting volunteering and facilitating collaboration between the two parties. We embarked on a collective effort to revitalize the landscape of volunteering and associative engagement. Our objective was to envision a platform, focusing on both its aesthetics and functionality, while ensuring that its content addressed the current needs of the volunteer and associative community.",
    images: [
      '/src/img/benevers-introduction.png',
      '/src/img/benevers-presentation.webp',
      '/src/img/benevers-createurs.png',
      '/src/img/benevers-elements-graphique.webp',
      '/src/img/benevers-couleurs.png',
      '/src/img/benevers-mock-up.png',
      '/src/img/benevers-siteweb.webp',
      '/src/img/benevers-page-accueil.webp',
      '/src/img/benevers-page-accueil-mobile.png',
      '/src/img/benevers-contenu-projet.webp',
      '/src/img/benevers-contenu.webp',
      '/src/img/benevers-missions.webp',
      '/src/img/benevers-interaction-communautaire.webp',
      '/src/img/benevers-reseaux-sociaux.png',
      '/src/img/benevers-call-to-action.webp',
    ],
  },
  { 
    name: 'back-to-back',
    title: 'Back-To-Back (mobile)',
    thumbnail: '/src/img/backtoback.webp',
    description: 'The Back To Back project aimed to create an online blog with various articles. Inspired by the song "Note pour trop tard" by Orelsan, the goal of this project was to write to our future selves. I undertook this individual endeavor.',
    images: [
      '/src/img/btb-createurs.png',
      '/src/img/btb-elements-graphique.webp',
      '/src/img/btb-couleurs.png',
      '/src/img/btb-typographie.png',
      '/src/img/btb-siteweb.webp',
      '/src/img/btb-accueil.png',
    ],
  },
  { 
    name: 'gaspardtex',
    title: 'GaspardTex',
    thumbnail: '/src/img/gaspardtex.webp',
    description: 'GaspardTex, a creator of content on the various social networks',
    images: [
      '/src/img/gt-youtube.webp',
      '/src/img/gt-twitch.webp',
      '/src/img/gt-tiktok.webp',
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
  