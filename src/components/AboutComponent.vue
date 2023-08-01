<script setup>

</script>

<template>
  <header class="banner-container">
    <div>
      <p>
        Sobre
      </p>
      <h1>
        mim
      </h1>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
    </div>
    <div class="btn-container">
      <button>
        <img src="img/arrow-horizontal.svg" alt="">
        Habilidades
      </button>
      <button>
        <img src="img/arrow-horizontal.svg" alt="">
        Trabalhos
      </button>
    </div>
  </header>
  <div class="out-container">
    <button class="out-button">
      <img src="img/arrow-horizontal.svg" alt="">
      Currículo
    </button>
    <hr>
  </div>
</template>

<style scoped>
.banner-container {
    @apply max-w-lg mx-auto bg-[#1D1D16] rounded-lg border-2 border-[#CDCDCD] p-4
}

p {
    @apply text-white font-gothic
}

h1 {
  @apply text-4xl font-unbounded text-white -mt-3 tracking-wider
}

h2 {
  @apply font-gothic text-2xl text-[#CDCDCD]
}

button {
  @apply bg-[#f26800] font-raleway text-white font-extralight text-xl px-4 py-2 rounded-full border border-[#909090] flex items-center
}

button img {
  @apply mr-2
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
</style>