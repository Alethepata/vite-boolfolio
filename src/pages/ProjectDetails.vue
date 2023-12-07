<script>
import axios from 'axios';
import { store } from '../data/store';

export default {
  name: 'ProjectDetails',
  data() {
    return {
        store,
        project: {}
      
    }
  },
  methods: {
    getProject(slug) {
    axios.get(store.apiUrl + '/' + slug)
      .then(res =>{
        this.project = res.data.project;
      })
    }

},
mounted() {
    this.getProject(this.$route.params.slug);

}
}
</script>

<template>

  <div class="container">
    <div class="card">        
      <h1>Project : {{ project.title }}</h1>
      <div class="card-body">
        <ul>
          <li>
            <p class="strong">Tipo : {{ project.type?.name}}</p>
          </li>
          <li>
            <p v-for="tecnology in project.tecnologies" :key="tecnology.id" class="italic">Tecnologia: {{ tecnology?.name }}</p>
          </li>
          <li>
            <p>{{ project.explanation }}</p>
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