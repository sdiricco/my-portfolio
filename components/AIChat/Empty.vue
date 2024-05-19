<template>
  <div class="flex h-full align-items-end">
    <div class="grid grid-nogutter w-full px-2">
      <div v-for="message in messages" class="col-12 md:col-6 p-2">
        <div @click="emit('select', message)"
          class="border-round-xl border-1 surface-border p-4 text-overflow-ellipsis overflow-hidden cursor-pointer hover:surface-hover flex flex-column gap-2 align-items-start">
          <Icon :name="message.icon" :style="{ 'font-size': '1.5rem', color: message.iconColor}" />
          {{ message.label }}
        </div>
      </div>

    </div>
  </div>

</template>

<script setup lang="ts">
import { ref } from "vue"

const messages = ref([
  {
    "label": "Quali erano le tue principali responsabilità nel tuo ultimo lavoro?",
    "icon": "mdi:briefcase-outline",
    "iconColor": "#FF5733"
  },
  {
    "label": "Puoi descrivere un progetto significativo a cui hai lavorato e il tuo ruolo specifico?",
    "icon": "ant-design:project-filled",
    "iconColor": "#33C1FF"
  },
  {
    "label": "Quali sono i tuoi obiettivi a lungo termine nella tua carriera?",
    "icon": "mdi:target",
    "iconColor": "#33FF57"
  },

  {
    "label": "Quali sono le tue principali motivazioni e cosa ti spinge a dare il meglio?",
    "icon": "mdi:star-outline",
    "iconColor": "#FFC133"
  }
]
)

const emit = defineEmits(['select'])
</script>