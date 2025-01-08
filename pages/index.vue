<template>
  <div class="flex lg:flex-row flex-col items-center">
    <div class="relative z-0 lg:max-w-[50vw]">
      <div class="lg:w-2/3 w-screen">
        <img
          src="~/assets/images/bg-main-desktop.png"
          alt="background image"
          class="lg:h-screen h-60 w-screen"
        />
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
        />
        <div
          class="absolute z-20 lg:top-[34%] lg:left-[25%] uppercase text-white tracking-widest font-normal text-2xl"
        >
          <span v-if="cardHolderNumber">
            {{ cardHolderNumber }}
          </span>
          <span v-else>0000 0000 0000 0000</span>
        </div>
        <div
          class="absolute z-20 lg:top-[40%] lg:left-[25%] uppercase text-white tracking-widest font-normal"
        >
          <span v-if="cardholderName">
            {{ cardholderName }}
          </span>
          <span v-else>Jane Appleseed</span>
        </div>
        <div
          class="absolute z-20 lg:top-[40%] lg:left-[70%] uppercase text-white tracking-widest font-normal"
        >
          <span v-if="cardMonth">{{ cardMonth }}/</span>
          <span v-else>00/</span>
        </div>
        <div
          class="absolute z-20 lg:top-[40%] lg:left-[75%] uppercase text-white tracking-widest font-normal"
        >
          <span v-if="cardYear">
            {{ cardYear }}
          </span>
          <span v-else>00</span>
        </div>
      </div>
      <div>
        <img
          src="~/assets/images/bg-card-back.png"
          alt="background card back"
          class="absolute z-10 lg:top-[50%] lg:left-[34%] top-[12%] left-[25%] lg:w-[447px] w-[286px] shadow-[0px_39px_60px_0px_rgba(0,_0,_0,_0.1425)]"
        />
        <div
          class="absolute z-20 lg:top-[61.5%] lg:left-[85%] tracking-widest font-normal text-white"
        >
          <span v-if="cardCvc">{{ cardCvc }}</span>
          <span v-else>000</span>
        </div>
      </div>
    </div>
    <CreditCardForm
      v-model:card-name="cardholderName"
      v-model:card-number="cardHolderNumber"
      v-model:card-month="cardMonth"
      v-model:card-year="cardYear"
      v-model:card-cvc="cardCvc"
      model-value=""
    />
  </div>
</template>
<script lang="ts">
import CreditCardForm from '~/components/CreditCardForm/index.vue'

export default {
  components: {
    CreditCardForm,
  },
  setup() {
    const cardholderName = ref<string>('')
    const cardHolderNumber = ref()
    const cardMonth = ref()
    const cardYear = ref()
    const cardCvc = ref()
    return {
      cardholderName,
      cardHolderNumber,
      cardMonth,
      cardYear,
      cardCvc,
    }
  },
}
</script>
