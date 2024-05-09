<template>
    <div>
        <div v-if="!project" class="container">
            "Carregando...
        </div>
        <div class="container space-y-10" v-else>
            <div class="container space-y-2">
                <h1 class="text-2xl lg:text-4xl font-medium text-left text-base-content">
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
            <div class="container space-y-8">
                <p class="text-base mb-4 text-justify indent-8">
                    <ContentQuery path="/projects" :where="{ id: projectId }" v-slot="{ data }">
                        <ContentRenderer :content="data">
                            {{ data[0].description }}
                        </ContentRenderer>
                    </ContentQuery>
                </p>
                <div>
                    <h2 class="text-lg font-medium mb-4">
                        Tecnologias usadas:
                    </h2>
                    <ul>
                        <li v-for="(technology, index) in project.technologies" :key="index"
                            class="text-base list-disc ml-4">
                            <p>
                                {{ technology }}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="container">
                <h2 class="text-lg font-medium mb-4">
                    Você pode acessar o projeto em:
                </h2>
                <a :href="project.link" target="_blank" class="btn btn-neutral dark:btn-primary">
                    Acesse aqui
                    <Icon name="mdi:link" class="w-4 h-4 ml-2" />
                </a>
            </div>
            <div class="container">
                <h2 class="text-lg font-medium mb-4">
                    As áreas de conhecimento abordadas foram:
                </h2>
                <ul>
                    <li v-for="(area, index) in project.areas" :key="index" class="list-disc ml-4">
                        <p>
                            {{ area }}
                        </p>
                    </li>
                </ul>
            </div>
            <div class="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box"
                v-if="project.quantityImages > 0">
                <div class="carousel-item w-full flex justify-center" v-for="n in project.quantityImages" :key="n">
                    <LazyNuxtImg :src="`/img/projects/${project.folder}/${n}.png`" alt="Imagem do projeto" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    title: 'Projeto',
    description: 'Conheça mais sobre o projeto',
})

const route = useRoute()
const projectId = Number(route.params.id)

const projectsComposable = useProject()
const project = projectsComposable.getProjectById(projectId)
</script>

<style scoped></style>