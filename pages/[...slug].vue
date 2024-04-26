<template>
  <NuxtLayout>
    <ContentDoc :path="`/${mainStore.language}/portfolio`" />
  </NuxtLayout>
</template>

<script setup>
import {useMainStore} from "@/stores/index"
const mainStore = useMainStore()
</script>
