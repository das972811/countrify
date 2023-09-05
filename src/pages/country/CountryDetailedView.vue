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
        // const country = route.params.country;
        router.replace({ name: 'countries' });
    }
</script>
<style scoped>
</style>