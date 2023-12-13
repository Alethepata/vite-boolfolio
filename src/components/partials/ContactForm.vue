<script>
import axios from 'axios';
import { store } from '../../data/store';
import Loader from './Loader.vue';

export default {
    name: 'ContactForm',
    data() {
      return {
        name: '',
        email: '',
        message: '',
        success: false,
        isLoading: false,
        errors: {
          name:[],
          email:[],
          messages:[]
        }
      }
    },
    components:{
      Loader
    },
    methods: {
      sendForm(){
        this.isLoading = true;
        const data = {
          name: this.name,
          email: this.email,
          message: this.message
        }
        axios.post(store.apiUrl + 'send-email', data)
          .then(res => {
            this.isLoading = false;
             this.success = res.data.success;
             if(!this.success){
              this.errors = res.data.errors
             }
             
            })
        }
    }
  }
</script>

<template>
    <form v-if="!success" @submit.prevent="sendForm()" >
      <div v-if="!isLoading" >
        <div>
          <label for="name">Nome</label>
          <input v-model="name" type="text" name="name" id="name" />
          <p v-for="(error, index) in errors.name" :key="index">{{ error }}</p>

        </div>
        <div>
          <label for="email">Email</label>
          <input v-model="email"  type="text" name="email" id="email" />
          <p v-for="(error, index) in errors.email" :key="index">{{ error }}</p>
        </div>
        <div>
          <label for="message">Messagio</label>
          <textarea v-model="message"  name="message" id="message"></textarea>
          <p v-for="(error, index) in errors.message" :key="index">{{ error }}</p>
        </div>
        <div>
          <button type="submit">Invia</button>
        </div>
      </div>
      <Loader v-else />
      
    </form>
    <div v-else>Email inviata correttamente</div>
</template>

<style>

</style>