<template>
  <div class="font-chinese antialiased">
    <div class="min-h-screen">
      <Navbar />
      <RouterView />
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script setup lang="ts">
import Navbar from "./Navbar/index.vue";
</script>

<style scoped></style>
