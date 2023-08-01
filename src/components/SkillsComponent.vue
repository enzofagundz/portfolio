<script setup>

</script>

<template>
    <div class="skills-container">
        <h1>
            Enquanto <span>desenvolvedor</span>, possuo conhecimentos em:
        </h1>
        <div class="w-full join join-vertical">
            <div class="border collapse collapse-arrow join-item">
                <input type="radio" name="my-accordion-4" checked="checked" />
                <div class="text-xl font-medium collapse-title">
                    PHP
                </div>
                <div class="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div class="border collapse collapse-arrow join-item">
                <input type="radio" name="my-accordion-4" />
                <div class="text-xl font-medium collapse-title">
                    SQL
                </div>
                <div class="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div class="border collapse collapse-arrow join-item">
                <input type="radio" name="my-accordion-4" />
                <div class="text-xl font-medium collapse-title">
                    JavaScript
                </div>
                <div class="collapse-content">
                    <p>hello</p>
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
    @apply text-4xl font-raleway text-[#f9f9f9] mb-8
}

span {
    @apply text-[#3943B7]
}

.collapse {
    @apply bg-[#1D1D16]
}
</style>