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
    ul{
        display: flex;
        list-style: none;
        li{
        margin: 10px;
        }
    }
}
</style>