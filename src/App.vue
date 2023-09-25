<template>
    <the-header></the-header>
    <main>
        <suspense>
            <router-view></router-view>
        </suspense>
    </main>
    <the-footer></the-footer>
</template>
<script setup lang="ts">
    import { onBeforeMount } from 'vue';
    
    import TheHeader from './components/layouts/TheHeader.vue';
    import TheFooter from './components/layouts/TheFooter.vue';

    onBeforeMount(() => {
        const colorTheme = window.matchMedia('(prefers-color-scheme: dark)');
        const isDarkTheme = sessionStorage.getItem('dark-theme');

        if (!isDarkTheme) {
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
    main {
        position: relative;
        margin: 3.25rem 5rem 3.25rem 5rem;
    }

    @media screen and (max-width: 1024px) {
        main {
            margin: 3.25rem 2rem 3.25rem 2rem;
        }
    }
</style>
