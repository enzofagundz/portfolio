<template>
    <div class="w-full bg-secondary flex items-center justify-around rounded-lg md:h-8">
        <div class="scrolling-div w-full flex items-center space-x-2" v-for="i in items">
            <Icon :name="icon" class="text-base-100" />
            <span class="text-base-100">{{ text }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
const items = ref(1)

onMounted(() => {
    items.value = width.value > 768 ? 4 : 1
})

defineProps({
    text: String,
    icon: {
        type: String,
        default: "ri:star-fill",
        required: true
    }
})
</script>

<style scoped>
.scrolling-div {
    overflow: hidden;
    animation: scroll 5s linear infinite;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%);
    }
}
</style>