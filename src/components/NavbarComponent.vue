<script setup>
</script>

<template>
    <nav>
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </label>
                    <ul tabindex="0"
                        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="https://www.fateclins.edu.br/web/" target="_blank">Fatec</a></li>
                        <li><router-link to="/curriculum">Currículo</router-link></li>
                    </ul>
                </div>
            </div>
            <div class="navbar-center">
                <a class="text-xl normal-case btn btn-ghost"><router-link to="/">Portfólio</router-link></a>
            </div>
            <div class="navbar-end">
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    @apply bg-[#1d1d16] border-2 border-[#cdcdcd] rounded-xl shadow-lg
}

.dropdown > ul {
    @apply bg-[#26261c]
}

nav {
    @apply max-w-sm mx-auto py-8
}

@media (min-width: 768px) {
    nav {
        @apply max-w-lg
    }
}

@media (min-width: 1024px) {
    nav {
        @apply max-w-2xl
    }
}
</style>