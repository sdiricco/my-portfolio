<template>
  <NuxtLayout>
    <ContentRenderer :key="page._id" :value="page" />
    <PrintJSON :value="page" />
  </NuxtLayout>
</template>

<script setup>
import {useMainStore} from "@/stores/index"
const mainStore = useMainStore()
const router = useRouter()
const {page} = useContent()


router.push(`/${mainStore.language}/portfolio`)

watch(() => mainStore.language, () => {
  router.push(`/${mainStore.language}/portfolio`)
})



</script>

