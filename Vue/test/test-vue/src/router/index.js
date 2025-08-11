// main router file to add about page set home page to home vue
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import JobsView from '@/views/JobsView.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/jobs',
        name: 'Jobs',
        component: JobsView,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;