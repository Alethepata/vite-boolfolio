<script>
import axios from 'axios';
import { store } from '../data/store';

import Loader from '../components/partials/Loader.vue';

export default {
    name: 'ProjectDetails',
    components: {
        Loader
  },
  data() {
    return {
        store,
        project: {},
        isLoaded: false
      
    }
  },
  methods: {
    getProject(slug) {
    axios.get(store.apiUrl + '/' + slug)
        .then(res => {
        this.isLoaded = true;
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
  <div v-if="!isLoaded" class="container">
        <Loader />
  </div>
  <div v-else class="container">
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

<style lang="scss" scoped>
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