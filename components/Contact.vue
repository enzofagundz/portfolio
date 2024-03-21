<template>
    <div class="flex flex-col" :class="divAlignment">
        <p class="text-sm md:text-base flex items-center" :class="textAlignment">
            <Icon name="ri:mail-fill" />
            <span>
                {{ email }}
            </span>
        </p>
        <p class="text-sm md:text-base flex items-center" :class="textAlignment">
            <Icon name="ri:phone-fill" />
            <span>+55 {{ phoneNumber }}</span>
        </p>
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

const phoneNumber = process.env.PHONE_NUMBER
const email = process.env.EMAIL
</script>

<style scoped>
span {
    @apply ml-2;
}
</style>