<template>
    <div class="country-detailed-container">
        <button class="back-button-container" @click="redirectToCountries"><back-arrow-icon></back-arrow-icon> <span>Back</span></button>

        <!-- Country Info -->
        <div class="country-info">
            <section class="country-detailed-image-container">
                <div class="country-detailed-image" :style="countrySvgFlag"></div>
            </section>
            <section class="country-info-data-container">
                <h1>{{ countryData.commonName }}</h1>
                <div class="country-info-data-actual">
                    <div class="main-data">
                        <div class="country-info-data__size">
                            <p>Native Name: <span>{{  countryData.nativeName }}</span></p>
                            <p>Population: <span>{{ countryData.population }}</span></p>
                            <p>Region: <span>{{ countryData.region }}</span></p>
                            <p>Sub Region: <span>{{ countryData.subRegion }}</span></p>
                            <p>Capital: <span>{{ countryData.capital }}</span></p>
                        </div>
                        <div class="country-info-data__encom">
                            <p>Top Level Domain: <span>{{ countryData.topLevelDomain }}</span></p>
                            <p>Currencies: <span>{{ countryData.currencies}}</span></p>
                            <p>Languages: <span>{{ countryData.languages }}</span></p>
                        </div>
                    </div>
                    <div class="country-info-data__border-countries">
                        <p>Border Countries: 
                            <div v-if="countryData.borders" class="border-data">
                                <span v-for="border in countryData.borders" :key="border" class="border-tag">{{ border }}</span>
                            </div>
                            <span v-else>No Borders</span>
                        </p>
                    </div>
                </div>
            </section>
        </div>
        <!-- Google Map -->
        <div></div>
    </div>
</template>
<script setup lang="ts">
    import { computed, ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

    import BackArrowIcon from '@/components/UI/icons/BackArrowIcon.vue'

    import { getCountry } from '@/utils/restCountriesApim';

    const route = useRoute();
    const router = useRouter();

    const countryName = ref(route.params.country);
    const country = ref(await getCountry(countryName.value));
    const countryData = ref({
        commonName: country.value[0].name.common,
        nativeName: country.value[0].name.official,
        population: country.value[0].population,
        region: country.value[0].region,
        subRegion: country.value[0].subregion,
        capital: country.value[0].capital,
        topLevelDomain: country.value[0].tld,
        currencies: country.value[0].currencies,
        languages: country.value[0].languages,
        borders: country.value[0].borders,
        url: country.value[0].flags.svg,
    })


    const countrySvgFlag = computed(() => {
        console.log(country.value[0]);
        // console.log(countryData.value.nativeName);
        return { 'background-image' : 'url(' +  countryData.value.url + ')' };
    });

    const redirectToCountries = () => {
        router.replace({ name: 'countries' });
    }
</script>
<style scoped>
.back-button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    width: 8.8rem;
    height: 2.50rem;
    background-color: var(--accent-color);
    color: var(--text-color);
    border: none;
    cursor: pointer;
    /* transition: color 250ms ease-in,
            font-size 250ms ease-in; */
}

.back-button-container > svg {
    margin-right: 0.5rem;
}

.country-info {
    display: flex;
    margin-top: 2rem;
}

.country-info-data__size,
.country-info-data__encom {
    line-height: 2rem;
}

.country-info-data__size span,
.country-info-data__encom span,
.country-info-data__border-countries > p span {
    color: var(--accent-text-color);
}

.country-info-data-actual {
    margin-top: 1.5rem;
}

.country-info-data__border-countries {
    margin-top: 3rem;
}

.country-info-data-actual > .main-data {
    display: flex;
    justify-content: space-between;
}

.country-info-data-container {
    width: 80%;
}

.country-info-data-container > h1 {
    margin-top: 4.5rem;
    font-size: 2rem;
}

.country-detailed-container {
    width: 90%;
    margin: 0 auto;
}
.country-info {
    width: 100%;
}
.country-detailed-image-container {
    width: 100%;
    height: 100%;
}

.country-detailed-image {
    width: 45rem;
    height: 30rem;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.border-data {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    /* width: 50%; */
}

.border-data .border-tag {
    /* background-color: */
    background: var(--accent-color);
    padding: 0.40rem 1rem;
    margin-left: 0.5rem;
}
</style>