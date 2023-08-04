<script setup>

</script>

<template>
  <header class="banner-container" id="about">
    <div>
      <p>
        Sobre
      </p>
      <h1>
        mim
      </h1>
      <h2>
        Para me conhecer melhor, veja minhas habilidades, trabalhos e currículo.
      </h2>
    </div>
    <div class="btn-container">
      <button>
        <img src="img/arrow-horizontal.svg" alt="">
        <router-link :to="{path: '/', hash: '#skills'}">Habilidades</router-link>
      </button>
      <button>
        <img src="img/arrow-horizontal.svg" alt="">
        <router-link :to="{path: '/', hash: '#projects'}">Trabalhos</router-link>
      </button>
    </div>
  </header>
  <div class="out-container">
    <button class="out-button">
      <img src="img/arrow-horizontal.svg" alt="">
      <router-link :to="{path: '/', hash: '#curriculum'}">Currículo</router-link>
    </button>
    <hr>
  </div>
</template>

<style scoped>
.banner-container {
    @apply max-w-lg mx-auto bg-[#1D1D16] rounded-lg border-2 border-[#CDCDCD] p-4
}

p {
    @apply text-[#e3e3e3] font-gothic
}

h1 {
  @apply text-4xl font-unbounded text-[#e3e3e3] -mt-3 tracking-wider
}

h2 {
  @apply font-gothic text-2xl text-[#CDCDCD]
}

button {
  @apply bg-[#f26800] font-raleway text-white font-extralight text-xl px-4 py-2 rounded-full border border-[#e3e3e3] flex items-center 
}

button img {
  @apply mr-2 rotate-90
}
.btn-container {
  @apply flex flex-col mt-4 items-start
}
/* Selecionar o primeiro botão dentro do .btn-container */

.btn-container button:first-child {
  @apply mb-[10px]
}

/* Selecionar o segundo botão dentro do .btn-container */

.btn-container button:nth-child(2) {
  @apply mb-[5px]
}

.out-button {
  @apply ml-4 -mt-[15px] w-[180px]
}

.out-container {
  @apply flex
}

hr {
  @apply border-[#CDCDCD] border-t-2 w-full mt-3 ml-2
}

@media (min-width: 475px) {
  button {
    @apply text-lg
  }
}

@media (min-width: 1024px) {
  .banner-container {
    @apply max-w-2xl
  }
}
</style>