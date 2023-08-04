<template>
    <div class="countries-container">
        <div class="country" v-for="country in countries" :key="country.name.official">
            <img :src="country.flags.svg" alt="A picture of the country flag"/>
            <h3>{{ country.name.official }}</h3>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { reactive } from 'vue';

    import { getAllCountries } from '@/utils/restCountriesApim';

    const countries = reactive({... await getAllCountries()});
    console.log(countries)

    // await new Promise<void>(resolve => {
    //     setTimeout(() => resolve(), 5000);
    // });
</script>
<style scoped>
    .countries-container {
        display: grid;
        grid-template-columns: auto auto auto auto;
    }
    img {
        width: 10rem;
        height: auto;
    }
</style>