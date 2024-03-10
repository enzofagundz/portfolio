<template>
    <div>
        <ul>
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
ul {
    @apply space-x-4 bg-base-200 rounded-3xl py-4 px-2 flex items-center justify-center h-full
}

li {
    @apply btn btn-primary btn-circle
}

a {
    @apply p-3 flex items-center justify-center w-full h-full text-2xl
}

div {
    @apply rounded-3xl shadow-sm w-1/3 border-2 border-neutral
}
</style>
