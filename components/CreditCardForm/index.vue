<template>
  <div class="flex flex-col w-full xl:ml-10 lg:p-0 lg:pt-20 pt-16 max-w-sm">
    <FormKit
      id="credit-card-form"
      type="form"
      :config="{ validationVisibility: 'submit' }"
      :actions="false"
      @submit="$emit('confirm')"
    >
      <FormKit
        id="name"
        v-model="cardName"
        type="text"
        name="name"
        label="cardholder name"
        placeholder="e.g. Jane Appleseed"
        validation="required"
      />
      <FormKit
        id="number"
        v-model="cardNumber"
        type="text"
        name="number"
        label="card number"
        placeholder="e.g. 1234 5678 9123 0000"
        maxlength="16"
        validation="required|number"
        :validation-messages="{
          number: 'Wrong format, numbers only',
        }"
      />
      <div class="flex items-baseline">
        <FormKit
          id="month"
          v-model="cardMonth"
          type="number"
          number="integer"
          name="month"
          label="exp. date"
          placeholder="MM"
          inner-class="w-20"
          validation="required"
          max="12"
        />
        <FormKit
          id="year"
          v-model="cardYear"
          type="number"
          number="integer"
          name="year"
          label="(mm/yy)"
          placeholder="YY"
          outer-class="mr-4"
          inner-class="w-20"
          validation="required"
          max="99"
        />
        <FormKit
          id="cvc"
          v-model="cardCvc"
          type="number"
          number="integer"
          name="cvc"
          label="cvc"
          placeholder="e.g. 123"
          inner-class="w-48"
          validation="required"
          max="999"
        />
      </div>
      <FormKit type="submit" label="Submit" />
    </FormKit>
  </div>
</template>
<script setup lang="ts">
defineEmits(["confirm"]);
const cardName = defineModel<string>("cardName");
const cardNumber = defineModel<string>("cardNumber");
const cardMonth = defineModel<number>("cardMonth");
const cardYear = defineModel<number>("cardYear");
const cardCvc = defineModel<number>("cardCvc");
</script>
