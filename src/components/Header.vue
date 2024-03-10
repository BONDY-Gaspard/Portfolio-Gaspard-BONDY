<script setup lang="ts">
import { ref } from 'vue'
const menuIsOpen = ref(false)
</script>

<template>
    <header class="bg-slate-100 shadow-md h-[87px] flex items-center">
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

        <nav v-show="menuIsOpen" class="bg-red-700 flex">
            <ul class="">
                <li><RouterLink to="#">1</RouterLink></li>
                <li><RouterLink to="#">2</RouterLink></li>
                <li><RouterLink to="#">3</RouterLink></li>
                <li><RouterLink to="#">4</RouterLink></li>
            </ul>
        </nav>
    </header>
</template>