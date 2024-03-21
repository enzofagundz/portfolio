<template>
    <div class="flex flex-col" :class="divAlignment">
        <p class="text-sm md:text-base flex items-center" :class="textAlignment">
            <Icon name="mdi:location" />
            <span>Sabino, São Paulo, Brazil</span>
        </p>
    </div>
</template>

<script setup lang="ts">
defineProps({
    textAlignment: String,
    divAlignment: {
        type: String,
        default: 'items-center'
    }
})
</script>

<style scoped>
span {
    @apply ml-2;
}
</style>