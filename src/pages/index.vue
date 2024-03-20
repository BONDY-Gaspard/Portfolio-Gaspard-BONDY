<script setup lang="ts">

</script>

<template>
    <Header />
    <!-- Petit écran -->
        <div class="md:hidden">
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
                <img src="/src/img/gaspard.webp" alt="Photo Gaspard" class="absolute -mt-14">
                <div class="w-[341.68px] h-[341.68px] bg-gradient-to-r from-slate-200 via-slate-200 to-slate-300 rounded-full shadow m-auto"></div>
            </div>
            <div class="w-[35px] h-[35px] relative m-auto animate-bounce -mt-10 lg:hidden">
                <RouterLink to="/myprojects">
                <div class="w-[35px] h-[35px] left-0 top-0 absolute bg-white rounded-full"></div>
                <img class="w-[21px] h-[21px] left-[7px] top-[7px] absolute" src="/src/img/fleche-bas.svg"/>
                </RouterLink>
            </div>
        </div>
    <!-- Grand écran -->
    <div class="hidden md:block">
        <div class="w-[386px] h-[151.85px] left-56 top-32 relative">
            <div class="w-[370.39px] h-[151.85px] left-[15.61px] top-0 absolute bg-white rounded-[32.64px] shadow-md"></div>
            <img class="w-20 left-10 top-6 absolute" src="/src/img/au-revoir-pc.png"/>
            <div class="left-[154.68px] top-[39.74px] absolute text-center text-black text-opacity-50 text-lg font-normal font-rubik">Hello, I am</div>
            <div class="left-[154.68px] top-[61.02px] absolute text-center text-black text-5xl font-bold font-rubik">Gaspard</div>
        </div>
        <div class="relative z-20">
            <div class="absolute top-40 left-[550px] w-[179.71px] px-[27.86px] py-[16.71px] bg-white rounded-2xl justify-center items-center">
                <div class="text-black text-base font-normal font-['Rubik'] leading-snug">MULTIMEDIA</div>
                <div class="text-black text-base font-normal font-['Rubik'] leading-snug">COMMUNICATION</div>
            </div>
        </div>
        <div class="flex justify-center items-center h-screen">
            <div class="relative mx-5 -mt-60">
                <img src="/src/img/gaspard-pc.webp" alt="Photo Gaspard" class="absolute -mt-36 z-10">
                <div class="w-[700px] h-[700px] bg-gradient-to-r from-slate-200 via-slate-200 to-slate-300 rounded-full shadow"></div>
            </div>
        </div>
        <img src="/src/img/social-networks-pc.webp" alt="illustration reseaux sociaux" class="relative left-[1400px] -top-[500px] z-20">
        <img src="/src/img/communication-pc.webp" alt="illustration multimedia" class="relative  left-[1400px] -top-[975px] z-20">
        <img src="/src/img/multimedia-pc.webp" alt="illustration multimedia" class="relative left-[1250px] -top-[1425px] z-20">
        <RouterLink to="/legalnotice">
            <div class="relative left-[1725px] -top-[860px]">
                <div class="left-0 top-0 absolute text-right text-black text-opacity-25 text-[13px] font-normal font-rubik">©2024 GASPARD BONDY</div>
                <div class="left-[10px] top-[15px] absolute text-right text-black text-opacity-25 text-[13px] font-normal font-rubik">ALL RIGHTS RESERVED</div>
            </div>
        </RouterLink>
    </div>
    <Footer class="mt-[50px] md:-mt-[708px]" />
</template>