<template>
  <figure class="deal">
    <i class="fa-solid fa-star" v-if="deal.isRecommended" />
    <img :src="deal.image" alt="">
    <div class="text">
      <h4>{{ deal.title }}</h4>
      <h4>{{ deal.discount }}% discount</h4>
    </div>
  </figure>
</template>
<script setup lang="ts">
  import { onMounted, ref, withDefaults } from "vue";

  interface Deal {
    image: string;
    title: string;
    discount: string | number;
    isRecommended: boolean
  }

  interface ComponentProps {
    deal: Deal | null;
  }

  const props = withDefaults(defineProps<ComponentProps>(), {
    deal: null
  })
</script>