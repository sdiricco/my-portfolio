<template>
  <div class="flex align-items-start gap-3 pt-6 pb-3">
    <a :href="href">
      <img :src="logo" alt="logo" class="img" />

    </a>
    <div>
      <div class="font-bold text-2xl mb-1 text-special">{{ `${role} - ${name}` }}</div>
      <div class="text-sm text-500 mb-1">{{ period }}</div>
      <div class="text-sm text-500 mb-1">{{ city }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps(['logo', 'href', 'role', 'name', 'period', 'city']);
</script>

<style scoped>
.img{
  width: 4rem;
  height: 4rem;
  max-width: 4rem;
  max-height: 4rem;
  min-height: 4rem;
  min-width: 4rem;
  border-radius: 50%;
}
</style>
