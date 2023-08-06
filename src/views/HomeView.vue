<script setup>

import { HeaderComponent, LinksComponent, AboutComponent, DivisorComponent, SkillsComponent,
CurriculumComponent, ProjectsComponent } from '../components/';

</script>

<template>
    <HeaderComponent data-aos="fade-up"/>
    <section data-aos="fade-up">
      <LinksComponent />
    </section>
    <hr data-aos="fade-up">
    <section data-aos="fade-up">
      <AboutComponent />
    </section>
    <DivisorComponent section="Habilidades" icon-path="/img/skills.svg"/>
    <SkillsComponent data-aos="fade-up"/>
    <div class="scroll-container" data-aos="fade-up">
      <p>
        Scroll
      </p>
      <div class="scroll">
        <div class="scroll-ball"></div>
      </div>
    </div>
    <CurriculumComponent data-aos="fade-up" />
    <DivisorComponent section="Projetos" icon-path="/img/projects.svg"/>
    <ProjectsComponent data-aos="fade-up"/>
</template>

<style scoped>
section {
  @apply max-w-sm mx-auto mt-4
}

hr {
  @apply border border-[#CDCDCD] mx-auto my-6 max-w-xs
}

.scroll-ball {
  @apply w-4 h-4 bg-[#f26800] rounded-full left-0 bottom-0 relative animate-bounce
}

.scroll {
  @apply w-8 h-12 rounded-full mx-auto mt-4 border border-[#d4d4d4] flex justify-center py-2 items-end
}

.scroll-container {
  @apply w-full flex flex-col items-center mt-8
}

@media (min-width: 768px) {
  section {
    @apply max-w-lg
  }

  hr {
    @apply max-w-md
  }
}

@media (min-width: 1024px) {
  section {
    @apply max-w-2xl mt-8
  }

  hr {
    @apply w-[544px] my-8
  }
}
</style>