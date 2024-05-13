<template>
    <div class="flex flex-column justify-content-center">
        <AIChatRoot></AIChatRoot>
        <div>
            <Button @click="goToCv">Vai al cv tradizionale</Button>

        </div>
    </div>
</template>

<script setup lang="ts">
import {useMainStore} from "@/stores/index"
const {language} = storeToRefs(useMainStore())

async function goToCv(){
  await navigateTo({ path: `/${language.value}/portfolio` })
}

</script>
