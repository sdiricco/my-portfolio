<template>
    <div class="flex flex-wrap gap-1">
      <Tag v-for="(item, index) in items" :key="index" :value="item"  ></Tag>
    </div>
</template>

<script setup>
defineProps(['items'])
</script>

