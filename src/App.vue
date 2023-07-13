<template>
    <the-header></the-header>
    <main>{{ count }}</main>
    <the-footer></the-footer>
</template>
<script setup lang="ts">
    import TheHeader from './components/layouts/TheHeader.vue';
    import TheFooter from './components/layouts/TheFooter.vue';

    let count = 0;
    count++;
</script>
<style scoped>
</style>
