<template>
<div class="lg:w-1/2">
        <h2 class="text-left md:text-lg lg:pb-6">
            Formação Acadêmica:
        </h2>
        <div>
            <ul class="space-y-6">
                <li v-for="course in education.education" :key="course.id" class="flex items-center">
                    <div class="flex-1">
                        <span class="mt-2 text-base font-medium">
                            {{ course.course }}
                        </span>
                        <p>
                            {{ course.institution }} - {{ course.period }}
                        </p>
                        <p v-if="course.expectedConclusion">
                            Previsão de conclusão: {{ course.expectedConclusion }}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
const education = useEducation()
</script>