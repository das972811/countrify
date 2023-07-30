<template>
    <the-header></the-header>
    <the-countries></the-countries>
    <the-footer></the-footer>
</template>
<script setup lang="ts">
    import { onBeforeMount } from 'vue';
    
    import TheHeader from './components/layouts/TheHeader.vue';
    import TheCountries from './components/countries/TheCountries.vue';
    import TheFooter from './components/layouts/TheFooter.vue';

    onBeforeMount(() => {
        const colorTheme = window.matchMedia('(prefers-color-scheme: dark)');
        const isDarkTheme = sessionStorage.getItem('dark-theme');

        console.log('On Mounted');

        if (!isDarkTheme) {
            console.log('SETTING');
            sessionStorage.setItem('dark-theme', 'false');
        }

        if (isDarkTheme === 'false') return;

        if (colorTheme.media != 'not all' && colorTheme.matches) {
            document.documentElement.className = 'dark-theme';
            sessionStorage.setItem('dark-theme', 'true');
        }
    }, this);

</script>
<style>
</style>
