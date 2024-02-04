<script setup>
import { ref } from 'vue'
import { useCommandsStore } from "~/stores/commands";

const commandsStore = useCommandsStore()
const commandsGetByCommandStore = commandsStore.getCommands
const command = ref('')

const enterClicked = () => {
    commandsGetByCommandStore.forEach((item) => {
        if (command.value === item) {
            command.value = ''
        }
    })
}

const upClicked = () => {
    console.log('up clicked')
}

const downClicked = () => {
    console.log('down clicked')
}

const tabClicked = () => {
    console.log('tab clicked')
}
</script>

<template>
    <section>
        <div>
            <p>
                enzofagundz@root:~$
            </p>
        </div>
        <aside>
            <span>></span>
            <input type="text" id="commandInput" v-model="command" autocomplete="off" autofocus=""
                @keydown.enter="enterClicked" @keydown.up="upClicked" @keydown.down="downClicked"
                @keydown.tab="tabClicked" />
        </aside>
    </section>
</template>

<style scoped>
section {
    @apply flex flex-col justify-center space-y-2
}

aside {
    @apply flex flex-row items-center space-x-2
}

input {
    caret-shape: block;
    @apply bg-transparent py-2 px-0 dark:text-white border-0 border-transparent outline-transparent outline-0 focus:border-0 focus:outline-none focus:border-transparent focus:shadow-transparent w-full
}

p, span {
    @apply font-bold text-primary
}
</style>