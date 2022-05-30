<template>
  <div class="sign-in container">
    <div class="form-container">
      <h3>Account sign in</h3>
      <form @submit.prevent="">
        <div class="field">
          <label for="email">Email<sup>*</sup></label>  
          <input type="email" id="email">
        </div>
        <div class="field">
          <label for="password">Password<sup>*</sup></label>  
          <input type="password" id="password">
        </div>
        <div class="field flex items-center">
          <input type="checkbox" class="checkbox"> <span>Remember me</span>
        </div>
        <div class="field">
          <router-link to="/">Forgot password?</router-link>
        </div>
        <div class="field">
          <router-link :to="{ name: 'SignUp' }">Not a member yet?</router-link>
        </div>
         <div class="field">
          <button>Sign in</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { onBeforeMount, onMounted, reactive, ref, watch } from "vue";
</script>