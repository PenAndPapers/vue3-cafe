<template>
  <div class="deals container">
    <Deal
      v-for="(deal, index) in data"
      :key="index"
      :deal="deal"
    />
  </div>
</template>
<script setup lang="ts">
  import { onBeforeMount, onMounted, reactive, ref, watch } from "vue";
  import Deal from './components/Deal.vue'

  const data = ref([
    {
      image: 'https://images.unsplash.com/photo-1596554928189-05ea9bfffe3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80',
      title: 'Tellus id interdum velit laoreet id donec',
      discount: '15',
      isRecommended: true
    },
    {
      image: 'https://images.unsplash.com/photo-1547978059-2639fd612c66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80',
      title: 'Mi proin sed libero enim sed',
      discount: '30',
      isRecommended: true
    },
    {
      image: 'https://images.unsplash.com/photo-1594236114270-f5feb79f52a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1822&q=80',
      title: 'Elit sed vulputate mi sit amet mauris commodo',
      discount: '50',
      isRecommended: false
    },{
      image: 'https://images.unsplash.com/photo-1615324606695-afaaf3a8554e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
      title: 'Vitae suscipit tellus mauris a diam',
      discount: '5',
      isRecommended: true
    }
    ,{
      image: 'https://images.unsplash.com/photo-1597692493647-35763cb92183?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
      title: 'Commodo ullamcorper a lacus vestibulum',
      discount: '10',
      isRecommended: false
    },
    {
      image: 'https://images.unsplash.com/photo-1569760142069-bc6838de16c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
      title: 'Bibendum at varius vel',
      discount: '15',
      isRecommended: false
    },{
      image: 'https://images.unsplash.com/photo-1479894127662-a987d1e38f82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      title: 'Dictumst quisque sagittis',
      discount: '20',
      isRecommended: true
    }
  ])
</script>