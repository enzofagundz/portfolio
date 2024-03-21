<template>
    <header class="flex space-x-4">
        <div class="rounded-2xl bg-base-200 p-4 w-1/2 flex justify-center items-center">
            <figure class="w-full h-auto flex items-center justify-center">
                <NuxtImg src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Enzo Fagundes" class="rounded-xl w-full h-1/3" />
            </figure>
        </div>
        <div class="rounded-2xl p-4 bg-base-200 w-1/2 space-y-4">
            <article class="container mx-auto">
                <h1 class="text-3xl font-semibold text-left text-primary">
                    <Icon name="ri:file-user-fill" class="h-8 w-auto"/>
                    <p>
                        Enzo Fagundes
                    </p>
                </h1>
                <p class="text-lg font-light">
                    Fullstack Developer
                </p>
            </article>
            <Contact textAlignment="text-left" divAlignment="items-start space-y-2" />
        </div>
    </header>
</template>