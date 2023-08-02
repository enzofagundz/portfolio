<script setup>

import { RouterView } from 'vue-router'
import { NavbarComponent, FooterComponent } from './components';
</script>

<template>
<NavbarComponent />
  <main>
    <RouterView />
  </main>
<FooterComponent />
</template>

<style scoped>

</style>