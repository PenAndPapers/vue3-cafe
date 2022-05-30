<template>
  <article>
    <figure>
      <img :src="news.image" alt="">
    </figure>
    <div class="details">
      <h3>{{ news.title }}</h3>
      <p>{{ date }}</p>
    </div>
  </article>
</template>
<script setup lang="ts">
  import { onMounted, ref, withDefaults } from "vue";

  interface News {
    image: string;
    title: string;
    url: string;
    date: string | number;
  }

  interface ComponentProps {
    news: News | null;
  }

  const props = withDefaults(defineProps<ComponentProps>(), {
    news: null
  })

  const date = ref()

  const handleNewsDate = (payload: string | number) => {
    const newsDate = new Date(payload)
    const month = newsDate.toLocaleString('default', { month: 'short' })
    const day = newsDate.getDate()
    const year = newsDate.getFullYear()
    date.value = `${day} ${month} ${year}`
  }

  onMounted(() => {
    if (props.news) {
      if (props.news.date) handleNewsDate(props.news.date)
    }
  })
</script>