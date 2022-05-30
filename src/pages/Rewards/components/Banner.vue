<template>
  <div class="banner" v-if="slides">
    <div
      class="slide"
      v-for="(slide, index) in slides"
      :key="index"
      :class="activeSlide === index ? 'show' : ''"
      :style="`background-image: url(${slide.image})`"
    >
      <div class="container">
        <h2>{{ slide.title }}</h2>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import {  onMounted, ref, withDefaults } from 'vue'

  interface Slide {
    image: string;
    title: string;
    url: string | null;
  }

  interface ComponentProps {
    slides: Slide[] | null;
  }

  const props = withDefaults(defineProps<ComponentProps>(), {
    slides: null
  })

  const activeSlide = ref(0)

  const handleActiveSlide = () => {
    if (activeSlide.value >= 0) activeSlide.value += 1
    if (props.slides && activeSlide.value > (props.slides.length - 1)) activeSlide.value = 0
  }

  onMounted(() => {
    setInterval(() => handleActiveSlide(), 7000)
  })
</script>