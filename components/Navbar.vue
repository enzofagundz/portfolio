<template>
    <div class="navbar">
        <div class="flex-1">
            <NuxtLink to="/" class="btn btn-ghost text-xl">
                enzo
            </NuxtLink>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1 space-x-1">
                <li>
                    <NuxtLink to="/resume">
                        Currículo
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contact">
                        Contato
                    </NuxtLink>
                </li>
                <li>
                    <ThemeControl />
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>