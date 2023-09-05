<template>
    <query-countries
        @handle-country-search="countrySearchHandler"
        @handleCountriesFilteredByContinent="countriesFilteredByContinentHandler"
    >
    </query-countries>
    <display-countries></display-countries>
</template>
<script setup lang="ts">
    import { ref, provide, readonly } from 'vue';

    import QueryCountries from '@/components/countries/QueryCountries.vue';
    import DisplayCountries from '@/components/countries/DisplayCountries.vue';

    const searchedCountry = ref('');
    const targetContinent = ref('All');

    provide('search-country', readonly(searchedCountry));
    provide('target-continent', readonly(targetContinent));

    const countrySearchHandler = (country: string) => searchedCountry.value = country;
    const countriesFilteredByContinentHandler = (continent: string) => targetContinent.value = continent;

</script>