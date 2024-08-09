<template>
  <div class="">
    <h2 class="text-left text-lg mb-4 font-semibold">Formação Acadêmica:</h2>
    <div>
      <ul class="space-y-6">
        <li
          v-for="course in education.education"
          :key="course.id"
          class="flex items-center"
        >
          <div class="flex-1 text-sm">
            <span class="mt-2 font-medium">
              {{ course.course }}
            </span>
            <p>{{ course.institution }} - {{ course.period }}</p>
            <p v-if="course.expectedConclusion">
              Previsão de conclusão: {{ course.expectedConclusion }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
const education = useEducation();
</script>
