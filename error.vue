<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div>
    <PrintJSON :value="error"></PrintJSON>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>
