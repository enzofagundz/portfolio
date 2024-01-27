<script setup>
import { ref, watch } from 'vue'

const command = ref('')

const enterClicked = () => {
    console.log('enter clicked')
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
    <div>
        <span>></span>
        <!-- <input id="commandInput" x-ref="commandInput" wire:model="command" autocomplete="off"
            wire:keydown.enter="enterClicked"
            @keydown="$event.keyCode === 38 || $event.keyCode == 40 ? $wire.keydown($event.keyCode) : '';"
            x-on:keyup="cmdCount = ($refs.commandInput.value.length)" autofocus="" onblur="this.focus()"
            onfocusout="this.focus()" @click.outside="$refs.commandInput.focus()"> -->
        <input 
            type="text"
            id="commandInput"
            v-model="command"
            autocomplete="off"
            autofocus=""
            @keydown.enter="enterClicked"
            @keydown.up="upClicked"
            @keydown.down="downClicked"
            @keydown.tab="tabClicked"
        />
</div>
</template>

<style scoped>
div {
    @apply flex flex-row items-center space-x-2
}

input {
    caret-shape: block;
    @apply bg-transparent py-2 px-0 dark:text-white border-0 border-transparent outline-transparent outline-0 focus:border-0 focus:outline-none focus:border-transparent focus:shadow-transparent
}
</style>