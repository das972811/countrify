<template>
    <div class="country-detailed-container">
        <div>
            <button @click="redirectToCountries">Back</button>
        </div>
        <h3>{{ $route.params.country }}</h3>
    </div>
</template>
<script setup lang="ts">
    import { onBeforeMount, ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

    import { getCountry } from '@/utils/restCountriesApim';

    const route = useRoute();
    const router = useRouter();

    const countryName = ref(route.params.country);
    const country = ref(await getCountry(countryName.value));

    const redirectToCountries = () => {
        router.replace({ name: 'countries' });
    }

    onBeforeMount(() => {
        console.log(country.value[0].name.official);
    }, this);
</script>
<style scoped>
</style>