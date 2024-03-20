<template>
    <header class="flex space-x-4">
        <div class="rounded-2xl bg-base-200 p-4 w-1/2 flex justify-center items-center">
            <article class="w-full h-auto flex items-center justify-center">
                <Icon class="h-12 w-auto" name="mdi:face-man-profile" />
            </article>
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