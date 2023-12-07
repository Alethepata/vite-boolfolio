import { createRouter, createWebHashHistory } from "vue-router";

import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/projects',
            name: 'Projects',
            component: Projects,
        },
    ],
})

export {router}