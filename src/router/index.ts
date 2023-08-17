import { createRouter, createWebHistory } from 'vue-router';

import TheCountries from '@/components/countries/TheCountries.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: 'countries' },
        { path: '/countries', component: TheCountries },
        { path: '/:notFound(.*)', redirect: 'countries' }
    ],
});
