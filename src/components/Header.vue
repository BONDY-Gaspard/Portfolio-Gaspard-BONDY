<script setup lang="ts">
import { ref } from 'vue'
const menuIsOpen = ref(false)
</script>

<template>
    <header class="bg-slate-100 shadow-md h-[87px] flex items-center relative">
        <nav>
            <div class="flex items-center m-5 space-x-64">
                <RouterLink to="/"><img src="/src/img/logo_portfolio.svg" alt="Logo Portfolio Gaspard BONDY" class="w-9 h-9 lg:w-auto lg:h-auto"></RouterLink>
                <div class="w-9 h-9 relative" @pointerdown="menuIsOpen = !menuIsOpen">
                    <div class="w-9 h-9 absolute bg-red-700 rounded-full"></div>
                    <div class="w-5 left-2 top-3.5 absolute border border-white rounded-full"></div>
                    <div class="w-5 left-2 top-5 absolute border border-white rounded-full"></div>
                </div>
            </div>
        </nav>
    </header>
    <Transition enter-active-class="transition-transform duration-1000 ease-in-out" enter-from-class="-translate-y-full" enter-to-class="-translate-y-0" leave-active-class="transition-transform duration-1000 ease-in-out" leave-to-class="-translate-y-full">
        <nav v-show="menuIsOpen" class="bg-red-700 absolute z-50 inset-0">
            <img src="/src/img/croix-menu.webp" alt="croix" class="size-16 mr-0 ml-auto cursor-pointer" @pointerdown="menuIsOpen = false">
                <ul class="mx-5 text-white font-rubik font-bold text-3xl space-y-5 mt-36">
                    <li>
                        <RouterLink to="#">
                            <div class="mx-5">
                                <div class="flex items-center justify-between">
                                    <p>MY PROJECT</p>
                                    <img src="/src/img/fleche-menu.webp" alt="fleche menu 1" class="size-16">
                                </div>
                                <hr class="bg-white rounded-full h-1 -mt-1">
                            </div>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="#">
                            <div class="mx-5">
                                <div class="flex items-center justify-between">
                                    <p>ABOUT ME</p>
                                    <img src="/src/img/fleche-menu.webp" alt="fleche menu 1" class="size-16">
                                </div>
                                <hr class="bg-white rounded-full h-1 -mt-1">
                            </div>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="#">
                            <div class="mx-5">
                                <div class="flex items-center justify-between">
                                    <p>CONTACT</p>
                                    <img src="/src/img/fleche-menu.webp" alt="fleche menu 1" class="size-16">
                                </div>
                                <hr class="bg-white rounded-full h-1 -mt-1">
                            </div>
                        </RouterLink>
                    </li>
                </ul>
            <div class="flex space-x-20 mt-10 justify-center -ml-16">
                <div class="flex">
                    <a href="https://www.instagram.com/gaspardtex/" target="_blank">
                        <img src="/src/img/logo-instagram.svg" alt="Logo instagram" class="absolute opacity-100 hover:opacity-0 size-16">
                    </a>
                    <a href="https://www.instagram.com/gaspardtex/" target="_blank">
                        <img src="/src/img/logo-instagram-hover.svg" alt="Logo instagram sélectionné" class="absolute opacity-0 hover:opacity-100 size-16">
                    </a>
                </div>
                <div class="flex">
                    <a href="https://twitter.com/GaspardTex" target="_blank">
                        <img src="/src/img/logo-x.svg" alt="Logo X" class="absolute opacity-100 hover:opacity-0 size-16">
                    </a>
                    <a href="https://twitter.com/GaspardTex" target="_blank">
                        <img src="/src/img/logo-x-hover.svg" alt="Logo X sélectionné" class="absolute opacity-0 hover:opacity-100 size-16">
                    </a>
                </div>
            </div>
            <div class="flex space-x-20 mt-20 justify-center -ml-16">
                <div class="flex">
                    <a href="https://www.youtube.com/channel/UCLF_US4rxEGbDht_SYWZgwQ" target="_blank">
                        <img src="/src/img/logo-youtube.svg" alt="Logo YouTube" class="absolute opacity-100 hover:opacity-0 size-16">
                    </a>
                    <a href="https://www.youtube.com/channel/UCLF_US4rxEGbDht_SYWZgwQ" target="_blank">
                        <img src="/src/img/logo-youtube-hover.svg" alt="Logo YouTube sélectionné" class="absolute opacity-0 hover:opacity-100 size-16">
                    </a>
                </div>
                <div class="flex">
                    <a href="https://linktr.ee/gaspardtex" target="_blank">
                        <img src="/src/img/logo-savoirplus.svg" alt="Logo en savoir plus" class="absolute opacity-100 hover:opacity-0 size-16">
                    </a>
                    <a href="https://linktr.ee/gaspardtex" target="_blank">
                        <img src="/src/img/logo-savoirplus-hover.svg" alt="Logo en savoir plus sélectionné" class="absolute opacity-0 hover:opacity-100 size-16">
                    </a>
                </div>
            </div>
            <p class="flex mt-40 justify-center text-white font-rubik text-sm">©2024 GASPARD BONDY</p>
        </nav>
    </Transition>
</template>