<template>
    <header>
        <h1>Where in the World?</h1>
        <the-toggler-theme></the-toggler-theme>
    </header>
</template>
<script setup lang="ts">
    import TheTogglerTheme from '@/components/layouts/TheTogglerTheme.vue';
</script>
<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5rem;
    padding: 0 5rem;
    background-color: var(--accent-color);
}

header > h1 {
    font-size: 1.65rem;
}

span {
    font-size:  1rem;
}

@media screen and (max-width: 700px) {
    header {
        /* height: 10rem; */
        padding: 0 1.75rem;
    }
}

@media screen and (max-width: 550px) {
    header {
        padding: 0 0.75rem;
    }
}

</style>