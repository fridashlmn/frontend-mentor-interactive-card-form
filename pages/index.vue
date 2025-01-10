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
        <!--big circle-->
        <div
          class="absolute z-30 lg:top-[23%] lg:left-[24%] top-[56%] left-[10%] lg:w-12 lg:h-12 w-7 h-7 bg-white rounded-full"
        />
        <!--small circle-->
        <div
          class="absolute z-30 lg:top-[24.65%] lg:left-[33%] top-[59%] left-[19%] lg:w-5 lg:h-5 w-3 h-3 bg-transparent border border-white rounded-full"
        />
        <img
          src="~/assets/images/bg-card-front.png"
          alt="background card front"
          class="absolute z-20 lg:top-[20%] lg:left-[20%] top-[49.25%] left-[6%] lg:w-[447px] w-[286px] shadow-[0px_39px_60px_0px_rgba(0,_0,_0,_0.1425)]"
        >
        <div
          class="absolute z-20 lg:top-[34%] top-[85%] lg:left-[25%] left-[11%] uppercase text-white tracking-widest font-normal lg:text-2xl text-lg"
        >
          <span v-if="number">
            {{ number }}
          </span>
          <span v-else>0000 0000 0000 0000</span>
        </div>
        <div
          class="absolute z-20 lg:top-[40%] top-[100%] lg:left-[25%] left-[11%] uppercase text-white tracking-widest font-normal lg:text-[16px] text-[9px]"
        >
          <span v-if="name">
            {{ name }}
          </span>
          <span v-else>Jane Appleseed</span>
        </div>
        <div
          class="absolute z-20 lg:top-[40%] top-[100%] lg:left-[70%] left-[63%] uppercase text-white tracking-widest font-normal lg:text-[16px] text-[9px]"
        >
          <span v-if="month">{{ month }}/</span>
          <span v-else>00/</span>
        </div>
        <div
          class="absolute z-20 lg:top-[40%] top-[100%] lg:left-[75%] left-[68%] uppercase text-white tracking-widest font-normal lg:text-[16px] text-[9px]"
        >
          <span v-if="year">
            {{ year }}
          </span>
          <span v-else>00</span>
        </div>
      </div>
      <div>
        <img
          src="~/assets/images/bg-card-back.png"
          alt="background card back"
          class="absolute z-10 lg:top-[50%] lg:left-[34%] top-[12%] left-[25%] lg:w-[447px] w-[286px] shadow-[0px_39px_60px_0px_rgba(0,_0,_0,_0.1425)]"
        >
        <div
          class="absolute z-20 lg:top-[61.5%] top-[41%] lg:left-[85%] left-[80%] tracking-widest font-normal text-white lg:text-[16px] text-[9px]"
        >
          <span v-if="cvc">{{ cvc }}</span>
          <span v-else>000</span>
        </div>
      </div>
    </div>
    <CreditCardForm
      v-if="!showSuccessMessage"
      v-model:card-name="cardholderName"
      v-model:card-number="cardHolderNumber"
      v-model:card-month="cardMonth"
      v-model:card-year="cardYear"
      v-model:card-cvc="cardCvc"
      model-value=""
      @confirm="displaySuccessMessage"
    />
    <div
      v-else
      class="flex flex-col items-center justify-center lg:p-0 pt-20 lg:w-full lg:max-w-none max-w-sm"
    >
      <div
        class="w-20 h-20 bg-gradient-to-r from-gradientBlue to-gradientViolet rounded-[50%]"
      >
        <img src="~/assets/images/icon-complete.svg" alt="icon complete">
      </div>
      <p class="text-[28px] font-medium tracking-widest mt-7 mb-2">
        THANK YOU!
      </p>
      <p class="text-violet-500 mb-5">We've added your card details</p>
      <button
        type="button"
        class="flex items-center justify-center w-80 bg-violet-900 text-[18px] text-white border rounded-lg mt-4 py-3 px-7 appearance-none"
        @click="clearForm"
      >
        Continue
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
const cardholderName = ref<string>();
const cardHolderNumber = ref<string>();
const cardMonth = ref<number>();
const cardYear = ref<number>();
const cardCvc = ref<number>();

const showSuccessMessage = ref(false);

const name = computed({
  get(previous) {
    if (!showSuccessMessage.value) {
      return cardholderName.value;
    }
    return previous;
  },
  set(newValue: string) {
    cardholderName.value = newValue;
  }
});

const number = computed({
  get(previous) {
    if (!showSuccessMessage.value) {
      return cardHolderNumber.value;
    }
    return previous;
  },
  set(newValue: string) {
    cardHolderNumber.value = newValue;
  }
});

const month = computed({
  get(previous) {
    if (!showSuccessMessage.value) {
      return cardMonth.value;
    }
    return previous;
  },
  set(newValue: number) {
    cardMonth.value = newValue;
  }
});

const year = computed({
  get(previous) {
    if (!showSuccessMessage.value) {
      return cardYear.value;
    }
    return previous;
  },
  set(newValue: number) {
    cardYear.value = newValue;
  }
});

const cvc = computed({
  get(previous) {
    if (!showSuccessMessage.value) {
      return cardCvc.value;
    }
    return previous;
  },
  set(newValue: number) {
    cardCvc.value = newValue;
  }
});

function displaySuccessMessage(): void {
  const node = getNode("credit-card-form");
  node?.reset();
  showSuccessMessage.value = true;
}

function clearForm(): void {
  name.value = "";
  number.value = "";
  month.value = 0;
  year.value = 0;
  cvc.value = 0;
  showSuccessMessage.value = false;
}
</script>
