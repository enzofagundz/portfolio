<template>
    <div>
        <div class="space-y-4">
            <div class="flex items-center space-x-4">
                <div class="h-14 w-14 rounded-full">
                    <img src="~/assets/img/enzo.webp" alt="Enzo" class="h-14 w-14 rounded-full" />
                </div>
                <div>
                    <h1>
                        Enzo Fagundes
                    </h1>
                    <p>
                        Desenvolvedor web full-stack
                    </p>
                </div>
            </div>
            <h2>
                Desenvolvo aplicativos web e móveis que combinam as melhores práticas de desenvolvimento e design. Acredito no aprendizado contínuo e na colaboração como pilares para o sucesso de qualquer projeto.
            </h2>
            <NuxtLink to="/contact" class="btn btn-primary">
                <Icon name="eva:email-outline" class="w-6 h-6" />
                <span>Contato</span>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
h2 {
    @apply text-base font-medium;
}

h1 {
    @apply text-2xl font-semibold;
}
</style>