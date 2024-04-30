<template>
    <div class="lg:w-1/2">
        <h2 class="text-left md:text-lg lg:pb-6">
            Atividades Complementares:
        </h2>
        <div>
            <ul class="space-y-6">
                <li v-for="act in activity.activities" :key="act.id" class="flex flex-col space-y-2">
                    <h3 class="text-left font-medium">
                        {{ act.title }}
                    </h3>
                    <p class="text-left md:text-base">
                        {{ act.institution }}
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
const activity = useActivity()
</script>