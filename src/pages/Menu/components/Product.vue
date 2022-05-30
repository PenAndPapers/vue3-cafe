<template>
  <figure class="item">
    <img :src="product.image" alt="">
    <div>
      <span class="name">{{ product.name }}</span>
      <span class="add-to-order"><i class="fa-solid fa-circle-plus" /> Add to order</span>
    </div>
  </figure>
</template>
<script setup lang="ts">
  import {  withDefaults } from "vue";

  interface Product {
    image: string;
    name: string;
  }

  interface ComponentProps {
    product: Product | null;
  }

  const props = withDefaults(defineProps<ComponentProps>(), {
    product: null
  })
</script>