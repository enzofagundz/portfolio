<template>
    <div class="lg:w-1/2">
        <h2 class="text-left md:text-lg lg:pb-6">
            Experiência Profissional:
        </h2>
        <div>
            <ul class="space-y-6">
                <li v-for="experience in workExperiences.workExperience" :key="experience.id" class="space-y-1">
                    <h3 class="font-medium">
                        {{ experience.position }}
                    </h3>
                    <p class="text-base">
                        {{ experience.company }}
                    </p>
                    <p class="text-base">
                        {{ experience.period }}
                    </p>
                    <ul>
                        <li v-for="(responsibility, index) in experience.responsibilities" :key="index"
                            class="list-disc list-inside text-sm">
                            {{ responsibility }}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
const workExperiences = useWorkExperience()
</script>