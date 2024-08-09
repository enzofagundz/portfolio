<template>
  <div>
    <h2 class="text-left text-lg mb-4 font-semibold">
      Atividades Complementares:
    </h2>
    <div>
      <ul class="space-y-6">
        <li
          v-for="act in activity.activities"
          :key="act.id"
          class="flex flex-col space-y-2"
        >
          <h3 class="text-left font-medium">
            {{ act.title }}
          </h3>
          <p class="text-left text-sm">
            {{ act.institution }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
const activity = useActivity();
</script>
