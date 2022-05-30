<template>
  <div class="cart container">
    <div class="flex">
      <OrderList :orders="data" />
      <div class="bill-details">
        asdfasdf
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  import OrderList from './components/OrderList.vue'

  const data = ref([
    {
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmZlZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
      name: 'A arcu cursus vitae congue mauris rhoncus',
      quantity: 2
    },
    {
      image: 'https://images.unsplash.com/photo-1585445490387-f47934b73b54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFnZWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Id diam vel quam elementum pulvinar',
      quantity: 10
    },
    {
      image: 'https://images.unsplash.com/photo-1479894127662-a987d1e38f82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZmZlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Nisl rhoncus mattis rhoncus urna neque viverra',
      quantity: 7
    },
    {
      image: 'https://images.unsplash.com/photo-1603889386532-0b8ebbe217c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGNvb2tpZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Ultrices gravida dictum fusce ut placerat orci nulla',
      quantity: 4
    },
    {
      image: 'https://images.unsplash.com/photo-1570806516998-c4c167ee2f55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGN1cGNha2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'olutpat maecenas volutpat blandit',
      quantity: 2
    },
    {
      image: 'https://images.unsplash.com/photo-1634291090914-98d1a914c34e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAyfHxtaWxrJTIwdGVhfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Cursus in hac habitasse platea',
      quantity: 8
    },
  ])
</script>