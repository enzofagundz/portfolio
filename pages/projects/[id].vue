<template>
    <div class="lg:w-1/2 space-y-10">
        <div class="container space-y-2">
            <h1 class="text-2xl lg:text-4xl font-medium text-left text-neutral dark:text-base-content">
                {{ project.title }}
            </h1>
            <p class="text-base font-medium">
                {{ project.description }}
            </p>
            <p class="text-base">
                {{ project.semester }}
            </p>
            <div class="divider"></div>
        </div>
        <div class="container">
            <h2 class="text-base font-medium mb-4">
                Tecnologias usadas:
            </h2>
            <ul>
                <li v-for="(technology, index) in project.technologies" :key="index" class="text-base list-disc ml-4">
                    <p>
                        {{ technology }}
                    </p>
                </li>
            </ul>
        </div>
        <div class="container">
            <h2 class="text-base font-medium mb-2">
                Você pode acessar o projeto em:
            </h2>
            <a :href="project.link" target="_blank" class="btn btn-neutral dark:btn-primary">
                Acesse aqui
                <Icon name="mdi:link" class="w-4 h-4 ml-2" />
            </a>
        </div>
        <div class="container">
            <h2 class="text-base font-medium mb-4">
                As áreas de conhecimento abordadas foram:
            </h2>
            <ul>
                <li v-for="(area, index) in project.areas" :key="index" class="text-gray-500 list-disc ml-4">
                    <p>
                        {{ area }}
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const projectId = Number(route.params.id)
const { project } = useProject(projectId)
definePageMeta({
    title: 'Projeto'
})
</script>

<style scoped></style>