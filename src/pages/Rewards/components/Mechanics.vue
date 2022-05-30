<template>
  <div class="mechanics" v-if="mechanics">
    <article
      v-for="(mechanic, index) in mechanics"
      :key="index"
    >
      <div class="circle">
        <i class="fa-solid" :class="mechanic.icon" />
      </div>
      <h3>{{ mechanic.title }}</h3>
      <p>{{ mechanic.description }}</p>
    </article>
  </div>
</template>
<script setup lang="ts">
  import {  withDefaults } from 'vue'

  interface Mechanics {
    title: string;
    description: string;
    icon: string;
  }

  interface ComponentProps {
    mechanics: Mechanics[] | null;
  }

  const props = withDefaults(defineProps<ComponentProps>(), {
    mechanics: null
  })
</script>