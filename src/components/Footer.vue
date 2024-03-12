<script setup lang="ts">
</script>

<template>
    <footer>
        <nav>
            <a href="/">
                <img src="/src/img/logo-portfolio-white.svg" alt="Logo Portfolio Gaspard BONDY" class=" size-24 flex m-auto pt-10">
            </a>
            <ul class="text-white text-center font-rubik font-regular mt-10 justify-between space-x-1">
                <RouterLink to="/">
                    <li>Home</li>
                </RouterLink>
                <RouterLink to="/myprojects">
                    <li>My projects</li>
                </RouterLink>
                <RouterLink to="#">
                    <li>About Me</li>
                </RouterLink>
                <RouterLink to="#">
                    <li>Contact</li>
                </RouterLink>
            </ul>
            <div class="flex justify-center mt-12 space-x-5">
                <div class="flex">
                    <a href="https://www.instagram.com/gaspardtex/" target="_blank">
                        <img src="/src/img/footer/logo-instagram.svg" alt="Logo instagram" class="absolute opacity-100 hover:opacity-0 size-12">
                    </a>
                    <a href="https://www.instagram.com/gaspardtex/" target="_blank">
                        <img src="/src/img/footer/logo-instagram-hover.svg" alt="Logo instagram sélectionné" class="relative opacity-0 hover:opacity-100 size-12">
                    </a>
                </div>
                <div class="flex">
                    <a href="https://twitter.com/GaspardTex" target="_blank">
                        <img src="/src/img/footer/logo-x.svg" alt="Logo X" class="absolute opacity-100 hover:opacity-0 size-12">
                    </a>
                    <a href="https://twitter.com/GaspardTex" target="_blank">
                        <img src="/src/img/footer/logo-x-hover.svg" alt="Logo X sélectionné" class="relative opacity-0 hover:opacity-100 size-12">
                    </a>
                </div>
                <div class="flex">
                    <a href="https://www.youtube.com/channel/UCLF_US4rxEGbDht_SYWZgwQ" target="_blank">
                        <img src="/src/img/footer/logo-youtube.svg" alt="Logo YouTube" class="absolute opacity-100 hover:opacity-0 size-12">
                    </a>
                    <a href="https://www.youtube.com/channel/UCLF_US4rxEGbDht_SYWZgwQ" target="_blank">
                        <img src="/src/img/footer/logo-youtube-hover.svg" alt="Logo YouTube sélectionné" class="relative opacity-0 hover:opacity-100 size-12">
                    </a>
                </div>
                <div class="flex">
                    <a href="https://linktr.ee/gaspardtex" target="_blank">
                        <img src="/src/img/footer/logo-ensavoir.svg" alt="Logo en savoir plus" class="absolute opacity-100 hover:opacity-0 size-12">
                    </a>
                    <a href="https://linktr.ee/gaspardtex" target="_blank">
                        <img src="/src/img/footer/logo-ensavoir-hover.svg" alt="Logo en savoir plus sélectionné" class="relative opacity-0 hover:opacity-100 size-12">
                    </a>
                </div>
            </div>
        </nav>
        <RouterLink to="#"><p class="flex mt-10 justify-center text-white font-rubik text-xs pb-10 opacity-50">©2024 GASPARD BONDY</p></RouterLink>
    </footer>
</template>