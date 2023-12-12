<script>
import axios from 'axios';
import { store } from '../data/store';

import Loader from '../components/partials/Loader.vue';
import ProjectsComponents from '../components/partials/ProjectsComponents.vue';

export default {
    name: 'Projects',
    components: {
        Loader,
        ProjectsComponents
  
  },
  data() {
    return {
        store,
        isLoaded: false
    }
  },
  methods: {
  getApi() {
    axios.get(store.apiUrl + 'projects')
        .then(res => {
        this.isLoaded = true;
        store.projects = res.data.projects;
      })
    }

},
mounted() {
  this.getApi();

}
}
</script>

<template>
    <div v-if="!isLoaded" class="container">
        <Loader />
    </div>

  <div v-else class="container">
    <ProjectsComponents />
  </div>

</template>

<style lang="scss" scoped>

</style>