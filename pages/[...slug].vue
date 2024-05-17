<template>
  <NuxtLayout>
      <ContentRenderer :key="page._id" :value="page" />
  </NuxtLayout>
</template>

<script setup>
import {useMainStore} from "@/stores/index"
const {language} = storeToRefs(useMainStore())
const {page} = useContent()

onMounted(async()=>{
  await navigateTo({ path: `/${language.value}/portfolio` })
})
watch(language,async () => await navigateTo({ path: `/${language.value}/portfolio` }))
</script>



