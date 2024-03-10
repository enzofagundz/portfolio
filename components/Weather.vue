<template>
    <div class="w-full bg-base-200 rounded-3xl border-2 border-primary">
        <div class="flex items-center justify-center">
            <div class="flex flex-col rounded p-4 w-full max-w-xs">
                <div class="font-bold text-xl">
                    Lins, SP
                </div>
                <div class="text-sm text-gray-500">
                    {{ today }}
                </div>
                <div
                    class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
                    <Icon name="ri:cloudy-fill" />
                </div>
                <div class="flex flex-row items-center justify-center mt-6">
                    <div class="font-medium text-6xl">24°</div>
                    <div class="flex flex-col items-center ml-6">
                        <div>Cloudy</div>
                        <div class="mt-1">
                            <span class="text-sm"><i class="far fa-long-arrow-up"></i></span>
                            <span class="text-sm font-light text-gray-500">28°C</span>
                        </div>
                        <div>
                            <span class="text-sm"><i class="far fa-long-arrow-down"></i></span>
                            <span class="text-sm font-light text-gray-500">20°C</span>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row justify-between mt-6">
                    <div class="flex flex-col items-center">
                        <div class="font-medium text-sm">Wind</div>
                        <div class="text-sm text-gray-500">9k/h</div>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="font-medium text-sm">Humidity</div>
                        <div class="text-sm text-gray-500">68%</div>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="font-medium text-sm">Visibility</div>
                        <div class="text-sm text-gray-500">10km</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const today = new Date().toLocaleDateString();
</script>