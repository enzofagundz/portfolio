<template>
    <div class="container space-y-8 flex items-center flex-col">
        <h1 class="text-2xl lg:text-4xl font-medium text-left text-base-content">
            Entre em contato
        </h1>
        <div class="container flex justify-center items-center flex-col space-y-4">
            <Alert :response="response" />
            <form class="space-y-4" @submit.prevent="submit">
                <label class="input input-bordered flex items-center gap-2">
                    Nome
                    <input type="text" class="grow" name="name" v-model="name" />
                </label>
                <label class="input input-bordered flex items-center gap-2">
                    E-mail
                    <input type="text" class="grow" name="email" v-model="email" />
                </label>
                <label class="flex items-center gap-2">
                    <textarea placeholder="Mensagem"
                        class="textarea textarea-bordered textarea-lg w-full max-w-xs resize-none"
                        v-model="message"></textarea>
                </label>
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
const name = ref('');
const email = ref('');
const message = ref('');
const response = reactive({
    value: '',
    icon: '',
    message: ''
})

watchEffect(() => {
    if (response.value) {
        name.value = '';
        email.value = '';
        message.value = '';
    }
})

async function submit() {
    try {
        const { body, statusCode } = await $fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                message: message.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        response.value = statusCode === 201 ? 'alert-success' : 'alert-error';
        response.icon = statusCode === 201 ? 'mdi:check-circle' : 'mdi:alert-circle';
        response.message = body.message;
    } catch (error) {
        response.value = 'alert-warning';
        response.icon = 'mdi:alert-circle';
        response.message = "Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde."
    }
}
</script>

<style scoped>
textarea::placeholder {
    @apply text-base-content
}
</style>