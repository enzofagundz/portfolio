<template>
    <div class="bg-base-200 rounded-2xl p-4 shadow-md w-1/2">
        <div class="container space-y-4">
            <h2 class="text-3xl font-semibold text-left text-primary">
                <Icon name="mdi:book-open-page-variant" class="h-8 w-auto" />
                <p>
                    Minha formação
                </p>
            </h2>
            <ul class="space-y-4 text-left md:text-lg ">
                <li v-for="edu in education" :key="edu.id">
                    <p class="font-semibold">
                        {{ edu.course }} - {{ edu.institution }}
                    </p>
                    <p>
                        {{ edu.period }}
                    </p>
                    <p v-if="edu.expectedConclusion">
                        Previsão de conclusão: {{ edu.expectedConclusion }}
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
const educationStore = useEducationStore()
const education = educationStore.education
</script>