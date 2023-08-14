<script setup>
import { ref } from 'vue';
import { useProjectStore } from '../stores/projects';
const projectStore = useProjectStore();

import { LinkIcon } from './';

const color = ref('#1167A1');

const changeColor = () => {
    color.value = color.value == '#1167A1' ? '#fff' : '#1167A1';
}
</script>

<template>
    <section id="projects">
        <h1>
            // Projetos
        </h1>

        <div class="carousel carousel-center">
            <div class="carousel-item" v-for="project in projectStore.projects" :key="project.id" :id="`item${project.id}`">
                <header>
                    <router-link :to="{name: 'projects', params: {id: project.id}}">
                        <figure>
                            <img :src="project.image" alt="">
                        </figure>
                        <p>
                            {{ project.name }}
                        </p>
                    </router-link>
                </header>
                <article>
                    <p>
                        {{ project.description }}
                    </p>
                    <figure>
                        <img :src="project.mockup" alt="">
                    </figure>
                </article>
                <footer>
                    <p>
                        Conheça mais sobre o projeto:
                    </p>
                    <a :href="project.link" target="_blank" @mouseenter="changeColor" @mouseleave="changeColor">
                        <LinkIcon :color="color" size="w-5" />
                        Github
                    </a>
                </footer>
            </div>
        </div>
        <div class="pages">
                <a href="#item1">1</a>
                <a href="#item2">2</a>
                <a href="#item3">3</a>
                <a href="#item4">4</a>
        </div>
    </section>
</template>

<style scoped>
#projects {
    @apply flex flex-col items-center justify-center space-y-8
}

h1 {
    @apply text-5xl text-center font-unbounded text-[#e3e3e3] font-bold mb-8
}

.carousel {
    @apply bg-[#333CA5] rounded-box max-w-xs overflow-hidden p-4
}

.carousel-item {
    @apply p-4 rounded-lg border-2 border-[#cdcdcd] flex flex-col justify-between w-[225px] h-[400px] m-4 bg-gradient-to-br from-[#e8b854] to-[#ff0469]
}

.carousel-item header a {
    @apply flex flex-row items-center mb-2
}

.carousel-item header a figure {
    @apply w-8 h-8 mr-2
}

.carousel-item header a p {
    @apply font-bold text-white text-sm
}

.carousel-item article {
    @apply w-full h-full flex flex-col items-center justify-center font-roboto
}

.carousel-item article p {
    @apply text-white text-base text-center mb-4
}

.carousel-item article figure {
    @apply w-[200px] 
}

.carousel-item>header>figure>img {
    @apply w-full h-full
}

.carousel-item article figure img {
    @apply w-full h-auto
}

.carousel-item footer {
    @apply flex flex-col items-center justify-center
}

.carousel-item footer a {
    @apply flex flex-row items-center justify-center bg-white rounded-md text-[#1167A1] font-roboto uppercase py-2 px-4 mt-2
}

.carousel-item footer a img {
    @apply w-5 h-5 -rotate-45
}

.carousel-item footer a:hover {
    @apply bg-[#1167A1] text-white transition duration-500 ease-in-out
}

.carousel-item footer p {
    @apply text-white text-sm font-roboto text-center
}

.pages {
    @apply flex justify-center gap-2 py-2 rounded-full mx-auto px-2
}

.pages a {
    @apply bg-[#e3e3e3] rounded-full w-8 h-8 flex items-center justify-center text-[#333CA5] font-bold text-sm
}

.pages a:hover {
    @apply bg-[#333CA5] text-white transition duration-500 ease-in-out
}

</style>