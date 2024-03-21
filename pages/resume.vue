<template>
    <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:justify-between">
        <div class="container">
            <h1 class="text-4xl font-bold">
                Enzo Fagundes
            </h1>
            <h2 class="text-2xl font-medium">
                Full Stack Developer
            </h2>
        </div>
        <div class="container flex items-center md:justify-end">
            <a 
                href="~/assets/curriculo-enzo-fagundes.pdf" 
                download="curriculo-enzo-fagundes.pdf" 
                class="btn btn-primary">
                <Icon name="heroicons-solid:document-download" class="w-6 h-6" />
                Fazer download do currículo
            </a>
        </div>
    </div>
    <div class="divider"></div>
    <Contact text-alignment="text-left" div-alignment="items-start" />
    <div>
        <h3>
            Objetivos Profissionais:
        </h3>
        <p>
            Trabalhar com desenvolvimento de software, com foco em qualidade e boas práticas de programação.
        </p>
    </div>
    <Education />
    <WorkExperience />
    <div>
        <h3>
            Idiomas
        </h3>
        <p>
            Português - Nativo
        </p>
        <p>
            Inglês - B1
        </p>
    </div>
    <Activity />
</template>

<style scoped>
h3 {
    @apply text-left md:text-lg lg:pb-6;
}
</style>

<script lang="ts" setup>
definePageMeta({
    title: 'Currículo'
})
</script>