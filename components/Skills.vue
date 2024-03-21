<template>
    <div class="space-y-10">
        <h2 class="text-left md:text-lg">
            Habilidades:
        </h2>
        <div>
            <ul class="grid grid-cols-2 lg:grid-cols-3 gap-y-6 md:px-4">
                <li v-for="skill in skills.skills" :key="skill.id" class="flex items-center">
                    <span class="bg-neutral rounded-full p-2">
                        <Icon :name="skill.icon" class="w-6 h-6 md:w-10 md:h-10 text-base-100 dark:text-neutral-content" />
                    </span>
                    <span class="ml-2 lg:ml-4 text-sm md:text-xl">
                        {{ skill.name }}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
const skills = useSkill()
</script>