<template>
    <div class="container space-y-8 flex items-center flex-col justify-between">
        <h1 class="text-2xl lg:text-4xl font-medium text-left text-base-content">
            Entre em contato
        </h1>
        <div class="container space-y-4 max-w-xs">
            <Alert v-show="success" />
            <form :action="formsquashKey" method="POST" class="space-y-4">
                <label class="input input-bordered flex items-center gap-2">
                    Nome
                    <input type="text" class="grow" name="name" />
                </label>
                <label class="input input-bordered flex items-center gap-2">
                    E-mail
                    <input type="text" class="grow" name="email" />
                </label>
                <label class="flex items-center gap-2">
                    <textarea placeholder="Mensagem"
                        class="textarea textarea-bordered textarea-lg w-full max-w-xs resize-none"></textarea>
                </label>
                <input type="hidden" name="_gotcha">
                <div class="flex items-center justify-center">
                    <button class="btn btn-primary btn-block" type="submit">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
const route = useRoute()
const success = ref(route.query.success ? true : false)
const formsquashKey = process.env.FORMSQUASH_KEY
</script>

<style scoped>
textarea::placeholder {
    @apply text-base-content
}
</style>