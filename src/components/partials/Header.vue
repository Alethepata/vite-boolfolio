<script>
import axios from 'axios';
import { store } from '../../data/store'

export default {
    name: 'Header',
    data() {
        return {
            search: ''
        }
    },
    methods: {
        getApi() {
            axios.get(store.apiUrl + 'search/' + this.search)
                .then(results => {
                    store.projects = results.data.projects;
                    this.search = '';
                })
        }
    }
}
</script>

<template>
    <header>
        <nav>

            <ul>
                <li>
                    <router-link :to="{name: 'Home'}">Home</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'Projects'}">Projects</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'About'}" >About</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'Contacts'}">Contacts</router-link>
                </li>
            </ul>

            
            <div class="form">
              <input
                v-model.trim = "search"
                placeholder = "Cerca"
                type = "text"
                @keyup.enter = "getApi"
              >
            </div>

        </nav>
    </header>
</template>

<style lang="scss">
header{
    background-color: rgb(52, 52, 52);
    padding: 10px 0;
    width: 100%;
    height: 80px;
    position: fixed;
    z-index: 1000;
    nav{
        display: flex;
        justify-content: space-around;
        align-items: center;

        ul{
            display: flex;
            list-style: none;
            li{
                margin-right: 10px;
            }
        a{
            font-size: 22px;
            &:hover{
                color: cadetblue;
            }
        }
        }
        .router-link-exact-active{
            color: cadetblue;
        }
    }

}
</style>