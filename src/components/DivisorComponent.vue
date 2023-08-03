<script setup>

const width = window.innerWidth
const items = width > 1024 ? 6 : 3;

const props = defineProps({
    section: {
        type: String,
        required: true
    },
    iconPath: {
        type: String,
        required: true
    }
})

</script>

<template>
    <div class="divisor-container">
        <span
            class="text-wrap"
            v-for="item in items"
            :key="item"
        >
            <img :src="props.iconPath" alt="">
            
            <p>
                {{ props.section }}
            </p>
        </span>
    </div>
</template>

<style scoped>

.divisor-container {
    @apply my-8 flex flex-row justify-between bg-[#26261c]
}

.text-wrap {
    @apply flex flex-row items-center py-2
}

p {
    @apply text-2xl font-raleway text-[#8B8BFF] ml-2
}

img {
    @apply w-4 h-4
}
</style>