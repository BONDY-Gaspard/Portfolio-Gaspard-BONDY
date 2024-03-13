<script setup lang="ts">
import contactform from '@/components/contactform.vue';
</script>

<template>
    <Header />
    <h1 class="text-black text-2xl font-bold font-rubik m-5">Contact</h1>
    <div class="w-[287px] h-[78.56px] relative m-auto mt-10">
        <div class="w-[287px] h-[78.56px] left-0 top-0 absolute bg-white rounded-lg shadow"></div>
        <a href="mailto:contact@gaspardbondy.fr" target="_blank">
            <p class="w-[152.93px] h-[11.52px] left-[96.36px] top-[35.61px] absolute text-black text-xs font-normal font-rubik">contact@gaspardbondy.fr</p>
        </a>
        <img class="w-[69.13px] h-[69.13px] left-[18.85px] top-[5.24px] absolute" src="/src/img/contact/email.svg" alt="email"/>
    </div>
    <div class="w-[287px] h-[78.56px] relative m-auto mt-5">
        <div class="w-[287px] h-[78.56px] left-0 top-0 absolute bg-white rounded-lg shadow"></div>
        <img class="w-[49.23px] h-[49.23px] left-[22px] top-[15.71px] absolute" src="/src/img/contact/tel.svg" alt="phone"/>
        <a href="tel:0619098108">
            <p class="w-[152.93px] h-[11.52px] left-[87.99px] top-[34.57px] absolute text-black text-xs font-normal font-rubik">(+33) 06 • 19 • 09 • 81 • 08 </p>
        </a>
    </div>
    <contactform class="pb-12"/>
    <Footer />
</template>