<script setup>

import { HeaderComponent, LinksComponent, AboutComponent, DivisorComponent, SkillsComponent,
CurriculumComponent, ProjectsComponent } from '../components/';

</script>

<template>
    <HeaderComponent />
    <section>
      <LinksComponent />
    </section>
    <hr>
    <section>
      <AboutComponent />
    </section>
    <DivisorComponent section="Habilidades" icon-path="../../public/img/skills.svg"/>
    <SkillsComponent />
    <div class="scroll-container">
      <p>
        Scroll
      </p>
      <div class="scroll">
        <div class="scroll-ball"></div>
      </div>
    </div>
    <CurriculumComponent />
    <DivisorComponent section="Projetos" icon-path="../../public/img/projects.svg"/>
    <ProjectsComponent />
</template>

<style scoped>
section {
  @apply max-w-lg mx-auto mt-4
}

hr {
  @apply border border-[#CDCDCD] mx-auto mt-6 w-[384px] 
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

@media (min-width: 1024px) {
  section {
    @apply max-w-2xl mt-8
  }

  hr {
    @apply w-[544px] mt-8
  }
}

@media (min-width: 475px) {
  section {
    @apply max-w-sm
  }
}
</style>