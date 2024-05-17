<template>
  <div class="document-boundaries">

      <HeaderComponent />
      <HeroSection class="markdown-body" />
      <div class="p-4 bg-white-alpha-10 border-round-top-3xl border-round-bottom-3xl">
        <div class="markdown-body">
          <slot />

        </div>
      </div>
    <div class="pt-6">
      <FooterComponent />
    </div>
  </div>

</template>
<script setup></script>
<style scoped>
.document-boundaries {
  margin: auto;
  max-width: 980px;
  min-width: 200px;
}
</style>
