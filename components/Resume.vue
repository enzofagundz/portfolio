<template>
    <div class="flex flex-col items-center justify-center bg-base-200 rounded-2xl md:w-1/2 py-4 shadow-md">
        <div class="w-20 h-20 bg-primary rounded-full"></div>
        <h1 class="text-2xl font-bold mt-4 text-secondary">
            Enzo Fagundes
        </h1>
        <p class="md:text-lg">
            Full Stack Developer
        </p>
        <div class="flex flex-col items-center mt-4">
            <Contact />
            <NuxtLink to="/resume" class="btn btn-primary mt-4">
                Acesse meu currículo
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped></style>