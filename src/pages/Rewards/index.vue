<template>
  <div class="rewards">
    <Banner :slides="slides" />

    <div class="container">
      <Mechanics :mechanics="mechanics" />
      <div class="steps">
        <h3>Arcu vitae elementum curabitur vitae nunc sed velit</h3>
        <p>Nunc mi ipsum faucibus vitae aliquet nec. Velit dignissim sodales ut eu. Tristique senectus et netus et malesuada.</p>
        <Steps :steps="steps" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  import Banner from './components/Banner.vue'
  import Mechanics from './components/Mechanics.vue'
  import Steps from './components/Steps.vue'

  const slides = ref([
    {
      image: 'https://images.unsplash.com/photo-1507914372368-b2b085b925a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      title: 'Dignissim suspendisse in est ante in nibh mauris',
      url: 'https://unsplash.com/'
    },
    {
      image: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      title: 'Neque laoreet suspendisse interdum consectetur libero',
      url: 'https://unsplash.com/'
    },
    {
      image: 'https://images.unsplash.com/photo-1467189386127-c4e5e31ee213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      title: 'Posuere sollicitudin aliquam ultrices sagittis',
      url: 'https://unsplash.com/'
    }
  ])

  const mechanics = ref([
    {
      title: 'Orci a scelerisque purus semper eget duis at tellus at',
      description: 'Dignissim suspendisse in est ante in nibh mauris cursus mattis. Bibendum ut tristique et egestas quis ipsum',
      icon: 'fa-mug-saucer'
    },
    {
      title: 'Lectus sit amet est placerat in egestas erat imperdiet',
      description: 'Ugue ut lectus arcu bibendum at. Id velit ut tortor pretium viverra suspendisse potenti. Pharetra diam sit amet nisl. Dignissim sodales ut eu sem.',
      icon: 'fa-cheese'
    },
    {
      title: 'Penatibus et magnis dis parturient montes',
      description: 'Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Amet facilisis magna etiam tempor orci eu.',
      icon: 'fa-face-laugh-beam'
    }
  ])

  const steps = ref([
    {
      description: 'Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Faucibus purus in massa tempor nec feugiat nisl pretium. Mattis enim ut tellus elementum sagittis vitae. Libero nunc consequat interdum varius sit amet. Nunc non blandit massa enim nec. At urna condimentum mattis pellentesque id nibh tortor id. Non tellus orci ac auctor augue mauris augue neque.',
      icon: 'fa-credit-card'
    },
    {
      description: 'In hendrerit gravida rutrum quisque non. Orci ac auctor augue mauris augue. Lacinia at quis risus sed vulputate odio ut enim. Tincidunt id aliquet risus feugiat in ante metus. Scelerisque fermentum dui faucibus in ornare. Eu feugiat pretium nibh ipsum consequat nisl vel. Faucibus turpis in eu mi bibendum neque egestas congue quisque.',
      icon: 'fa-basket-shopping'
    },
    {
      description: 'Porttitor rhoncus dolor purus non enim. Tincidunt augue interdum velit euismod in. Lectus arcu bibendum at varius vel pharetra vel. Lectus magna fringilla urna porttitor rhoncus dolor purus. Donec pretium vulputate sapien nec. Platea dictumst quisque sagittis purus sit amet volutpat.',
      icon: 'fa-certificate'
    }
  ])
</script>