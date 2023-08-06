<script setup>
import { WeatherComponent, GithubIcon, LinkedInIcon, CurriculumIcon } from './';
</script>

<template>
    <h1>Links</h1>
    <article>
        <section>
            <ul>
                <li>
                    <a href="https://github.com/enzofagundz" class="icon" target="_blank" aria-label="Confira meus projetos no Github">
                        <GithubIcon color="#8b8bff" size="w-12 md:w-16 lg:w-18"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/enzofagundz/" class="icon" target="_blank" aria-label="Confira meu perfil no LinkedIn">
                        <LinkedInIcon />
                    </a>
                </li>
                <li>
                    <a href="/documents/curriculo.pdf" class="icon" download="Currículo Enzo Fagundes" aria-label="Faça o download do meu currículo">
                        <CurriculumIcon />
                    </a>
                </li>
            </ul>
        </section>
        <router-link :to="{path: '/', hash: '#about'}" class="button-down" aria-label="Continue a rolagem do portfólio">
            <div class="icon-btn">
                <img src="/img/arrow-down.svg" alt="Imagem de uma flecha apontada para baixo">
            </div>
        </router-link>
        
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
    @apply w-[50px] h-[50px] bg-[#f26800] rounded-full flex items-center justify-center animate-bounce
}

.icon-btn img {
    @apply w-[30px] h-[30px]
}

article {
    @apply flex flex-row items-center justify-between 
}

@media (min-width: 768px) {
    .icon-btn {
        @apply w-[75px] h-[75px]
    }
    
    section {
        @apply w-[300px] 
    }
}

@media (min-width: 1024px) {
    section {
        @apply w-[384px] 
    }
}
</style>