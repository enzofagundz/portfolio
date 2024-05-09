<template>
    <div class="space-y-6">
        <h2 class="text-left md:text-lg font-semibold">
            Habilidades:
        </h2>
        <div>
            <ul class="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <li v-for="skill in skills.skills" :key="skill.id" class="flex items-center">
                    <span class="p-2 rounded-md border border-primary">
                        <Icon :name="skill.icon" class="w-6 h-6 text-primary" />
                    </span>
                    <span class="ml-2 lg:ml-4 text-base">
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