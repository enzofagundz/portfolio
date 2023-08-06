<script setup>

</script>

<template>
  <section id="curriculum">
    <header>
      <img src="../../public/img/folder-icon.png" alt="">
      <h1>
        Currículo
      </h1>
    </header>
    <div>
      <h1>
        Olá, tudo bem?
      </h1>
      <p>
        Sou um desenvolvedor web full stack com paixão por tecnologia e design. 
      </p>
      <p>
        Tenho experiência em gestão de redes sociais, produção de conteúdo e design gráfico, além de formação em Sistemas para Internet e Administração. Possuo vários cursos complementares em áreas relacionadas ao desenvolvimento web e ao marketing digital. Estou em busca de novos desafios e oportunidades na minha área de atuação.
      </p>
      <p>
        Sou um profissional dedicado, criativo e comprometido com a qualidade dos meus projetos, que está sempre se atualizando e aprendendo coisas novas.
      </p>
      <router-link to="/curriculum">
        <span>
          <img src="../../public/img/arrow-horizontal.svg" alt="">
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

section header {
  @apply border-b-2 border-[#454ade] font-unbounded text-base text-[#454ade] flex items-center justify-center p-4
}

section header img {
  @apply w-6 h-6 mr-2
}

section div {
  @apply p-4 flex flex-col
}

section div h1 {
  @apply text-2xl font-bold text-[#454ade] font-raleway mb-4
}

section div p {
  @apply text-base text-[#cdcdcd] font-raleway mb-4 
}

section div a {
  @apply border-2 border-[#e3e3e3] rounded-full px-2 py-3 text-base text-[#e3e3e3] font-raleway self-center flex items-center justify-center
}

section div a span {
  @apply w-3 h-3 mr-2
}

</style>