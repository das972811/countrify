<template>
    <div class="country-detailed-container">
        <h3>{{ $route.params.country }}</h3>
    </div>
</template>
<script setup lang="ts">
    import { useRoute } from 'vue-router';
    const route = useRoute();
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