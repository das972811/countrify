import { createRouter, createWebHistory } from 'vue-router';

import TheCountries from '@/components/countries/TheCountries.vue';
import CountryDetailedView from '@/components/country/CountryDetailedView.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: 'countries' },
        {
            path: '/countries', component: TheCountries,
            children: [
                { name: 'country', path: ':country', component: CountryDetailedView}
            ],
        },
        { path: '/:notFound(.*)', redirect: 'countries' }
    ],
});
