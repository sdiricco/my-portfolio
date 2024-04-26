<template>
  <div class="markdown-body">
    <HeaderComponent/>
    <HeroSection/>
    <div class="p-4 bg-white-alpha-10 border-round-top-3xl">
      <slot />
      <div class="pt-6">
        <FooterComponent/>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style>

</style>
