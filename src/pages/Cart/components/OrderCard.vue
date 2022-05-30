<template>
  <div class="item flex items-center content-center">
    <figure>
      <img :src="order.image" alt="">
    </figure>
    <div class="flex-1">
      <h3>{{ order.name }}</h3>
      <p>{{ order.quantity }}</p>
      <div class="controls flex">
        <button><i class="fa-solid fa-minus" /></button>
        <button><i class="fa-solid fa-plus" /></button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, ref, withDefaults } from "vue";

  interface Order {
    image: string;
    name: string;
    quantity: string | number;
  }

  interface ComponentProps {
    order: Order | null;
  }

  const props = withDefaults(defineProps<ComponentProps>(), {
    order: null
  })
</script>