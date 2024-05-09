<template>
    <div class="flex flex-col items-center h-screen">
        <div class="md:w-1/2 mt-4 flex flex-col h-full">
            <Navbar />
            <main class="flex flex-col space-y-10 px-6 font-[Montserrat] py-14">
                <slot />
            </main>
            <div class="mt-auto">
                <Footer />
            </div>
        </div>
        <SpeedInsights />
    </div>
</template>

<script lang="ts" setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>