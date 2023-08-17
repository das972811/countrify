<template>
    <country-card
        v-for="country in targetCountries"
        :key="country.name.official"
        :url="country.flags.svg"
        :title="country.name.official"
        :population="country.population"
        :region="country.region"
        :capital="country.capital"
        :handleCountryDetailedView="displayDetailedCountryHandler"
    >
    </country-card>
</template>
<script setup lang="ts">
    import { ref, computed, inject } from 'vue';
    import { useRouter } from 'vue-router';

    import CountryCard from './CountryCard.vue';

    import { getAllCountries } from '@/utils/restCountriesApim';

    const router = useRouter();

    const searchedCountry = inject('search-country');
    const selectedContinent = inject('target-continent');

    const targetCountry = ref(searchedCountry);
    const targetContinent = ref(selectedContinent);
    
    const countries = ref([... await getAllCountries()]);
    const targetCountries = computed(() => {
        return countries.value.filter(country => {
            const continent = country.continents[0];
            const findingTargetCountry = country.name.official.includes(targetCountry.value);

            if (targetContinent.value !== 'All') {
                return findingTargetCountry && continent.includes(targetContinent.value);
            }

            return findingTargetCountry;
        });
    });

    const displayDetailedCountryHandler = (countryName: string) => {
        router.push({ name: 'country', params: { country: countryName } });
    }

    // NOTE TO DIEGO CHECK OUT THIS LINK
    // https://codepen.io/mosemose/pen/qBZqJjL

    // onMounted(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             const entryClasses = entry.target.classList;
    //             console.log('tet');
    //             if (entry.isIntersecting) {
    //                 // entryClasses.remove('');
    //                 entryClasses.add('slide-up-country-card');
    //             }

    //         });
    //     });

    //     const countries = document.querySelectorAll('.countries-container .country');
    //     countries.forEach((country) => {
    //         observer.observe(country);
    //     });
    // }, this)
</script>
<style scoped>
</style>