<template>
    <main>
        <query-countries
            @handle-country-search="countrySearchHandler"
            @handleCountriesFilteredByContinent="countriesFilteredByContinentHandler"
        >
        </query-countries>
        <display-countries></display-countries>
    </main>
</template>
<script setup lang="ts">
    import { ref, provide, readonly } from 'vue';

    import QueryCountries from './QueryCountries.vue';
    import DisplayCountries from './DisplayCountries.vue';

    const searchedCountry = ref('');
    const targetContinent = ref('All');

    provide('search-country', readonly(searchedCountry));
    provide('target-continent', readonly(targetContinent));

    const countrySearchHandler = (country: string) => searchedCountry.value = country;
    const countriesFilteredByContinentHandler = (continent: string) => targetContinent.value = continent;

</script>
<style scoped>
main {
    margin: 3.25rem 5rem 3.25rem 5rem;
}

@media screen and (max-width: 1024px) {
    main {
        margin: 3.25rem 2rem 3.25rem 2rem;
    }
}
</style>