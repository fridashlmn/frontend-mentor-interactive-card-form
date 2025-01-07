<template>
  <div class="flex lg:flex-row flex-col">
    <div class="relative z-0">
      <div class="lg:w-1/3 w-screen">
        <img
            src="~/assets/images/bg-main-desktop.png"
            alt="background image"
            class="lg:h-screen h-60 w-screen"
        >
      </div>
      <div>
        <div
            class="absolute z-30 lg:top-[23%] lg:left-[10%] top-[56%] left-[10%] lg:w-12 lg:h-12 w-7 h-7 bg-white rounded-full"
        />
        <div
            class="absolute z-30 lg:top-[24.65%] lg:left-[15%] top-[59%] left-[19%] lg:w-5 lg:h-5 w-3 h-3 bg-transparent border border-white rounded-full"
        />
        <img
            src="~/assets/images/bg-card-front.png"
            alt="background card front"
            class="absolute z-20 lg:top-[20%] lg:left-[8%] top-[49.25%] left-[6%] lg:w-[447px] w-[286px]"
        >
      </div>
      <img
          src="~/assets/images/bg-card-back.png"
          alt="background card back"
          class="absolute z-10 lg:top-[50%] lg:left-[15%] top-[12%] left-[25%] lg:w-[447px] w-[286px]"
      >
    </div>
    <div>
      <FormKit
          id="name"
          type="text"
          name="name"
          label="Name"
          help="Your full name"
          placeholder="“Jon Doe”"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
//import FormKit from '@formkit/nuxt'

</script>
