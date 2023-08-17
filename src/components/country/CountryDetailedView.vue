<template>
    <div class="country-detailed-container">
        <div>
            <button @click="redirectToCountries">Back</button>
        </div>
        <h3>{{ $route.params.country }}</h3>
    </div>
</template>
<script setup lang="ts">
    import { useRoute, useRouter } from 'vue-router';
    const route = useRoute();
    const router = useRouter();

    const redirectToCountries = () => {
        // router.push({ name: 'country', params: { country: countryName } });
        router.push({ name: 'countries' });
    }
</script>
<style scoped>
    /* .country-detailed-container {
        position: absolute;
        z-index: 250;
        top: 0;
        left: 0;
        width: 100%;
        height: 80vh;
        background: red;
    } */
</style>