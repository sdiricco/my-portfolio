<template>
  <div class="card flex justify-content-center">
    <Dropdown
      v-model="selectedCountry"
      :options="countries"
      optionLabel="name"
      placeholder="Select a Country"
      appendTo="self"
      :pt="{
        root: {
          style: 'background:none; border:none'
        },
        panel:{
          style: 'background:#003635; border:none;'
        },
        list:{
          class: 'mb-0'
        }
      }"
    >
      <template #value="{value, placeholder}">
        <div v-if="value" class="flex align-items-center gap-1">
          <Icon :name="value.icon" style="font-size: 1.5rem" />
          <div>{{ value.name }}</div>
        </div>
        <span v-else>
          {{ placeholder }}
        </span>
      </template>
      <template #option="{option}">
        <div class="flex align-items-center gap-1">
          <Icon :name="option.icon" style="font-size: 1.5rem" />
          <div>{{ option.name }}</div>
        </div>
      </template>
    </Dropdown>
  </div>
</template>

<script setup>
import { ref,computed } from "vue";
import {useMainStore} from "@/stores/index"

const mainStore = useMainStore()

const selectedCountry = computed({
  get() {
    return countries.value.find(country => country.code === mainStore.language)
  },
  set(value) {
    mainStore.language = value.code
  }
})
const countries = ref([
  { name: "It", code: "it", icon:"flag:it-4x3" },
  { name: "En", code: "en", icon:"flag:gb-4x3" },
]);
</script>
