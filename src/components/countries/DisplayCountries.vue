<template>
    <section>
        <Suspense>
            <template #default>
                <loaded-countries></loaded-countries>
            </template>
            <template #fallback>
                <loading-countries></loading-countries>
            </template>
        </Suspense>
    </section>
</template>
<script setup lang="ts">
    import LoadedCountries from './LoadedCountries.vue';
    import LoadingCountries from './LoadingCountries.vue';
</script>
<style scoped>
section {
    margin-top: 2.75rem;
}
</style>