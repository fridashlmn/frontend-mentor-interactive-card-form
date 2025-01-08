<template>
  <div class="flex flex-col mx-24 lg:p-0 pt-20 max-w-sm">
    <FormKit type="form" :actions="false">
      <FormKit
        id="name"
        v-model="cardName"
        type="text"
        name="name"
        label="cardholder name"
        placeholder="e.g. Jane Appleseed"
      />
      <FormKit
        id="number"
        v-model="cardNumber"
        type="number"
        number="integer"
        name="number"
        label="card number"
        placeholder="e.g. 1234 5678 9123 0000"
      />
      <div class="flex items-end">
        <FormKit
          id="month"
          v-model="cardMonth"
          type="number"
          number="integer"
          name="month"
          label="exp. date"
          placeholder="MM"
          inner-class="w-20"
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
        />
      </div>
      <FormKit type="submit" label="Submit" />
    </FormKit>
  </div>
</template>

<script setup lang="ts">
const cardName = defineModel('cardName', { required: true })
const cardNumber = defineModel('cardNumber', { required: true })
const cardMonth = defineModel('cardMonth', { required: true })
const cardYear = defineModel('cardYear', { required: true })
const cardCvc = defineModel('cardCvc', { required: true })
</script>
<script lang="ts">
export default {
  name: 'CreditCardForm',
}
</script>
