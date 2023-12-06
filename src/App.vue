<script>
import axios from 'axios';
import { store } from './data/store';
import Main from './components/Main.vue';

export default {
  name: 'App',
  components: {
    Main,
  },
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
  <Main />
</template>


<style>

</style>