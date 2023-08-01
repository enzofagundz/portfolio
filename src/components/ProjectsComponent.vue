<script setup>

</script>

<template>
  <section>
    <h1>
      // Projetos
    </h1>
    <aside>
        <nav class="subjects-nav">
            <div>
                <div>
                    <img src="/img/profile.png" alt="">
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
            </div>
        </div>
    </aside>
  </section>
</template>

<style scoped>
h1 {
    @apply text-5xl text-center font-unbounded text-[#fff] font-bold
}

aside {
    @apply bg-[#26261c] border-2 border-[#cdcdcd] rounded-lg mt-8
}

.subjects-nav {
    @apply bg-[#1d1d16] border-2 border-[#cdcdcd] rounded-lg py-4 flex justify-around
}

.subjects-nav > div {
    @apply flex flex-col items-center
}

.subjects-nav > div > div {
    @apply w-14 h-14 rounded-full 
}

.subjects-nav > div > div > img {
    @apply w-full h-full rounded-full
}

.subjects-nav > div > h3 {
    @apply text-[#fff] font-raleway text-sm mt-1
}

.story {
    @apply w-[225px] h-[400px] bg-[#d9d9d9] border border-[#454ade] rounded-lg my-6 mx-auto
}

.story > nav {
    @apply w-full h-[50px] flex justify-around items-center
}

.story > nav > div {
    @apply w-7 h-1 bg-[#909090] rounded-full
}
</style>