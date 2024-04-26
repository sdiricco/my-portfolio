<template>
  <!-- ------------------------------------------------------ -->
  <!-- Main container -->
  <!-- ------------------------------------------------------ -->

  <div class="p-4 bg-white-alpha-10 border-round-bottom-3xl">
    <div class="flex justify-content-center flex-wrap gap-6">
      <!-- Profile photo -->
      <img
        src="/images/my-photo.jpg"
        alt="Profile Photo"
        class="profile-photo"
      />

      <div class="flex flex-column">
        <!--Section Name-->
        <div class="text-5xl font-bold">Simone Di Ricco</div>
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

        <!-- ------------------------------------------------------ -->
        <!-- Section links -->
        <!-- ------------------------------------------------------ -->
        <div class="flex flex-column mt-4">
          <div class="flex gap-2">
            <a
              href="https://github.com/sdiricco"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon color="#a1f7b9" name="mdi:github" style="font-size: 2rem" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                color="#a1f7b9"
                name="mdi:linkedin"
                style="font-size: 2rem"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>

<style scoped>
.profile-photo {
  min-width: 300px;
  min-height: 300px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
