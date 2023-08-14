<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})
</script>

<template>
  <section>
    <h2>
      {{ props.title }}
    </h2>
    <p>
      {{ props.content }}
    </p>
  </section>
</template>

<style scoped>
section h2 {
  @apply font-unbounded mt-8
}

section p {
  @apply font-raleway text-sm mt-2 text-justify
}
</style>