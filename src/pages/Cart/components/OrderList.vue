<template>
  <div class="orders flex-1">
    <OrderCard
      v-for="(item, index) in orders"
      :key="index"
      :order="item"
    />
  </div>
</template>
<script setup lang="ts">
  import { withDefaults } from 'vue'
  import OrderCard from './OrderCard.vue'

  interface Order {
    image: string;
    name: string;
    quantity: string | number;
  }

  interface ComponentProps {
    orders: Order[] | null;
  }

  const props = withDefaults(defineProps<ComponentProps>(), {
    orders: null
  })
</script>