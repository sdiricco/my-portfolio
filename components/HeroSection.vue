<template>
  <div class="p-4">
    <h1>About Me</h1>
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
