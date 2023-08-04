<script setup>

</script>

<template>
  <div class="weather-container">
    <p>
      Lins, SP
    </p>
    <h1>
      20<span>°</span>
    </h1>
  </div>
</template>

<style scoped>
.weather-container {
  @apply w-20 h-20 bg-gradient-to-b from-[#454ade] to-[#B8B8FF] rounded-md flex flex-col justify-center items-center
}

h1 {
  @apply text-4xl text-white font-unbounded font-light flex flex-row justify-center
}

p {
  @apply text-white font-sans font-light text-sm
}

span {
  @apply text-2xl
}

@media (min-width: 475px) {
  .weather-container {
    @apply w-16 h-16
  }

  h1 {
    @apply text-3xl
  }
}
</style>