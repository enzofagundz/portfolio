<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="size">
        <path :fill="color"
            d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7a5 5 0 0 0-5 5a5 5 0 0 0 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8v2m9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1c0 1.71-1.39 3.1-3.1 3.1h-4V17h4a5 5 0 0 0 5-5a5 5 0 0 0-5-5Z">
        </path>
    </svg>
</template>
  
<script setup>

defineProps({
    color: {
        type: String,
        default: '#1e96e6'
    },
    size: {
        type: String,
        default: 'w-5 h-5'
    }
})

</script>

<style scoped>

svg {
    @apply -rotate-45
}

</style>