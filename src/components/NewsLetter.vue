<template>
  <div class="news-letter">
    <div>
      <h3>Special offers are waiting for you!</h3>
      <p>Subscribe to our newsleter to recieve the latest promo, deals and stories every week.</p>
      <form @submit.prevent="">
        <input type="email">
        <button>Subscribe</button>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
</script>