<template>
    <div class="flex flex-col" :class="divAlignment">
        <p v-if="infos.email" class="text-sm md:text-base flex items-center" :class="textAlignment">
            <Icon name="ri:mail-fill" />
            <span>
                {{ infos.email }}
            </span>
        </p>
        <p class="text-sm md:text-base flex items-center" :class="textAlignment" v-if="infos.phoneNumber">
            <Icon name="ri:phone-fill" />
            <span>+55 {{ infos.phoneNumber }}</span>
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

const infos = reactive({
    phoneNumber: '',
    email: ''
}) as Info

interface Info {
    phoneNumber: string | undefined
    email: string | undefined
}

onMounted(() => {
    infos.phoneNumber = process.env.PHONE_NUMBER
    infos.email = process.env.EMAIL
})
</script>

<style scoped>
span {
    @apply ml-2;
}
</style>