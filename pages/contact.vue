<template>
    <div class="container space-y-8 flex items-center flex-col">
        <h1 class="text-2xl lg:text-4xl font-medium text-left text-neutral dark:text-base-content">
            Entre em contato
        </h1>
        <div class="container flex justify-center">
            <form class="space-y-4">
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
                <div class="flex items-center justify-center">
                    <button class="btn btn-primary btn-block">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
textarea::placeholder {
    @apply text-base-content
}
</style>