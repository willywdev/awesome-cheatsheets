<script setup>
import { ref } from "vue";
const h2Text = ref("Home");
function changeH2Text(newText) {
  h2Text.value = newText;
}
</script>

<template>
  <header>
    <h1>Awesome Cheatsheets</h1>
    <h2>{{ h2Text }}</h2>
    <section>
      <h3>Categories:</h3>
      <nav>
        <a @click="changeH2Text('CSS')">CSS</a>
        <a @click="changeH2Text('React')">React</a>
        <a @click="changeH2Text('Vue.js')">Vue.js</a>
        <a @click="changeH2Text('Next.js')">Next.js</a>
        <a @click="changeH2Text('Svelte')">Svelte</a>
        <a @click="changeH2Text('JavaScript')">JavaScript</a>
        <a @click="changeH2Text('NPM')">NPM</a>
      </nav>
    </section>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 2rem 1rem;
  background-color: #14213d;
  color: white;
}
section {
  display: none;
}
nav {
  display: flex;
  justify-content: space-evenly;
}
a {
  all: unset;
  cursor: pointer;
  font-weight: 600;
}
a:hover {
  color: #fca311;
  text-decoration: underline 1px solid #fca311;
}
@media (min-width: 768px) {
  section {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }
}
@media (min-width: 1024px) {
  section {
    align-self: center;
  }
  nav {
    justify-content: center;
    gap: 1.5rem;
  }
}
</style>
