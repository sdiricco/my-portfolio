<template>
  <div class="flex h-full align-items-end">
    <div class="grid w-full">
      <div v-for="message in messages" class="col-6">
        <div @click="emit('select', message)"
          class="border-round-xl border-1 surface-border p-4 text-overflow-ellipsis overflow-hidden cursor-pointer hover:surface-hover">
          {{ message }}
        </div>
      </div>

    </div>
  </div>

</template>

<script setup lang="ts">
import { ref } from "vue"

const messages = ref(['Quali erano le tue principali responsabilità nel tuo ultimo lavoro?', 'Puoi descrivere un progetto significativo a cui hai lavorato e il tuo ruolo specifico?', 'Quali sono i tuoi obiettivi a lungo termine nella tua carriera?', 'Quali sono le tue principali motivazioni e cosa ti spinge a dare il meglio?'])

const emit = defineEmits(['select'])
</script>