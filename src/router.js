import { createRouter, createWebHashHistory } from "vue-router";

import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue';
import ProjectDetails from './pages/ProjectDetails.vue';
import Error404 from './pages/Error404.vue';

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
        {
            path: '/about',
            name: 'About',
            component: About,
        },
        {
            path: '/contacts',
            name: 'Contacts',
            component: Contacts,
        },
        {
            path: '/details/:slug',
            name: 'ProjectDetails',
            component: ProjectDetails,
        },
        {
            path: '/:patchMatch(.*)*',
            name: 'error-404',
            component: Error404
        },
    ],
})

export {router}