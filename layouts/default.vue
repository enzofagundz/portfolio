<template>
    <div class="flex flex-col min-h-screen items-center">
        <div class="md:w-1/2 mt-4">
            <Navbar />
            <main class="flex flex-col space-y-10 px-6 font-[Montserrat] py-14">
                <slot />
            </main>
            <div class="mt-auto">
                <Footer />
            </div>
        </div>
    </div>
</template>