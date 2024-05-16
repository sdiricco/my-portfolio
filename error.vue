<script setup lang="ts">
import type { NuxtError } from '#app'
defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div>
    <PrintJSON :value="error"></PrintJSON>
  </div>
</template>
