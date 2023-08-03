<script setup>

</script>

<template>
  <section id="curriculum">
    <div>
      <img src="img/folder-icon.png" alt="">
      <h3>
        Currículo
      </h3>
    </div>
    <div>
      <h1>
        Olá, tudo bem?
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellat architecto, veritatis molestias accusantium tenetur labore. Aspernatur nesciunt praesentium nostrum voluptatum veritatis aliquam hic, quibusdam odit beatae consequatur tempore explicabo.
      </p>
      <router-link to="/curriculum">
        <span>
          <img src="img/arrow-horizontal.svg" alt="">
        </span>
        Ver currículo completo
      </router-link>
    </div>
  </section>
</template>

<style scoped>
section {
  @apply bg-[#26261c] rounded-lg border-2 border-[#cdcdcd] mt-8
}

section div:first-child {
  @apply border-b-2 border-[#454ade] font-unbounded text-base text-[#454ade] flex items-center justify-center p-4
}

section div:first-child img {
  @apply w-6 h-6 mr-2
}

section div:last-child {
  @apply p-4 flex flex-col
}

section div:last-child h1 {
  @apply text-2xl font-bold text-[#454ade] font-raleway mb-4
}

section div:last-child p {
  @apply text-base text-[#cdcdcd] font-raleway mb-4 
}

section div:last-child a {
  @apply border-2 border-[#e3e3e3] rounded-full px-2 py-3 text-base text-[#e3e3e3] font-raleway self-center flex items-center justify-center
}

section div:last-child a span {
  @apply w-3 h-3 mr-2
}

</style>