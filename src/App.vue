<script setup>
import { useRoute } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const route = useRoute()
</script>

<template>
  <div>
    <!-- Affiche Header uniquement si on n'est pas sur la page de maintenance -->
    <Header v-if="route.name !== 'maintenance'" />

    <RouterView />

    <!-- Affiche Footer uniquement si on n'est pas sur la page de maintenance -->
    <Footer v-if="route.name !== 'maintenance'" />
  </div>
</template>

<style scoped>
</style>
