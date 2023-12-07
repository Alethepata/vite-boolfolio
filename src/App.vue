<script>
import axios from 'axios';
import { store } from './data/store';

export default {
  name: 'App',
  data() {
    return {
      store
    }
  },
  methods: {
    getApi() {
      axios.get(store.apiUrl)
        .then(res =>{
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

  <RouterView />
</template>


<style>

</style>