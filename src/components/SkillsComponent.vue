<script setup>

</script>

<template>
    <div class="skills-container" id="skills">
        <h1>
            Enquanto <span>desenvolvedor</span>, possuo conhecimentos em:
        </h1>
        <div class="items-container">
            <div class="item">
                <div>
                    JavaScript
                </div>
            </div>
            <div class="item">
                <div>
                    Vue.js
                </div>
            </div>
            <div class="item">
                <div>
                    Node.js
                </div>
            </div>
            <div class="item">
                <div>
                    PHP
                </div>
            </div>
            <div class="item">
                <div>
                    SQL
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.skills-container {
    @apply max-w-sm mx-auto mt-8
}

h1 {
    @apply text-4xl font-raleway text-[#e3e3e3] mb-8
}

span {
    @apply text-[#333CA5]
}

.item {
    @apply bg-[#1D1D16] border border-[#e3e3e3] rounded-lg p-4 cursor-pointer
}

.item div {
    @apply text-[#e3e3e3] text-xl font-medium
}

.items-container {
    @apply grid grid-cols-2 gap-4
}

.item:hover {
    @apply border-[#333CA5] transition duration-500 ease-in-out
}

.item:hover div{
    @apply text-[#333CA5] transition duration-500 ease-in-out
}

@media (min-width: 768px) {
    .skills-container {
        @apply max-w-lg
    } 
}

@media (min-width: 1024px) {
    .skills-container {
        @apply max-w-2xl
    }
}
</style>