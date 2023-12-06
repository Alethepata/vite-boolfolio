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
      <h1>Projects</h1>
      <div class="card-body">
        <ul>
          <li v-for="project in store.projects" :key="project.id">
            <p>{{ project.title }}</p>
            <p class="strong">{{ project.type.name }}</p>
            <p v-for="tecnology in project.tecnologies" :key="tecnology.id" class="italic">{{ tecnology.name }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<style lang="scss">
h1{
  text-align: center;
}
li{
  display: flex;
  
  p{
    padding: 10px;
  }
  .strong{
      font-weight: bold;
  }
  .italic{
    font-style: italic;
  }
}
</style>