<template>
    <div class="flex flex-col" :class="divAlignment">
        <p class="text-sm md:text-base flex items-center" :class="textAlignment">
            <Icon name="ri:mail-fill" />
            <span>enzo.fagundes014@gmail.com</span>
        </p>
        <p class="text-sm md:text-base flex items-center" :class="textAlignment">
            <Icon name="ri:phone-fill" />
            <span>+55 11 9 9999-9999</span>
        </p>
        <p class="text-sm md:text-base flex items-center" :class="textAlignment">
            <Icon name="mdi:location" />
            <span>São Paulo, Brazil</span>
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