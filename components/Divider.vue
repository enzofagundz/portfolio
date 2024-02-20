<template>
    <div class="w-full bg-secondary flex items-center justify-between rounded-lg md:h-8">
        <div
            v-for="i in 3"
            class="scrolling-div w-full flex items-center space-x-2"
        >
            <Icon :name="icon" class="text-base-100" />
            <span class="text-base-100">{{ text }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
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
    animation: scroll 10s linear infinite;
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