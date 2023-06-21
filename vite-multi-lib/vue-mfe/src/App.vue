<template>
  <h1>Vue + Vite</h1>
  <div id="nav">
      <button @click="goHomeShell">Home Shell</button>
      <router-link :to="`${basename}/`">Home</router-link> |
      <router-link :to="`${basename}/about`">About</router-link>
  </div>
  <router-view />
</template>


<script>
import { navigateShell } from './navigateShell';

export default {
  inject: {
    basename: { from: 'basename' }
  },
  name: 'AppVue',
  methods: {
    goHomeShell() {
      navigateShell('/');
    }
  }
}
</script>