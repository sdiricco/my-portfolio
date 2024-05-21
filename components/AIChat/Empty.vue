<template>
  <div class="flex h-full align-items-end">
    <div class="grid grid-nogutter w-full px-2">
      <div v-for="message in messages" class="col-12 md:col-6 p-2">
        <div @click="emit('select', message.label)"
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
const { t } = useI18n()

const messages = computed( () => [
  {
    "label": t('AIChat.hints[0]'),
    "icon": "mdi:briefcase-outline",
    "iconColor": "#FF5733"
  },
  {
    "label": t('AIChat.hints[1]'),
    "icon": "ant-design:project-filled",
    "iconColor": "#33C1FF"
  },
  {
    "label": t('AIChat.hints[2]'),
    "icon": "mdi:target",
    "iconColor": "#33FF57"
  },

  {
    "label": t('AIChat.hints[3]'),
    "icon": "mdi:star-outline",
    "iconColor": "#FFC133"
  }
]
)

const emit = defineEmits(['select'])
</script>