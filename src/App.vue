<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app" class="bg-purple h-screen">
    <nav id="nav" class="flex items-center justify-between p-6">
      <a class="logo flex-none md:w-auto">
        <img class="h-8 w-auto" src="./assets/logo_placeholder.svg" alt="" />
      </a>
      <div class="menu lg:flex lg:gap-x-12">
        <router-link class="font-sans text-white text-sm leading-6" to="/">Home</router-link>
        <router-link class="font-sans text-white text-sm leading-6" to="/about">About</router-link>
        <router-link class="font-sans text-white text-sm leading-6" to="/projects"
          >Projects</router-link
        >
        <router-link class="font-sans text-white text-sm leading-6" to="/contact"
          >Contact</router-link
        >
      </div>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped></style>
