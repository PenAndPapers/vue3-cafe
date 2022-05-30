<template>
  <footer class="footer">
    <div class="container">
      <div class="navs">
        <nav>
          <h5>About Us</h5>
          <router-link to="#">Our company</router-link>
          <router-link to="#">Products</router-link>
          <router-link to="#">News</router-link>
          <router-link to="#">Investors</router-link>
          <router-link to="#">Customer service</router-link>
          <router-link to="#">FAQ</router-link>
        </nav>
        <nav>
          <h5>Careers</h5>
          <router-link to="#">Careers</router-link>
          <router-link to="#">Culture and Values</router-link>
          <router-link to="#">International Careers</router-link>
          <router-link to="#">Sponsors</router-link>
        </nav>
        <nav>
          <h5>Partner with us</h5>
          <router-link to="#">Suppliers</router-link>
          <router-link to="#">Upcoming projects</router-link>
          <router-link to="#">Locations</router-link>
          <router-link to="#">Partners</router-link>
          <router-link to="#">Food services</router-link>
        </nav>
        <nav>
          <h5>Orders</h5>
          <router-link to="#">Order online</router-link>
          <router-link to="#">Order on mobile app</router-link>
          <router-link to="#">Order tracking</router-link>
        </nav>
      </div>
      <div class="social-media">
        <a href="#"><i class="fa-brands fa-facebook-square"></i></a>
        <a href="#"><i class="fa-brands fa-twitter-square"></i></a>
        <a href="#"><i class="fa-brands fa-pinterest-square"></i></a>
        <a href="#"><i class="fa-brands fa-instagram-square"></i></a>
        <a href="#"><i class="fa-brands fa-youtube-square"></i></a>
      </div>
      <div class="policy">
        <router-link to="#">Terms and conditions</router-link>
        <router-link to="#">Privacy policy</router-link>
        <router-link to="#">Disclamer</router-link>
        <router-link to="#">Cookie perferences</router-link>
      </div>
      <div class="copyright">
        &copy; 2022 Best Coffee Shop. All rights reserved.
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
  import { reactive, ref } from "vue";
</script>