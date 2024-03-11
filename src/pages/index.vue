<script setup lang="ts">

</script>

<template>
    <Header />
        <div>
            <div class="w-[261px] h-[102.67px] relative mt-5">
                <div class="w-[250.44px] h-[102.67px] left-[10.56px] top-[-0px] absolute bg-white rounded-[22.07px] shadow-xl"></div>
                <img class="left-7 top-6 absolute" src="/src/img/aurevoir.png" />
                <div class="left-[104.59px] top-[26.87px] absolute text-center text-black text-opacity-50 text-xs font-normal font-rubik">Hello, I am</div>
                <div class="left-[104.59px] top-[41.26px] absolute text-center text-black text-[32.62px] font-bold font-rubik">Gaspard</div>
            </div>
            <div class="flex justify-end mr-6">
                <div class="w-[88.28px] h-[38.37px] px-[13.64px] py-[8.18px] bg-white rounded-lg items-center gap-[6.82px]">
                <div class="text-black text-[7.50px] font-normal font-rubik leading-[10.58px]">MULTIMEDIA</div>
                <div class="text-black text-[7.50px] font-normal font-rubik leading-[10.58px]">COMMUNICATION</div>
                </div>
            </div>
            <img src="/src/img/social-networks.webp" alt="illustration reseaux sociaux" class="flex m-auto">
            <img src="/src/img/multimedia.webp" alt="illustration multimedia" class="ml-10">
            <img src="/src/img/communication.webp" alt="illustration multimedia" class="-mt-24 ml-60">
            <div class="relative mx-5">
                <img src="/src/img/gaspard.webp" alt="Photo Gaspard" class="absolute">
                <div class="w-[341.68px] h-[341.68px] bg-gradient-to-r from-slate-200 via-slate-200 to-slate-300 rounded-full shadow m-auto"></div>
            </div>
            <div class="w-[35px] h-[35px] relative m-auto animate-bounce">
                <RouterLink to="#">
                <div class="w-[35px] h-[35px] left-0 top-0 absolute bg-white rounded-full"></div>
                <img class="w-[21px] h-[21px] left-[7px] top-[7px] absolute" src="/src/img/fleche-bas.svg"/>
                </RouterLink>
            </div>
        </div>
</template>