<template>
    <main>
        <query-countries></query-countries>
        <display-countries></display-countries>
    </main>
</template>
<script setup lang="ts">
    import QueryCountries from './QueryCountries.vue';
    import DisplayCountries from './DisplayCountries.vue';
</script>
<style scoped>
main {
    margin: 3.25rem 5rem 0 5rem;
    
}

@media screen and (max-width: 1024px) {
    main {
        background: red;
    }
}
</style>