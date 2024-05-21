<template>
  <div class="p-4">
    <i class="text-base">
      "{{ page.description }}"
    </i>
    <ClientOnly>
      <Amchart5V3 />
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
const {page} = useContent();
</script>
