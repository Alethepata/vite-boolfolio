<script>
import { store } from '../../data/store';

export default {
  name: 'ProjectsComponents',
  data() {
    return {
      store,
    }
  }
}
</script>

<template>
    <div class="card">        
      <h1>Projects</h1>

      <div class="card-body">
        <ul>
          <li v-for="project in store.projects" :key="project.id">
            <router-link :to="{name: 'ProjectDetails', params:{slug: project.slug}}">{{ project.title }}</router-link>
            <em class="type">{{ project.type.name }}</em>
            <em class="tecnologies" v-for="tecnology in project.tecnologies" :key="tecnology.id">{{ tecnology.name }}</em>
            <em>{{ project.user.name }}</em>   
          </li>
        </ul>
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
  .type{
      font-weight: bold;
      margin: 0 10px;
  }
  .tecnologies{
    font-style: italic;
    margin-right:10px;
  }
}

</style>