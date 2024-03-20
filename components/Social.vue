<template>
    <div class="rounded-2xl w-1/3 shadow-md bg-base-200">
        <ul class="space-y-4 md:space-y-0 md:space-x-4 py-4 px-2 flex flex-col items-center justify-center h-full md:flex-row">
            <li>
                <a>
                    <Icon name="mingcute:github-fill" />
                </a>
            </li>
            <li>
                <a>
                    <Icon name="ri:linkedin-fill"></Icon>
                </a>
            </li>
            <li>
                <a>
                    <Icon name="material-symbols:download"></Icon>
                </a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
li {
    @apply btn btn-primary btn-circle
}

a {
    @apply p-3 flex items-center justify-center w-full h-full text-2xl
}
</style>
