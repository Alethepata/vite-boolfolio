<script>
export default {
    name:'Header'
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
    ul{
        display: flex;
        list-style: none;
        li{
        margin: 10px;
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
</style>