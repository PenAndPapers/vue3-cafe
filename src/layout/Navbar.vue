<template>
  <secion class="navbar">
    <nav>
      <div class="left-menu">
        <router-link to="/" class="logo"><span><i class="fa-solid fa-mug-hot"></i></span></router-link>
        <router-link :to="{ name: 'Menu' }">Menu</router-link>
        <router-link :to="{ name: 'Deals' }">Deals</router-link>
        <router-link :to="{ name: 'Rewards' }">Rewards</router-link>
        <router-link :to="{ name: 'News' }">News</router-link>
      </div>
      <div class="right-menu">
        <router-link :to="{ name: 'SignIn' }" class="btn success">Sign in</router-link>
        <router-link :to="{ name: 'SignUp' }" class="btn default">Join us</router-link>
        <router-link :to="{ name: 'Cart' }"><i class="fa-solid fa-cart-shopping"></i></router-link>
      </div>
    </nav>
  </secion>
</template>
<script setup lang="ts">
  import { reactive, ref } from "vue";
</script>