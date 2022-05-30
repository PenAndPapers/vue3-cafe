<template>
  <div class="menu container">
    <aside>
      <nav>
        <h4>Drinks</h4>
        <router-link to="#">Iced Coffee</router-link>
        <router-link to="#">Hot Coffee</router-link>
        <router-link to="#">Frappuccino</router-link>
        <router-link to="#">Chocolates</router-link>
        <router-link to="#">Teas</router-link>
      </nav>
      <nav>
        <h4>Foods</h4>
        <router-link to="#">Bread</router-link>
        <router-link to="#">Pasta</router-link>
        <router-link to="#">Cakes</router-link>
        <router-link to="#">Snacks</router-link>
      </nav>
      <nav>
        <h4>Beans and milk</h4>
        <router-link to="#">Whole bean</router-link>
        <router-link to="#">Soy milk</router-link>
      </nav>
      <nav>
        <h4>Merchandise</h4>
        <router-link to="#">Tumblers</router-link>
        <router-link to="#">Mugs</router-link>
        <router-link to="#">Water bottles</router-link>
        <router-link to="#">T-shirts</router-link>
      </nav>
    </aside>
    <div class="products">
      <Product
        v-for="(product, index) in data"
        :key="index"
        :product="product"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from "vue";
  import Product from './components//Product.vue'

  const data = ref([
    {
      image: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGxhdHRlJTIwY29mZmVlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Sagittis id consectetur purus ut faucibu',
    },         
    {
      image: 'https://images.unsplash.com/photo-1592663527359-cf6642f54cff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Pellentesque diam',
    },   
    {
      image: 'https://images.unsplash.com/photo-1565990436705-4bc429d16511?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Eget lorem dolor sed',
    },   
    {
      image: 'https://images.unsplash.com/photo-1624030609819-e2a4b1d5aebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Vitae justo eget magna',
    },   
    {
      image: 'https://images.unsplash.com/photo-1527678357412-ef45dfbd9ecc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Massa enim nec dui nunc',
    },   
    {
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Urna nec tincidunt',
    },   
    {
      image: 'https://images.unsplash.com/photo-1620360289100-030b032e5a27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aWNlZCUyMGNvZmZlZXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
      name: 'Integer vitae justo eget magna',
    },   
    {
      image: 'https://images.unsplash.com/photo-1589985902809-39d25db22101?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGljZWQlMjBjb2ZmZWV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Dui id ornare arcu odio ut sem',
    },   
    {
      image: 'https://images.unsplash.com/photo-1620360289812-0abdae69d6d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGljZWQlMjBjb2ZmZWV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Amet consectetur adipiscing',
    },   
    {
      image: 'https://images.unsplash.com/photo-1622322816396-4363b777eee7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGljZWQlMjBjb2ZmZWV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Urna nec tincidunt praesent semper',
    },   
    {
      image: 'https://images.unsplash.com/photo-1620360289921-85cd7365c2e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGljZWQlMjBjb2ZmZWV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Consectetur lorem donec massa',
    },   
    {
      image: 'https://images.unsplash.com/photo-1620360289634-1cd315bce441?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGljZWQlMjBjb2ZmZWV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'A lacus vestibulum sed',
    },   
    {
      image: 'https://images.unsplash.com/photo-1527678357412-ef45dfbd9ecc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGljZWQlMjBjb2ZmZWV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Quam viverra orci sagittis eu',
    },   
    {
      image: 'https://images.unsplash.com/photo-1620360289528-19c36695eaeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGljZWQlMjBjb2ZmZWV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Mi proin sed libero enim sed',
    }
  ])
</script>