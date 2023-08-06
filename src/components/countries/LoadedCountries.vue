<template>
    <div class="countries-container">
        <country-card
            v-for="country in countries"
            :key="country.name.official"
            :url="country.flags.svg"
            :title="country.name.official"
            :population="country.population"
            :region="country.region"
            :capital="country.capital"
        >
        </country-card>
    </div>
</template>
<script setup lang="ts">
    import { reactive } from 'vue';

    import CountryCard from './CountryCard.vue';

    import { getAllCountries } from '@/utils/restCountriesApim';

    const countries = reactive({... await getAllCountries()});
</script>
<style scoped>
    .countries-container {
        display: grid;
        justify-content: space-between;
        text-align: center;
        grid-template-columns: repeat(4, 20.5rem);
        grid-template-rows: auto;
        row-gap: 4rem;
    }

    :deep(.country-image) {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        margin: 0 auto;
        width: 20.5rem;
        height: 13.5rem;
    }

    @media screen and (max-width: 1600px) {
        .countries-container {
            grid-template-columns: repeat(4, 18.5rem);
        }

        .countries-container :deep(.country-image) {
            width: 18.5rem;
            height: 11.5rem;
        }
    }

    @media screen and (max-width: 1400px) {
        .countries-container {
            grid-template-columns: repeat(3, 20.5rem);
        }

        .countries-container :deep(.country-image) {
            width: 20.5rem;
            height: 13.5rem;
        }
    }

    @media screen and (max-width: 1250px) {
        .countries-container {
            grid-template-columns: repeat(3, 18.5rem);
        }

        .countries-container :deep(.country-image) {
            width: 18.5rem;
            height: 12.5rem;
        }
    }

    @media screen and (max-width: 1150px) {
        .countries-container {
            grid-template-columns: repeat(2, 25.5rem);
        }

        .countries-container :deep(.country-image) {
            width: 25.5rem;
            height: 14.5rem;
        }
    }

    @media screen and (max-width: 950px) {
        .countries-container {
            grid-template-columns: repeat(2, 22rem);
        }

        .countries-container :deep(.country-image) {
            width: 22rem;
            height: 13rem;
        }
    }

    @media screen and (max-width: 850px) {
        .countries-container {
            grid-template-columns: repeat(2, 19rem);
        }

        .countries-container :deep(.country-image) {
            width: 19rem;
            height: 12rem;
        }
    }

    @media screen and (max-width: 750px) {
        .countries-container {
            grid-template-columns: repeat(2, 17rem);
        }

        .countries-container :deep(.country-image) {
            width: 17rem;
            height: 10rem;
        }
    }

    @media screen and (max-width: 650px) {
        .countries-container {
            grid-template-columns: repeat(1, 100%);
        }

        .countries-container :deep(.country-image) {
            width: 20.25rem;
            height: 13rem;
        }
    }
</style>