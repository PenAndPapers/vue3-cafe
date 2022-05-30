<template>
  <div class="news container">
    <LatestNews :news="latestNews" />
    <NewsList :news="newsList" />
  </div>
</template>
<script setup lang="ts">
  import { ref } from "vue";
  import LatestNews from './components/LatestNews.vue'
  import NewsList from './components/NewsList.vue'

  const latestNews = ref({
    image: 'https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    title: 'Condimentum vitae sapien pellentesque habitant morbi',
    url: 'news/condimentum-vitae-sapien-pellentesque-habitant-morbi',
    date: 1664294400000
  })

  const newsList = ref([
    {
      image: 'https://images.unsplash.com/photo-1461988091159-192b6df7054f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
      title: 'Condimentum vitae sapien pellentesque habitant morbi',
      url: 'news/condimentum-vitae-sapien-pellentesque-habitant-morbi',
      date: 1664294400000
    },
    {
      image: 'https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      title: 'Donec pretium vulputate sapien nec.',
      url: 'news/condimentum-vitae-sapien-pellentesque-habitant-morbi',
      date: 1664294400000
    },
    {
      image: 'https://images.unsplash.com/photo-1601769568317-80c253cc87e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      title: 'Molestie a iaculis at erat pellentesque adipiscing commodo elit',
      url: 'news/condimentum-vitae-sapien-pellentesque-habitant-morbi',
      date: 1664294400000
    },
    {
      image: 'https://images.unsplash.com/photo-1426260193283-c4daed7c2024?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80',
      title: 'Tincidunt augue interdum velit euismod in. Lectus arcu bibendum',
      url: 'news/condimentum-vitae-sapien-pellentesque-habitant-morbi',
      date: 1664294400000
    },
    {
      image: 'https://images.unsplash.com/photo-1515560570411-00a0026e6086?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      title: 'Platea dictumst quisque sagittis purus sit amet volutpat.',
      url: 'news/condimentum-vitae-sapien-pellentesque-habitant-morbi',
      date: 1664294400000
    },
    {
      image: 'https://images.unsplash.com/photo-1517231925375-bf2cb42917a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
      title: 'Tristique senectus et netus et malesuada fames',
      url: 'news/condimentum-vitae-sapien-pellentesque-habitant-morbi',
      date: 1664294400000
    },
    {
      image: 'https://images.unsplash.com/photo-1614542307025-2f5eaaef28f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1750&q=80',
      title: 'Mi tempus imperdiet nulla malesuada pellentesque',
      url: 'news/condimentum-vitae-sapien-pellentesque-habitant-morbi',
      date: 1664294400000
    },
  ])
</script>