<script setup>

</script>

<template>
    <section id="projects">
        <h1>
            // Projetos
        </h1>
        <aside>
            <nav class="subjects-nav">
                <div>
                    <div>
                        <img src="/img/profile-icon.svg" alt="">
                    </div>
                    <h3>
                        Matéria 1
                    </h3>

                </div>
            </nav>
            <div>
                <div class="story">
                    <nav>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </nav>
                    <div class="h-full carousel">
                        <div class="w-full carousel-item">
                            <img src="https://source.unsplash.com/random" class="w-full"
                                alt="Tailwind CSS Carousel component" />
                        </div>
                        <div class="w-full carousel-item">
                            <img src="https://source.unsplash.com/random" class="w-full"
                                alt="Tailwind CSS Carousel component" />
                        </div>
                        <div class="w-full carousel-item">
                            <img src="https://source.unsplash.com/random" class="w-full"
                                alt="Tailwind CSS Carousel component" />
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    </section>
</template>

<style scoped>
h1 {
    @apply text-5xl text-center font-unbounded text-[#e3e3e3] font-bold
}

aside {
    @apply bg-[#26261c] border-2 border-[#cdcdcd] rounded-lg mt-8
}

.subjects-nav {
    @apply bg-[#1d1d16] border-2 border-b-[#cdcdcd] rounded-lg py-4 flex justify-around rounded-t-lg 
}

.subjects-nav>div {
    @apply flex flex-col items-center 
}

.subjects-nav>div>div {
    @apply w-[3.8rem] h-[3.8rem] rounded-full bg-gradient-to-r from-[#f26800] to-[#fbae17] flex justify-center items-center
}

.subjects-nav>div>div>img {
    @apply w-14 h-14 rounded-full bg-[#afafaf]
}

.subjects-nav>div>h3 {
    @apply text-[#e3d3e3] font-raleway text-sm mt-1
}

.story {
    @apply w-[225px] h-[400px] bg-[#d9d9d9] border border-[#454ade] rounded-lg my-6 mx-auto
}

.story>nav {
    @apply h-[50px] flex justify-around items-center absolute w-[225px]
}

.story>nav>div {
    @apply w-7 h-1 bg-[#909090] rounded-full
}

.carousel {
    @apply rounded-lg
}
</style>