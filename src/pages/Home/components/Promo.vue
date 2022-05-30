<template>
  <div class="promo" :class="promo.bgColor">
    <div class="preview">
      <img :src="promo.image" alt="">
    </div>
    <div class="details">
      <h3>{{ promo.title }}</h3>
      <p>{{ promo.description }}</p>
      <button class="btn inverse">Order now</button>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, ref, withDefaults } from "vue";

  interface Promo {
    image: string;
    title: string;
    description: string;
    bgColor: string;
  }

  interface ComponentProps {
    promo: Promo | null;
  }

  const props = withDefaults(defineProps<ComponentProps>(), {
    promo: null
  })
</script>