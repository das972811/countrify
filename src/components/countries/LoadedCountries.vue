<template>
    <div class="countries-container">
        <div class="country" v-for="country in countries" :key="country.name.official">
            <div class="country-image" :style="{ 'background-image': 'url(' + country.flags.png + ')', backgroundColor: 'green' }"></div>
            <h3>{{ country.name.official }}</h3>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { reactive } from 'vue';

    import { getAllCountries } from '@/utils/restCountriesApim';

    const countries = reactive({... await getAllCountries()});
</script>
<style scoped>
    .countries-container {
        display: grid;
        justify-content: space-between;
        text-align: center;
        grid-template-columns: repeat(4, 16.5rem);
        grid-template-rows: auto;
        row-gap: 4rem;
    }
    .countries-container .country-image {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 16.5rem;
        height: 10.5rem;
    }
</style>