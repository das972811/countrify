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
    
        if (colorTheme.media !== 'not all') {
            console.log("Yay we supported");
    
            if (colorTheme.matches)
            {
                document.documentElement.className = 'dark-theme';
            }
        } else {
            console.log("We don't supported");
        }
    }, this);

</script>
<style>
</style>
