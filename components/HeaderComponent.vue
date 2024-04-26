<template>
  <!-- ------------------------------------------------------ -->
  <!-- Main container -->
  <!-- ------------------------------------------------------ -->

  <div
    class="p-4 bg-white-alpha-10 flex align-items-center justify-content-between gap-2 sticky top-0 left-0 z-5"
    style="backdrop-filter: blur(8px)"
  >
    <div class="flex">
      <div class="text-2xl font-bold">Simone Di Ricco</div>
    </div>


    <div class="flex gap-1">
      <Icon
        name="emojione:flag-for-italy"
        style="font-size: 2rem"
        class="cursor-pointer"
        @click="mainStore.language = 'it'"
      />
      <Icon
        name="circle-flags:gb"
        style="font-size: 2rem"
        class="cursor-pointer"
        @click="mainStore.language = 'en'"
      />
    </div>
  </div>

  <div class="p-6 bg-white-alpha-10 border-round-bottom-3xl">
    <div class="flex justify-content-center flex-wrap gap-6">
      <!-- Profile photo -->
      <img
        src="/images/my-photo.jpg"
        alt="Profile Photo"
        class="profile-photo"
      />

      <div class="flex flex-column">
        <!--Section Name-->
        <div class="text-5xl font-bold text-special">Simone Di Ricco</div>
        <!--Section Role-->
        <div class="text-xl font-bold mb-4">Front end developer</div>

        <!-- ------------------------------------------------------ -->
        <!--Section Summary-->
        <!-- ------------------------------------------------------ -->
        <section>
          <!--Job description-->
          <div class="flex gap-2 align-items-center mb-1">
            <Icon class="text-2xl" name="material-symbols:work" color="white" />
            <span>
              [2021 - Presente] Front end Developer at Move Solutions
            </span>
          </div>
          <!--Degree description-->
          <div class="flex gap-2 align-items-center">
            <Icon
              class="text-2xl"
              name="icon-park-solid:degree-hat"
              color="white"
            />
            <span>Graduated with Electronic Engineer</span>
          </div>
        </section>


      </div>
    </div>
  </div>
</template>
<script setup>
import { useMainStore } from "@/stores/index";

const mainStore = useMainStore();
</script>

<style scoped>
.profile-photo {
  min-width: 15rem;
  min-height:  15rem;
  width:  15rem;
  height:  15rem;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
