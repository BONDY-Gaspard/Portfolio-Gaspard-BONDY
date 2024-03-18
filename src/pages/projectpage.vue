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
  { 
    name: 'benevers',
    title: 'Benevers',
    thumbnail: '/src/img/projet/benevers.webp',
    description: "Our project aimed to create an online platform dedicated to volunteers and associations, with the goal of promoting volunteering and facilitating collaboration between the two parties. We embarked on a collective effort to revitalize the landscape of volunteering and associative engagement. Our objective was to envision a platform, focusing on both its aesthetics and functionality, while ensuring that its content addressed the current needs of the volunteer and associative community.",
    images: [
      '/src/img/projet/benevers/benevers-introduction.png',
      '/src/img/projet/benevers/benevers-presentation.webp',
      '/src/img/projet/benevers/createurs.png',
      '/src/img/projet/benevers/elements-graphique.webp',
      '/src/img/projet/benevers/couleurs.png',
      '/src/img/projet/benevers/mock-up.png',
      '/src/img/projet/benevers/siteweb.webp',
      '/src/img/projet/benevers/page-accueil.webp',
      '/src/img/projet/benevers/page-accueil-mobile.png',
      '/src/img/projet/benevers/contenu-projet.webp',
      '/src/img/projet/benevers/contenu.webp',
      '/src/img/projet/benevers/missions.webp',
      '/src/img/projet/benevers/interaction-communautaire.webp',
      '/src/img/projet/benevers/reseaux-sociaux.png',
      '/src/img/projet/benevers/call-to-action.webp',
    ],
  },
  { 
    name: 'back-to-back',
    title: 'Back-To-Back (mobile)',
    thumbnail: '/src/img/projet/backtoback.webp',
    description: 'The Back To Back project aimed to create an online blog with various articles. Inspired by the song "Note pour trop tard" by Orelsan, the goal of this project was to write to our future selves. I undertook this individual endeavor.',
    images: [
      '/src/img/projet/backtoback/createurs.png',
      '/src/img/projet/backtoback/elements-graphique.webp',
      '/src/img/projet/backtoback/couleurs.png',
      '/src/img/projet/backtoback/typographie.png',
      '/src/img/projet/backtoback/siteweb.webp',
      '/src/img/projet/backtoback/accueil.png',
    ],
  },
  { 
    name: 'gaspardtex',
    title: 'GaspardTex',
    thumbnail: '/src/img/projet/gaspardtex.webp',
    description: 'GaspardTex, a creator of content on the various social networks',
    images: [
      '/src/img/projet/gaspardtex/youtube.webp',
      '/src/img/projet/gaspardtex/twitch.webp',
      '/src/img/projet/gaspardtex/tiktok.webp',
    ],
  },
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
  