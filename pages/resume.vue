<template>
    <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:justify-between">
        <div class="container space-y-2">
            <h1 class="text-2xl lg:text-4xl font-medium text-left text-base-content">
                Enzo Fagundes
            </h1>
            <h2 class="text-xl font-normal">
                Full Stack Developer
            </h2>
            <Contact text-alignment="text-left" div-alignment="items-start" />
        </div>
        <div class="container flex items-center md:justify-end">
            <a 
                href="/pdf/curriculo-enzo-fagundes.pdf" 
                download="curriculo-enzo-fagundes.pdf" 
                class="btn btn-primary">
                <Icon name="heroicons-solid:document-download" class="w-6 h-6" />
                Fazer download do currículo
            </a>
        </div>
    </div>
    <div class="divider"></div>
    <div>
        <h3 class="text-lg font-semibold mb-4">
            Objetivos Profissionais:
        </h3>
        <p class="text-sm">
            Trabalhar com desenvolvimento de software, com foco em qualidade e boas práticas de programação.
        </p>
    </div>
    <Education />
    <WorkExperience />
    <div>
        <h3 class="text-lg mb-4 font-semibold">
            Idiomas
        </h3>
        <div class="text-sm">
            <p>
                Português - Nativo
            </p>
            <p>
                Inglês - B1
            </p>
        </div>
    </div>
    <Activity />
</template>

<script lang="ts" setup>
definePageMeta({
    title: 'Currículo'
})
</script>