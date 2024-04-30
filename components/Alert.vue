<template>
    <div role="alert" class="alert max-w-xs" v-if="response?.value" :class="response?.value">
        <Icon :name="response?.icon" class="w-6 h-6" />
        <span>{{ response?.message }}</span>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    response: Object as PropType<{
        value: string;
        icon: string;
        message: string;
    }>
})
</script>

<style></style>