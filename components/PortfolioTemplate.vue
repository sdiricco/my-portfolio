<template>
  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div
      class="py-4 text-center md:text-left border-round bg-cover h-20rem lg:h-30rem flex flex-column justify-content-end mb-5"
      style="background: url('/images/blocks/content/content-4.png')"
    >
      <div class="grid">
        <div class="col lg:col-offset-2 px-5">
          <div class="text-5xl font-bold text-white">
            Create Your Own PrimeBlock with Built-in Dark Mode
          </div>
          <p
            class="line-height-3 text-white text-lg text-center md:text-left mt-3"
          >
            Published May 16, 2022 by Jessica Doe
          </p>
        </div>
      </div>
    </div>
    <div class="grid">
      <div class="col-12 lg:col-2">
        <div
          class="flex flex-row lg:flex-column lg:border-right-1 surface-border gap-5 mb-4 lg:px-5"
        >
          <div
            class="text-900 flex flex-row align-items-center justify-content-end"
          >
            <span class="font-semibold mr-3">71</span>
            <i class="pi pi-bookmark"></i>
          </div>
          <div
            class="text-900 flex flex-row align-items-center justify-content-end"
          >
            <span class="font-semibold mr-3">298</span>
            <i class="pi pi-heart"></i>
          </div>
          <div
            class="text-900 flex flex-row align-items-center justify-content-end"
          >
            <span class="font-semibold mr-3">34</span>
            <i class="pi pi-comments"></i>
          </div>
        </div>
      </div>
      <div class="col-12 lg:col lg:px-5">
        <slot/>
      </div>
      <div class="col-12 lg:col-3 lg:border-left-1 surface-border">
        <div class="p-3">
          <div class="flex border-bottom-1 surface-border pb-4 mb-5">
            <img
              src="/images/blocks/avatars/circle/avatar-f-1.png"
              class="mr-3 h-5rem w-5rem"
            />
            <div class="flex flex-column align-items-start">
              <span class="text-lg text-900 font-medium mb-1">Jessica Doe</span>
              <span class="text-600 font-medium mb-2">1.7K Followers</span>
              <Button
                label="Follow"
                class="p-button-rounded p-button-primary"
              ></Button>
            </div>
          </div>
          <span class="text-900 font-medium text-xl block mb-5"
            >Other Posts</span
          >
          <div class="flex pb-4">
            <img
              src="/images/blocks/content/content-5.png"
              class="mr-3 h-5rem w-5rem"
            />
            <div class="flex flex-column align-items-start">
              <span class="text-lg text-900 font-medium mb-1">Post Title</span>
              <span class="text-600 font-medium mb-2"
                >Metus aliquam eleifend mi in nulla posuere.</span
              >
            </div>
          </div>
          <div class="flex pb-4">
            <img
              src="/images/blocks/content/content-6.png"
              class="mr-3 h-5rem w-5rem"
            />
            <div class="flex flex-column align-items-start">
              <span class="text-lg text-900 font-medium mb-1">Post Title</span>
              <span class="text-600 font-medium mb-2"
                >Metus aliquam eleifend mi in nulla posuere.</span
              >
            </div>
          </div>
          <div class="flex pb-4">
            <img
              src="/images/blocks/content/content-7.png"
              class="mr-3 h-5rem w-5rem"
            />
            <div class="flex flex-column align-items-start">
              <span class="text-lg text-900 font-medium mb-1">Post Title</span>
              <span class="text-600 font-medium mb-2"
                >Metus aliquam eleifend mi in nulla posuere.</span
              >
            </div>
          </div>
          <div class="flex flex-column gap-3">
            <div
              class="w-full h-full p-5 border-round"
              style="
                background: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.4) 0%,
                    #000000 100%
                  ),
                  ('images/blocks/content/content-8.png');
              "
            >
              <span class="text-white font-medium mb-3">Post Title</span>
              <span class="text-white block line-height-3"
                >Metus aliquam eleifend mi innulla posuere.</span
              >
            </div>
            <div
              class="w-full h-full p-5 border-round"
              style="
                background: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.4) 0%,
                    #000000 100%
                  ),
                  ('images/blocks/content/content-9.png');
              "
            >
              <span class="text-white font-medium mb-3">Post Title</span>
              <span class="text-white block line-height-3"
                >Metus aliquam eleifend mi innulla posuere.</span
              >
            </div>
            <div
              class="w-full h-full p-5 border-round"
              style="
                background: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.4) 0%,
                    #000000 100%
                  ),
                  ('images/blocks/content/content-10.png');
              "
            >
              <span class="text-white font-medium mb-3">Post Title</span>
              <span class="text-white block line-height-3"
                >Metus aliquam eleifend mi in nulla posuere.</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
