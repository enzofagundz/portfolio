<script setup>
import { reactive, onMounted } from 'vue';

const API = 'https://api.openweathermap.org/data/2.5/weather?lat=-21.698102001528408&lon=-49.750128943697966&lang=pt_br&appid=22b2a34f9f384824b6e04bee7e91af0b&units=metric'

const weather = reactive({
  info: {
    name: '',
    temp: 0,
    description: ''
  }
})

onMounted(async () => {
  const getWeather = async () => {

    const response = await fetch(API);
    const data = await response.json();

    return await new Promise(resolve => {
      setTimeout(resolve({
        name: data.name,
        temp: parseInt(data.main.temp),
        description: data.weather[0].description
      }), 3000)
    });
  }

  weather.info = await getWeather();
})

</script>

<template>
  <div class="weather-container" v-if="weather.info?.name">
    <p>
      {{ weather.info.name }}, SP
    </p>
    <h1>
      {{ weather.info.temp }}<span>°</span>
    </h1>
    <p>
      {{ weather.info.description }}
    </p>
  </div>
  <div v-else>
    <span class="loading loading-spinner loading-lg"></span>
  </div>
</template>

<style scoped>
.weather-container {
  @apply w-20 h-20 rounded-md flex flex-col justify-center items-center bg-gradient-to-br from-[#1d1d16] to-[#14140f] border-2 border-[#cdcdcd]
}

h1 {
  @apply text-4xl font-unbounded font-light flex flex-row justify-center
}

p {
  @apply font-sans font-bold text-xs text-center
}

span {
  @apply text-xl
}
</style>