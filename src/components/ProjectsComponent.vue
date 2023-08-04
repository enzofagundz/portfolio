<script setup>
import { GithubIcon } from './';

import { useProjectsStore } from '../stores/projects';

const projectsStore = useProjectsStore();
</script>

<template>
    <section id="projects">
        <h1>
            // Projetos
        </h1>
        <nav class="subjects-nav">
            <div v-for="project in projectsStore.projects" :key="project.id" >
                <div>
                    <img src="../../public/img/profile-icon.svg" alt="">
                </div>
                <a :href="`#item${project.id}`">
                    Projeto {{ project.id }}
                </a>
            </div>
        </nav>
        <aside class="w-full carousel">
            <div v-for="project in projectsStore.projects" :key="project.id" :id="`item${project.id}`" class="w-full carousel-item">
                <article class="project">
                    <header>
                        <h2>
                            {{ project.name }}
                        </h2>
                        <p>
                            {{ project.description }}
                        </p>
                    </header>
                    <figure class="img-mockup">
                        <img src="../../public/img/mockup.png" alt="">
                    </figure>
                    <footer>
                        <ul class="tags">
                            <li v-for="(tag, index) in project.tags" :key="index">
                                {{ tag }}
                            </li>
                        </ul>
                        <a :href="project.link" class="github-badge" target="_blank">
                            <GithubIcon color="#e3e3e3" size="w-5" />
                            <span>Github</span>
                        </a>
                    </footer>
                </article>
            </div>
        </aside>
    </section>
</template>

<style scoped>
h1 {
    @apply text-5xl text-center font-unbounded text-[#e3e3e3] font-bold mb-8
}

aside {
    @apply bg-[#26261c] border-2 border-[#cdcdcd] rounded-b-lg flex
}

.subjects-nav {
    @apply bg-[#1d1d16] border-2 border-[#cdcdcd] py-4 flex justify-around rounded-t-lg
}

.subjects-nav>div {
    @apply flex flex-col items-center cursor-pointer
}

.subjects-nav>div>a {
    @apply text-[#e3e3e3] font-raleway text-sm mt-1
}

.subjects-nav>div>div {
    @apply w-[3.8rem] h-[3.8rem] rounded-full bg-gradient-to-r from-[#f26800] to-[#fbae17] flex justify-center items-center
}

.subjects-nav>div>div>img {
    @apply w-14 h-14 rounded-full bg-[#afafaf]
}

.subjects-nav>div>h3 {
    @apply text-[#e3d3e3] font-raleway text-sm mt-1
}

.img-mockup {
    @apply max-w-lg mx-auto
}

.project {
    @apply flex flex-col items-center justify-center p-8
}

.project footer {
    @apply flex flex-col items-center justify-center
}

.github-badge {
    @apply mt-8 flex items-center bg-[#3943B7] font-gothic px-4 py-2 cursor-pointer rounded-full
}

.github-badge span {
    @apply text-[#e3e3e3] font-bold text-sm ml-2 uppercase
}

.tags {
    @apply flex justify-center mt-4
}

.tags li {
    @apply text-[#575742] font-raleway text-sm mr-2 font-semibold
}

.project header {
    @apply text-center
}

.project header h2 {
    @apply text-[#F26800] font-bold text-2xl
}
</style>