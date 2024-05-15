<template>
    <button class="button-63" role="button" v-bind="attrs">
        <slot/>
    </button>
</template>

<script setup lang="ts">
const attrs = useAttrs();
</script>

<style scoped>
.button-63 {
  padding: 1rem 2rem;
  align-items: center;
  background: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  background-size: 200% 100%;
  animation: gradient-btn 5s ease infinite;
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  justify-content: center;
  max-width: 100%;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  white-space: nowrap;
  cursor: pointer;
}

.button-63:active,
.button-63:hover {
  outline: 0;
}


@keyframes gradient-btn {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

</style>