<template>
    <div class="flex flex-col items-center space-y-8 justify-center px-4 py-16 h-full bg-base-200 rounded-3xl w-1/2 border-2 border-neutral">
        <p class="text-center text-2xl">
            Enquanto desenvolvedor, tenho habilidades em diversas tecnologias e ferramentas. Veja abaixo algumas delas.
        </p>
        <div class="space-y-4 flex flex-col items-center h-full">
            <ul class="grid grid-cols-4 gap-4">
                <li v-for="skill in skills" :key="skill.id" class="border border-secondary rounded-xl p-4 cursor-pointer hover:border-accent transition duration-500 ease-in-out hover:text-accent">
                    <span class="font-medium">
                        {{ skill.name }}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
const store = useSkillStore()
const skills = store.skills
</script>