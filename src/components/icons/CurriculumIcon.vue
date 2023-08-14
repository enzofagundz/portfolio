<script setup></script>

<template>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path fill="#1D1D16" d="m30 25l-1.414-1.414L26 26.172V18h-2v8.172l-2.586-2.586L20 25l5 5l5-5z"></path>
            <path fill="#1D1D16"
                d="M18 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6v3h2v-5a.91.91 0 0 0-.3-.7l-7-7A.909.909 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h10Zm0-23.6l5.6 5.6H18Z">
            </path>
        </svg>
    </div>
</template>

<style scoped>
div {
    @apply w-[50px] h-[50px] flex flex-row justify-center items-center bg-[#9298DD] rounded-full cursor-pointer
}

svg {
    @apply w-8 h-8
}

@media (min-width: 1024px) {
    svg {
        @apply w-12 h-12
    }

    div {
        @apply w-16 h-16
    }
}
</style>