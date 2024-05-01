<template>
  <div class="p-4">
    <div class="text-6xl font-bold text-special">Vue.js Developer</div>
    <p>
      {{ page.description }}
    </p>
    <ClientOnly>
      <Amchart5V3 />
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
const {page} = useContent();
</script>
