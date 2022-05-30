<template>
  <div class="news-list">
    <NewsCard
      v-for="(item, index) in news"
      :key="index"
      :news="item"
    />
  </div>
</template>
<script setup lang="ts">
  import { withDefaults } from 'vue'
  import NewsCard from './NewsCard.vue'

  interface News {
    image: string;
    title: string;
    url: string;
    date: string | number;
  }

  interface ComponentProps {
    news: News[] | null;
  }

  const props = withDefaults(defineProps<ComponentProps>(), {
    news: null
  })
</script>