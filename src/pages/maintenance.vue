<template>
    <div class="p-10 pb-12 bg-red-700 overflow-hidden">
        <div class="flex flex-col items-center justify-center text-center mt-20 px-4">
            <h1 class="text-8xl font-bold mb-6 text-white">Maintenance en cours</h1>
            <p class="text-4xl text-white mt-14">Mon portfolio est actuellement en cours de mise à jour.</p>
            <p class="text-xl text-white mt-32">En attendant, retrouvez-moi sur les réseaux sociaux :</p>
        </div>
        <div class="hidden sm:flex justify-center items-center space-x-40 mt-20 w-full ">
                <div class="relative">
                    <a href="https://www.instagram.com/gaspardtex/" target="_blank">
                        <img src="/src/img/logo-instagram.svg" alt="Logo instagram" class="opacity-100 hover:opacity-0 size-28">
                    </a>
                    <a href="https://www.instagram.com/gaspardtex/" target="_blank" class="absolute inset-0">
                        <img src="/src/img/logo-instagram-hover.svg" alt="Logo instagram sélectionné" class="opacity-0 hover:opacity-100 size-28">
                    </a>
                </div>
                <div class="relative">
                    <a href="https://twitter.com/GaspardTex" target="_blank">
                        <img src="/src/img/logo-x.svg" alt="Logo X" class="opacity-100 hover:opacity-0 size-28">
                    </a>
                    <a href="https://twitter.com/GaspardTex" target="_blank" class="absolute inset-0">
                        <img src="/src/img/logo-x-hover.svg" alt="Logo X sélectionné" class="opacity-0 hover:opacity-100 size-28">
                    </a>
                </div>
                <div class="relative">
                    <a href="https://www.youtube.com/channel/UCLF_US4rxEGbDht_SYWZgwQ" target="_blank">
                        <img src="/src/img/logo-youtube.svg" alt="Logo YouTube" class="opacity-100 hover:opacity-0 size-28">
                    </a>
                    <a href="https://www.youtube.com/channel/UCLF_US4rxEGbDht_SYWZgwQ" target="_blank" class="absolute inset-0">
                        <img src="/src/img/logo-youtube-hover.svg" alt="Logo YouTube sélectionné" class="opacity-0 hover:opacity-100 size-28">
                    </a>
                </div>
                <div class="relative">
                    <a href="https://bento.me/gaspardbondy" target="_blank">
                        <img src="/src/img/logo-savoirplus.svg" alt="Logo en savoir plus" class="opacity-100 hover:opacity-0 size-28">
                    </a>
                    <a href="https://bento.me/gaspardbondy" target="_blank" class="absolute inset-0">
                        <img src="/src/img/logo-savoirplus-hover.svg" alt="Logo en savoir plus sélectionné" class="opacity-0 hover:opacity-100 size-28">
                    </a>
                </div>
            </div>
            <!-- <RouterLink to="/legalnotice" class="w-full"> -->
                <p class="text-white font-rubik text-sm text-center mt-32 md:mt-20 lg:mt-40">©2025 GASPARD BONDY</p>
            <!-- </RouterLink> -->
        </div>
</template>


<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>
