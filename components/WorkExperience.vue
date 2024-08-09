<template>
  <div>
    <h2 class="text-left text-lg mb-4 font-semibold">
      Experiência Profissional:
    </h2>
    <div>
      <ul class="space-y-6">
        <li
          v-for="experience in workExperiences.workExperience"
          :key="experience.id"
          class="space-y-1"
        >
          <h3 class="font-medium mb-3">
            {{ experience.position }}
          </h3>
          <p class="text-sm">
            {{ experience.company }}
          </p>
          <p class="text-sm">
            {{ experience.period }}
          </p>
          <ul class="space-y-2">
            <li
              v-for="(responsibility, index) in experience.responsibilities"
              :key="index"
              class="list-disc list-inside text-sm"
            >
              {{ responsibility }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
const workExperiences = useWorkExperience();
</script>
