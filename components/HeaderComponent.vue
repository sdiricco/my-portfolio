<template>
  <!-- ------------------------------------------------------ -->
  <!-- Main container -->
  <!-- ------------------------------------------------------ -->

  <div class="py-3 px-4 bg-white-alpha-10 flex align-items-center justify-content-between gap-2 sticky top-0 left-0 z-5"
    style="backdrop-filter: blur(2rem)">
    <div class="flex">
      <div class="text-2xl font-bold">{{ page.author }}</div>
    </div>
    <LanguageSelector />
  </div>

  <div class="p-6 bg-white-alpha-10 border-round-bottom-3xl">
    <div class="flex justify-content-center flex-wrap gap-6">
      <!-- Profile photo -->
      <img src="/images/my-photo.jpg" alt="Profile Photo" class="profile-photo" />

      <div class="flex flex-column">
        <!--Section Name-->
        <div class="text-5xl font-bold text-special">{{ page.author }}</div>
        <!--Section Role-->
        <div class="text-xl font-bold mb-4">{{ page.role }}</div>

        <!-- ------------------------------------------------------ -->
        <!--Section Summary-->
        <!-- ------------------------------------------------------ -->
        <section>
          <!--Job description-->
          <div class="flex gap-2 align-items-center mb-1">
            <Icon class="text-2xl" name="material-symbols:work" color="white" />
            <span>
              {{ page.lastJob }}
            </span>
          </div>
          <!--Degree description-->
          <div class="flex gap-2 align-items-center mb-4">
            <Icon class="text-2xl" name="icon-park-solid:degree-hat" color="white" />
            <span>{{ page.school }}</span>
          </div>
          <!--Request AI Chat-->
          <div>
            <AIChatButton @click="AiChatDialogVisibility = true">
              <span class="font-bold text-xl mr-2">Chat AI</span>
              <Icon name="hugeicons:ai-network" style="font-size: 2rem; " />
            </AIChatButton>
          </div>
        </section>


      </div>
    </div>
    <!--AI Dialog-->
    <div>
      <AppDialog v-model:visible="AiChatDialogVisibility" header="AI Chat" :fullscreen="true"
        >
        <AIChatRoot />
      </AppDialog>
    </div>
  </div>
</template>
<script setup lang="ts">
const { page } = useContent();
const AiChatDialogVisibility = ref(false)
</script>

<style scoped>
.profile-photo {
  min-width: 15rem;
  min-height: 15rem;
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
