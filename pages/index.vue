<template>
  <div class="flex lg:flex-row flex-col items-center">
    <div class="relative z-0 lg:max-w-[50vw]">
      <div class="lg:w-2/3 w-screen">
        <img
          src="~/assets/images/bg-main-desktop.png"
          alt="background image"
          class="lg:h-screen h-60 w-screen"
        >
      </div>
      <div>
        <div
          class="absolute z-30 lg:top-[23%] lg:left-[24%] top-[56%] left-[10%] lg:w-12 lg:h-12 w-7 h-7 bg-white rounded-full"
        />
        <div
          class="absolute z-30 lg:top-[24.65%] lg:left-[33%] top-[59%] left-[19%] lg:w-5 lg:h-5 w-3 h-3 bg-transparent border border-white rounded-full"
        />
        <img
          src="~/assets/images/bg-card-front.png"
          alt="background card front"
          class="absolute z-20 lg:top-[20%] lg:left-[20%] top-[49.25%] left-[6%] lg:w-[447px] w-[286px] shadow-[0px_39px_60px_0px_rgba(0,_0,_0,_0.1425)]"
        >
      </div>
      <img
        src="~/assets/images/bg-card-back.png"
        alt="background card back"
        class="absolute z-10 lg:top-[50%] lg:left-[34%] top-[12%] left-[25%] lg:w-[447px] w-[286px] shadow-[0px_39px_60px_0px_rgba(0,_0,_0,_0.1425)]"
      >
    </div>
    <div class="flex flex-col mx-24 lg:p-0 pt-20 max-w-sm">
      <FormKit type="form" :actions="false" @submit="submitHandler">
        <FormKit
          id="name"
          type="text"
          name="name"
          label="cardholder name"
          placeholder="e.g. Jane Appleseed"
        />
        <FormKit
          id="number"
          type="number"
          name="number"
          label="card number"
          placeholder="e.g. 1234 5678 9123 0000"
        />
        <div class="flex items-end">
          <FormKit
            id="month"
            type="number"
            name="month"
            label="exp. date"
            placeholder="MM"
            inner-class="w-20"
          />
          <FormKit
            id="year"
            label="(mm/yy)"
            type="number"
            name="year"
            placeholder="YY"
            outer-class="mr-4"
            inner-class="w-20"
          />
          <FormKit
            id="cvc"
            type="number"
            name="cvc"
            label="cvc"
            placeholder="e.g. 123"
            inner-class="w-48"
          />
        </div>
        <FormKit
          type="submit"
          label="Submit"
        />
      </FormKit>
    </div>
  </div>
</template>
<script lang="ts">
const submitHandler = () => {
};
</script>
<script setup lang="ts">
</script>
