<script setup>
import { WeatherComponent, GithubIcon, LinkedInIcon, CurriculumIcon } from './';
</script>

<template>
    <h1>Links</h1>
    <article>
        <section>
            <ul>
                <li>
                    <a href="https://github.com/enzofagundz" class="icon" target="_blank">
                        <GithubIcon />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/enzofagundz/" class="icon" target="_blank">
                        <LinkedInIcon />
                    </a>
                </li>
                <li>
                    <a href="/documents/curriculo.pdf" class="icon" download="Currículo Enzo Fagundes">
                        <CurriculumIcon />
                    </a>
                </li>
            </ul>
        </section>
        <a href="#" class="button-down">
            <div class="icon-btn">
                <img src="img/arrow-down.svg" alt="">
            </div>
        </a>

        <WeatherComponent />
    </article>
</template>

<style scoped>
section {
    @apply rounded-xl border-2 border-[#CDCDCD] p-4 bg-[#1D1D16] w-[220px] mt-4
}

ul {
    @apply flex flex-row justify-between items-center
}

.icon {
    @apply cursor-pointer
}

.icon-btn {
    @apply w-[75px] h-[75px] bg-[#f26800] rounded-full flex items-center justify-center animate-bounce
}

article {
    @apply flex flex-row items-center justify-between 
}

@media (min-width: 1024px) {
    section {
        @apply w-[384px] 
    }
}
</style>