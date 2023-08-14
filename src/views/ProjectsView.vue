<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
import { ref } from 'vue';
import { useProjectStore } from '../stores/projects';
import { SectionComponent } from '../components'

const projectStore = useProjectStore();

const projectObj = ref({});

projectStore.projects.forEach(project => {
  if (project.id == route.params.id) {
    projectObj.value = project
  }
})

</script>

<template>
  <article>
      <div class="banner">
        <figure>
          
        </figure>
      </div>
      <header>
        <figure>
          <img :src="projectObj.logoMd" alt="">
        </figure>
        <hgroup>
          <h1>
            {{ projectObj.name }}
          </h1>
          <ul>
            <li
              v-for="(tags, index) in projectObj.tags"
              :key="index"
            >
              {{ tags }}
            </li>
          </ul>
        </hgroup>
      </header>
      <SectionComponent title="Sobre" :content="projectObj.longDesc"/>
      <hr>
      <aside>
        <figure>
          <!-- <img src="" alt=""> -->
          <div class="img">

          </div>
        </figure>
        <figure>
          <!-- <img src="" alt=""> -->
          <div class="img">

          </div>
        </figure>
        <figure>
          <!-- <img src="" alt=""> -->
          <div class="img">

          </div>
        </figure>
        <figure>
          <!-- <img src="" alt=""> -->
          <div class="img">

          </div>
        </figure>
        <figure>
          <!-- <img src="" alt=""> -->
          <div class="img">

          </div>
        </figure>
        <figure>
          <!-- <img src="" alt=""> -->
          <div class="img">

          </div>
        </figure>
      </aside>

      <hr>

      <SectionComponent title="Conclusões" :content="projectObj.longDesc"/>
  </article>
</template>

<style scoped>
article {
  @apply max-w-sm mx-auto mt-4
}

header {
  @apply flex flex-col -mt-[50px] ml-[15px]
}

header figure {
  @apply w-20 h-20
}

header figure img {
  @apply w-full h-auto
}

header hgroup {
  @apply space-y-4
}

header hgroup h1 {
  @apply font-unbounded font-semibold mt-3
}

header hgroup ul {
  @apply flex space-x-2
}

header hgroup ul li {
  @apply bg-[#f9f9f9] rounded-md px-2 py-1 text-[#16161d]
}

hr {
  @apply mx-auto mt-8
}

article aside {
  @apply grid grid-cols-3 gap-4 mt-8
}

article aside figure {
  @apply bg-white rounded-lg border border-[#cdcdcd] h-[150px]
}

.img {
  @apply w-full h-auto
}

.banner {
  @apply w-full bg-[#1d1d16] h-[200px] rounded-lg border border-[#cdcdcd]
}

@media (min-width: 768px) {
  article {
    @apply max-w-lg
  }

  article aside figure {
    @apply h-[200px]
  }
}

@media (min-width: 1024px) {
  article {
    @apply max-w-2xl
  }
}
</style>