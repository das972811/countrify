import { createRouter, createWebHistory } from 'vue-router';

import TheCountries from '@/pages/countries/TheCountries.vue';
import CountryDetailedView from '@/pages/country/CountryDetailedView.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: 'countries' },
        { name: 'countries', path: '/countries', component: TheCountries },
        { name: 'country', path: '/countries/:country', component: CountryDetailedView },
        { path: '/:notFound(.*)', redirect: 'countries' }
    ]
});
