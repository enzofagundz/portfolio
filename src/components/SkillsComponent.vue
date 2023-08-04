<script setup>

</script>

<template>
    <div class="skills-container" id="skills">
        <h1>
            Enquanto <span>desenvolvedor</span>, possuo conhecimentos em:
        </h1>
        <div class="w-full join join-vertical">
            <div class="join-item">
                <div class="text-xl font-medium collapse-title">
                    PHP
                </div>
            </div>
            <div class="join-item">
                <div class="text-xl font-medium collapse-title">
                    SQL
                </div>
            </div>
            <div class="join-item">
                <div class="text-xl font-medium collapse-title">
                    JavaScript
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.skills-container {
    @apply max-w-lg mx-auto mt-8
}

h1 {
    @apply text-4xl font-raleway text-[#e3e3e3] mb-8
}

span {
    @apply text-[#3943B7]
}

.join-item {
    @apply bg-[#1D1D16] border border-[#e3e3e3]
}

@media (min-width: 475px) {
  .skills-container {
    @apply max-w-sm
  }
}

@media (min-width: 1024px) {
    .skills-container {
        @apply max-w-2xl
    }
}
</style>