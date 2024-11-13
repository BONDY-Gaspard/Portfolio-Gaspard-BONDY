<script setup lang="ts">
</script>

<template>
    <footer class="relative z-20">
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
                <RouterLink to="/aboutme">
                    <li>About Me</li>
                </RouterLink>
                <RouterLink to="/contact">
                    <li>Contact</li>
                </RouterLink>
            </ul>
            <div class="flex justify-center mt-12 space-x-5">
                <div class="flex">
                    <a href="https://www.instagram.com/gaspardtex/" target="_blank">
                        <img src="/src/img/logo-instagram-footer.svg" alt="Logo instagram" class="absolute opacity-100 hover:opacity-0 size-12">
                    </a>
                    <a href="https://www.instagram.com/gaspardtex/" target="_blank">
                        <img src="/src/img/logo-instagram-hover-footer.svg" alt="Logo instagram sélectionné" class="relative opacity-0 hover:opacity-100 size-12">
                    </a>
                </div>
                <div class="flex">
                    <a href="https://twitter.com/GaspardTex" target="_blank">
                        <img src="/src/img/logo-x-footer.svg" alt="Logo X" class="absolute opacity-100 hover:opacity-0 size-12">
                    </a>
                    <a href="https://twitter.com/GaspardTex" target="_blank">
                        <img src="/src/img/logo-x-hover-footer.svg" alt="Logo X sélectionné" class="relative opacity-0 hover:opacity-100 size-12">
                    </a>
                </div>
                <div class="flex">
                    <a href="https://www.youtube.com/channel/UCLF_US4rxEGbDht_SYWZgwQ" target="_blank">
                        <img src="/src/img/logo-youtube-footer.svg" alt="Logo YouTube" class="absolute opacity-100 hover:opacity-0 size-12">
                    </a>
                    <a href="https://www.youtube.com/channel/UCLF_US4rxEGbDht_SYWZgwQ" target="_blank">
                        <img src="/src/img/logo-youtube-hover-footer.svg" alt="Logo YouTube sélectionné" class="relative opacity-0 hover:opacity-100 size-12">
                    </a>
                </div>
                <div class="flex">
                    <a href="https://bento.me/gaspardbondy" target="_blank">
                        <img src="/src/img/logo-ensavoir-footer.svg" alt="Logo en savoir plus" class="absolute opacity-100 hover:opacity-0 size-12">
                    </a>
                    <a href="https://bento.me/gaspardbondy" target="_blank">
                        <img src="/src/img/logo-ensavoir-hover-footer.svg" alt="Logo en savoir plus sélectionné" class="relative opacity-0 hover:opacity-100 size-12">
                    </a>
                </div>
            </div>
        </nav>
        <RouterLink to="/legalnotice"><p class="flex mt-10 justify-center text-white font-rubik text-xs pb-10 opacity-50">©2024 GASPARD BONDY</p></RouterLink>
    </footer>
</template>