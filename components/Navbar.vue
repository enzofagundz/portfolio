<template>
    <div class="navbar bg-base-200 rounded-2xl shadow-md">
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
                <li><a>Contato</a></li>
            </ul>
        </div>
    </div>
</template>