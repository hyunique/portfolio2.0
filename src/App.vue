<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <div id="nav">
      <div class="logo">
        <img src="" alt="" />
      </div>
      <div class="menu">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
    <RouterView />
  </div>
  <main>
    <h1 class="text-3xl font-bold underline">GAHYUN</h1>
    <h2>Frontend Developer</h2>
    <h2>UX/UI Designer</h2>
  </main>
</template>

<style scoped></style>
