<script setup>

import { useInformationStore } from '../stores/information';

const informationStore = useInformationStore();
</script>

<template>
  <section>
    <header>
      <div>
        <img src="../../public/img/profile.png" alt="">
      </div>
      <aside>
        <h1>
          Enzo<br>Fagundes
        </h1>
        <h3>
          Desenvolvedor Web
        </h3>
        <p>
          <strong>Telefone:</strong> (14) 99757-2550
        </p>
        <a href="mailto:enzo.fagundes014@gmail.com">
          <strong>E-mail:</strong> enzo.fagundes014@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/enzofagundz" target="_blank"><strong>Linkedin:</strong> @enzofagundz</a>
      </aside>
    </header>
    <hr>
    <div class="join join-vertical">
      <div class="collapse join-item">
        <input type="radio" name="my-accordion-4" checked="checked" />
        <div class="collapse-title">
          Formação acadêmica
        </div>
        <div class="collapse-content">
          <ul v-for="education in informationStore.education" :key="education.id">
            <li>
              <strong>Curso: </strong>{{ education.course }}
            </li>
            <li>
              <strong>Instituição: </strong>{{ education.school }}
            </li>
            <li>
              <strong>Período: </strong>{{ education.period }}
            </li>
            <li v-if="education.status">
              <strong>Previsão de conclusão: </strong>{{ education.status }}
            </li>
          </ul>
        </div>
      </div>
      <div class="collapse join-item">
        <input type="radio" name="my-accordion-4" checked="checked" />
        <div class="collapse-title">
          Experiência Profissional
        </div>
        <div class="collapse-content">
          <ul v-for="experience in informationStore.experience" :key="experience.id">
            <li>
              {{ experience.company }} - {{ experience.position }}
            </li>
            <li>
              <strong>Período: </strong>{{ experience.period }}
            </li>
            <li>
              <strong>Atividades: </strong>{{ experience.responsibilities }}
            </li>
          </ul>
        </div>
      </div>
      <div class="collapse join-item">
        <input type="radio" name="my-accordion-4" checked="checked" />
        <div class="collapse-title">
          Idiomas
        </div>
        <div class="collapse-content">
          <ul v-for="(language, index) in informationStore.languages" :key="index">
            <li>
              {{ language }}
            </li>
          </ul>
        </div>
      </div>
      <div class="collapse join-item">
        <input type="radio" name="my-accordion-4" checked="checked" />
        <div class="collapse-title">
          Atividades Complementares
        </div>
        <div class="collapse-content">
          <ul class="activities">
            <li v-for="activity in informationStore.activities" :key="activity.id">
              {{ activity.title }} - {{ activity.institution }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <footer>
      <a href="/documents/curriculo.pdf" class="icon" download="Currículo Enzo Fagundes">
        <span>
          <img src="../../public/img/arrow-horizontal.svg" alt="">
        </span>
        Baixar currículo em PDF
      </a>
    </footer>
  </section>
</template>

<style scoped>
section {
  @apply mx-auto max-w-lg bg-[#1d1d16] p-4 rounded-xl border-2 border-[#cdcdcd]
}

header {
  @apply flex mb-6
}

header>div>img {
  @apply w-14 h-14 rounded-full
}

header>div {
  @apply mr-4 rounded-full w-20 h-20 flex items-center justify-center border-2 border-[#d9d9d9]
}

header>aside {
  @apply flex flex-col justify-start
}

header>aside>h1 {
  @apply text-4xl font-unbounded font-semibold text-[#d9d9d9]
}

header>aside h3 {
  @apply text-[#d9d9d9] font-unbounded font-light mb-4
}

header>aside p,
a {
  @apply mb-2
}

.join {
  @apply grid grid-cols-2 gap-2 mt-8
}

.collapse-title {
  @apply font-unbounded font-semibold text-[#d9d9d9]
}

.activities {
  @apply list-disc list-inside
}

footer {
  @apply mt-8 flex justify-center
}

footer > a {
  @apply border-2 border-[#e2e2e2] rounded-full px-2 py-3 text-base text-[#e2e2e2] font-raleway flex items-center justify-center
}

footer> a span {
  @apply mr-2
}
</style>