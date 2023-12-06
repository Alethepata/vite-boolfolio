<script>
import { store } from '../data/store';

  export default {
    name: 'Main',
    data() {
      return {
        store
      }
    },
    computed: {},
    mounted() {},
    methods: {}
  }
</script>

<template>

  <div class="container">
    <div class="card">
      <div class="card-body">
        <ul>
          <li v-for="project in store.projects" :key="project.id">{{ project.title }}</li>
        </ul>
      </div>
    </div>
  </div>

</template>

<style>

</style>