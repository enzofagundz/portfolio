<template>
    <div class="lg:w-1/2">
        <h2 class="text-left md:text-lg lg:pb-6">
            Projetos:
        </h2>
        <div>
            <ul>
                <li v-for="project in projectsComposable.projects.value" :key="project.id"
                    class="flex items-center hover:bg-base-200 py-6 md:px-2 rounded-lg cursor-pointer">
                    <NuxtLink :to="`/projects/${project.id}`" class="flex items-center">
                        <div class="bg-neutral h-16 w-16 rounded-full"></div>
                        <div class="flex-1 ml-4">
                            <span class="mt-2 text-base md:text-xl">
                                {{ project.title }}
                            </span>
                            <p>
                                {{ project.description }}
                            </p>
                        </div>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
const projectsComposable = useProject();
</script>

<style></style>