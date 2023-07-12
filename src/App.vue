<template>
    <main>
        <the-header></the-header>
        {{ count }}
    </main>
</template>
<script setup lang="ts">
    import TheHeader from './components/layouts/TheHeader.vue';

    let count = 0;
</script>
<style scoped>
</style>
