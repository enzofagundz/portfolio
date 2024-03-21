<template>
    <div class="flex flex-col min-h-screen">
        <Navbar />
        <main class="flex flex-col space-y-10 md:py-24 px-6 font-[Inter] md:px-12 lg:px-20 py-14">
            <slot />
        </main>
        <div class="mt-auto">
            <Footer />
        </div>
    </div>
</template>