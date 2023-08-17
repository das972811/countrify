<template>
    <div class="country-detailed-container">
        <h2>{{ targetCountry }}</h2>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const { country } = route.params;

    const targetCountry = ref(country);
</script>
<style scoped>
    .country-detailed-container {
        position: absolute;
        z-index: 250;
        top: 0;
        left: 0;
        width: 100%;
        height: 80vh;
        background: red;
    }
</style>