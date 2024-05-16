<template>
  <InputGroup>
    <InputText v-model="value" @keyup.enter="emit('send')" class="px-4 py-3 w-full border-round-left-3xl" />
    <Button @click="emit('send')" class="px-4 border-round-right-3xl" icon="pi pi-send"></Button>
  </InputGroup>
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