<template>
  <Navbar />
  <main>
    <router-view/>
  </main>
  <NewsLetter />
  <Footer />
</template>

<script setup lang="ts">
  import Navbar from './layout/Navbar.vue'
  import Footer from './layout/Footer.vue'
  import NewsLetter from './components/NewsLetter.vue'
</script>
