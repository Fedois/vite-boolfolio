import { createRouter, createWebHistory } from "vue-router";

import AppMain from './src/components/AppMain.vue';
import AppProjects from './src/pages/AppProjects.vue';
import AppSingleProj from './src/pages/AppSingleProj.vue';
import NotFound from './src/pages/NotFound.vue';

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
            path: '/project/:slug',
            name: 'project',
            component: AppSingleProj,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFouns',
            component: NotFound,
        },
    ]
});

export {router}