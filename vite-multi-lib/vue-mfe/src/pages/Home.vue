<template>
  <h2>Home Page</h2>
  <table>
    <thead>
      <tr>
        <th>Page</th>
        <th>Angular</th>
        <th>React</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Home</td>
        <td><button @click="()=> goToAngularHome()">Ir a Angular:Home</button></td>
        <td><button @click="goToReactHome">Ir a React:Home</button></td>
      </tr>
      <tr>
        <td>About</td>
        <td><button @click="goToAngularAbout">Ir a Angular:About</button></td>
        <td><button @click="goToReactAbout">Ir a React:About</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { navigateShell } from '../navigateShell';
export default {
  name: 'HomePage',
  methods: {
    goToAngularHome() {
      console.log("HOLA")
      navigateShell('/angular');
    },
    goToAngularAbout() {
      navigateShell('/angular/about');
    },
    goToReactHome() {
      navigateShell('/react');
    },
    goToReactAbout() {
      navigateShell('/react/about');
    }
  }
}
</script>