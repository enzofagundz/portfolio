<template>
    <div class="navbar">
        <div class="flex-1">
            <NuxtLink to="/" class="btn btn-ghost text-xl">
                enzo
            </NuxtLink>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
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
                    <details class="dropdown dropdown-end">
                        <summary>
                            Tema
                        </summary>
                        <ul tabindex="0" class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
                            <li><input type="radio" name="theme-dropdown"
                                    class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                    aria-label="Default" value="default" /></li>
                            <li><input type="radio" name="theme-dropdown"
                                    class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                    aria-label="Retro" value="retro" /></li>
                            <li><input type="radio" name="theme-dropdown"
                                    class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                    aria-label="Cyberpunk" value="cyberpunk" /></li>
                            <li><input type="radio" name="theme-dropdown"
                                    class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                    aria-label="Valentine" value="valentine" /></li>
                            <li><input type="radio" name="theme-dropdown"
                                    class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                    aria-label="Aqua" value="aqua" /></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>