<template>
  <div class="home container">
    <Promo
      v-for="(promo, index) in data"
      :key="index"
      :promo="promo"
      :class="index % 2 ? 'reverse' : ''"
    />
    
    <div class="notification">
      <p>
        [Mi proin sed libero enim sed December 23, 2022]. Volutpat sed cras ornare arcu dui vivamus. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Iaculis eu non diam phasellus vestibulum lorem sed risus.
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from "vue"
  import Promo from "./components/Promo.vue"

  const data = ref([
    {
      image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
      title: 'Lectus sit amet est placerat. Faucibus a pellentesque.',
      description: 'Habitant morbi tristique senectus et netus. Massa tempor nec feugiat nisl pretium fusce. Ac tincidunt vitae semper quis lectus. Porta non pulvinar neque laoreet suspendisse.',
      bgColor: 'green'
    },
    {
      image: 'https://images.unsplash.com/photo-1603889386532-0b8ebbe217c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      title: 'Odio tempor orci dapibus ultrices in.',
      description: 'Ullamcorper a lacus vestibulum sed arcu non odio euismod. Urna molestie at elementum eu facilisis. Dui id ornare arcu odio ut sem nulla pharetra..',
      bgColor: 'orange'
    },
    {
      image: 'https://images.unsplash.com/photo-1599876115565-e4dbed0b8a40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      title: 'Quam viverra orci sagittis eu volutpat odio facilisis mauris',
      description: 'Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Blandit aliquam etiam erat velit scelerisque in. Ut sem viverra aliquet eget sit amet tellus cras.',
      bgColor: 'red'
    },
    {
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80',
      title: 'Ut sem viverra aliquet eget sit amet tellus cras.',
      description: 'Euismod in pellentesque massa placerat duis. Faucibus et molestie ac feugiat sed. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet.',
      bgColor: 'yellow'
    }
  ])
</script>