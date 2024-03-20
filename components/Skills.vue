<template>
    <div class="flex flex-col items-center space-y-8 justify-center px-4 py-16 bg-base-200 rounded-2xl md:w-1/2 shadow-md">
        <p class="text-center lg:text-lg text-base">
            Enquanto desenvolvedor, tenho habilidades em diversas tecnologias e ferramentas. Veja abaixo algumas delas.
        </p>
        <div>
            <ul class="grid lg:grid-cols-6 gap-4 grid-cols-4">
                <li v-for="skill in skills" :key="skill.id" 
                class="border border-primary rounded-xl p-2 lg:p-4 cursor-pointer hover:border-secondary transition duration-500 ease-in-out flex items-center justify-center text-primary hover:text-secondary">
                    <Icon :name="skill.icon" class="w-6 h-6 lg:w-8 lg:h-8" /> 
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
const store = useSkillStore()
const skills = store.skills
</script>