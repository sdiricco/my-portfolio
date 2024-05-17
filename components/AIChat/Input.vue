<template>

  <IconField class="w-full">
    <InputIcon class="pi pi-send px-3 cursor-pointer" @click="emit('send')" ></InputIcon>
    <InputText v-model="value" @keyup.enter="emit('send')" class="px-4 py-3 w-full border-round-3xl"
      placeholder="Send a message to AI assistant" />
  </IconField>
</template>

<script setup lang="ts">
import { useVModels } from '@vueuse/core'

interface IProps {
  value: string
}

interface IEmits {
  (e: 'update:value', value: string): void
  (e: 'send'): void
}
const props = defineProps<IProps>()
const emit = defineEmits<IEmits>()

const { value } = useVModels(props, emit)
</script>