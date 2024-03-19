<script setup lang="ts">
import { ref } from 'vue'
import { watch } from 'vue'
import { useRouter } from 'vue-router'

const menuIsOpen = ref(false)
const router = useRouter()

watch(menuIsOpen, (newValue) => {
  if (newValue) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
})

router.afterEach(() => {
  menuIsOpen.value = false
})

</script>

<template>
    <header class="bg-slate-100 shadow-md h-[87px] flex items-center">
        <nav class="w-full">
            <div class="flex items-center justify-between m-5">
                <RouterLink to="/"><img src="/src/img/logo_portfolio.svg" alt="Logo Portfolio Gaspard BONDY" class="w-9 h-9 lg:w-14 lg:h-14"></RouterLink>
                <div class="hidden md:flex space-x-10 whitespace-nowrap">
                    <RouterLink to="/myprojects">
                        <p>MY PROJECT</p>
                    </RouterLink>
                    <RouterLink to="/aboutme">
                        <p>ABOUT ME</p>
                    </RouterLink>
                    <RouterLink to="/contact">
                        <p>CONTACT</p>
                    </RouterLink>
                </div>
                <div class="flex">
                    <div @pointerdown="menuIsOpen = !menuIsOpen" class="w-9 h-9 relative">
                        <div class="w-9 h-9 bg-red-700 rounded-full"></div>
                        <div class="w-5 left-2 top-3.5 absolute border border-white rounded-full"></div>
                        <div class="w-5 left-2 top-5 absolute border border-white rounded-full"></div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <Transition enter-active-class="transition-transform duration-1000 ease-in-out" enter-from-class="-translate-y-full" enter-to-class="-translate-y-0" leave-active-class="transition-transform duration-1000 ease-in-out" leave-to-class="-translate-y-full">
        <nav v-show="menuIsOpen" class="bg-red-700 absolute z-50 inset-0">
            <img src="/src/img/croix-menu.webp" alt="croix" class="size-16 mr-0 ml-auto cursor-pointer" @pointerdown="menuIsOpen = false">
                <ul class="mx-5 text-white font-rubik font-bold text-3xl space-y-5 mt-36">
                    <li>
                        <RouterLink to="/myprojects">
                            <div class="mx-5">
                                <div class="flex items-center justify-between">
                                    <p>MY PROJECTS</p>
                                    <img src="/src/img/fleche-menu.webp" alt="fleche menu 1" class="size-16">
                                </div>
                                <hr class="bg-white rounded-full h-1 -mt-1">
                            </div>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/aboutme">
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
                        <RouterLink to="/contact">
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
            <div class="flex space-x-5 mt-10 justify-center sm:hidden">
                    <a href="https://www.instagram.com/gaspardtex/" target="_blank">
                        <img src="/src/img/logo-instagram.svg" alt="Logo instagram" class="size-16">
                    </a>
                    <a href="https://twitter.com/GaspardTex" target="_blank">
                        <img src="/src/img/logo-x.svg" alt="Logo X" class="size-16">
                    </a>
            </div>
            <div class="flex space-x-5 mt-5 justify-center sm:hidden">
                    <a href="https://www.youtube.com/channel/UCLF_US4rxEGbDht_SYWZgwQ" target="_blank">
                        <img src="/src/img/logo-youtube.svg" alt="Logo YouTube" class="size-16">
                    </a>
                    <a href="https://linktr.ee/gaspardtex" target="_blank">
                        <img src="/src/img/logo-savoirplus.svg" alt="Logo en savoir plus" class="size-16">
                    </a>
            </div>
            <!-- Icônes pour moyens et grands écrans : alignées horizontalement et centrées -->
            <div class="hidden sm:flex justify-center items-center space-x-40 mt-32 w-full">
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
                    <a href="https://linktr.ee/gaspardtex" target="_blank">
                        <img src="/src/img/logo-savoirplus.svg" alt="Logo en savoir plus" class="opacity-100 hover:opacity-0 size-28">
                    </a>
                    <a href="https://linktr.ee/gaspardtex" target="_blank" class="absolute inset-0">
                        <img src="/src/img/logo-savoirplus-hover.svg" alt="Logo en savoir plus sélectionné" class="opacity-0 hover:opacity-100 size-28">
                    </a>
                </div>
            </div>
            <RouterLink to="/legalnotice" class="w-full">
                <p class="text-white font-rubik text-sm text-center mt-32 md:mt-20 lg:mt-40">©2024 GASPARD BONDY</p>
            </RouterLink>
        </nav>
    </Transition>
</template>