import { createRouter, createWebHistory } from "vue-router";

import AppMain from './src/components/AppMain.vue';
import AppProjects from './src/pages/AppProjects.vue';
import AppProject from './src/pages/AppSingleProj.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppMain,
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects,
        },
        {
            path: '/project',
            name: 'project',
            component: AppProject,
        },
    ]
});

export {router}