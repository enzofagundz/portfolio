<script setup>

</script>

<template>
  <header class="banner-container">
    <header class="header-container">
        <h2>
            Olá, eu sou o <span>Enzo</span>
        </h2>
    </header>
    <h1>
        FullStack Developer
    </h1>
  </header>
</template>

<style scoped>
.banner-container {
    @apply max-w-lg mx-auto bg-[#1D1D16] rounded-lg border-2 border-[#CDCDCD] flex flex-col justify-center items-center
}

h1 {
    @apply text-7xl font-extrabold font-sans p-4 tracking-tight
}

.header-container {
    @apply w-full rounded-t-md border-b-2 border-[#CDCDCD] bg-[#1D1D16]
}

h2 {
    @apply text-lg font-gothic p-4
}

span {
    @apply text-[#F26800]
}

@media (min-width: 1024px) {
    .banner-container {
        @apply max-w-2xl
    }

    h1 {
        @apply text-8xl
    }

    h2 {
        @apply text-2xl
    }
}
</style>