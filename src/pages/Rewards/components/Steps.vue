<template>
  <ul>
    <li
      v-for="(step, index) in steps"
      :key="index"
    >
      <i class="fa-solid" :class="step.icon" />
      <p>
        {{ step.description }}
      </p>
    </li>
  </ul>
</template>
<script setup lang="ts">
  import {  withDefaults } from 'vue'

  interface Steps {
    description: string;
    icon: string;
  }

  interface ComponentProps {
    steps: Steps[] | null;
  }

  const props = withDefaults(defineProps<ComponentProps>(), {
    steps: null
  })
</script>