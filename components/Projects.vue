<template>
    <div class="lg:w-3/4 space-y-4">
        <h2 class="text-left md:text-lg font-semibold">
            Projetos:
        </h2>
        <div>
            <ul>
                <li v-for="project in projectsComposable.projects.value" :key="project.id"
                    class="flex items-center hover:bg-base-200 cursor-pointer p-4">
                    <NuxtLink :to="`/projects/${project.id}`" class="flex items-center">
                        <div class="flex-1 space-y-1">
                            <h3 class="text-base md:text-lg font-medium">
                                {{ project.title }}
                            </h3>
                            <p class="text-sm text-base-content">
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