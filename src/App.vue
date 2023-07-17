<template>
    <the-header></the-header>
    <main>{{ count }}</main>
    <the-footer></the-footer>
</template>
<script setup lang="ts">
    import { onMounted } from 'vue';
    
    import TheHeader from './components/layouts/TheHeader.vue';
    import TheFooter from './components/layouts/TheFooter.vue';

    let count = 0;
    count++;

    onMounted(() => {
        const colorTheme = window.matchMedia('(prefers-color-scheme: dark)');
        if (colorTheme.media !== 'not all' && colorTheme.matches) {
            document.documentElement.className = 'dark-theme';
        }
    }, this);

</script>
<style>
</style>
