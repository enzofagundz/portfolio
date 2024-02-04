import { defineStore } from "pinia"

export const useCommandsStore = defineStore({
    id: "commands",
    state: () => ({
        commands: [
            "help",
            "ls",
        ],
    }),
    getters: {
        getCommands(): string[]
        {
            return this.commands;
        },
    }
});