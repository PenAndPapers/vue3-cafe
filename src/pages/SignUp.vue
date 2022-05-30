<template>
  <div class="sign-up container">
    <div class="form-container">
      <h3>Create an account</h3>
      <form @submit.prevent="">
        <h5 class="mb-2">Personal information</h5>
        <div class="field">
          <label for="firstname">Firstname<sup>*</sup></label>  
          <input type="text" id="firstname">
        </div>
        <div class="field mb-3">
          <label for="lastname">Lastname<sup>*</sup></label>  
          <input type="text" id="lastname">
        </div>
        <h5 class="mb-2">Account Information</h5>
        <div class="field">
          <label for="email">Email address<sup>*</sup></label>  
          <input type="email" id="email">
        </div>
        <div class="field mb-3">
          <label for="password">Password<sup>*</sup></label>  
          <input type="password" id="password">
          <p class="text">Password must be atleast 8 - 30 characters long and includes 1 uppercase 1 lowercase letters 1 number and 1 special character.</p>
        </div>

        <div class="field mb-3">
          <label for="email-updates" class="mb-1 fw-600">Inform me about special offers and latest updates about Best Coffee Shop</label>
          <div class="flex items-center">
            <input type="checkbox" class="checkbox" id="email-updates"> <span>Yes, I'd like to recieve email.</span>
          </div>
        </div>

        <div class="field">
          <label for="tnc" class="mb-1 fw-600">
            By clicking checkbox you agree to Best Coffee Shop <router-link :to="{ name: 'SignIn' }">Terms and condition</router-link>  and <router-link :to="{ name: 'SignIn' }">Privacy policy</router-link>
          </label>
          <div class="flex items-center">
            <input type="checkbox" class="checkbox" id="tnc"> <span>I agree to the Terms and condition and Privacy policy.</span>
          </div>
        </div>

         <div class="field">
          <button>Sign up</button>
        </div>
        <div class="field">
          <router-link :to="{ name: 'SignIn' }">Sign in</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { onBeforeMount, onMounted, reactive, ref, watch } from "vue";
</script>