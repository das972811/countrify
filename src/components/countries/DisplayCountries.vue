<template>
    <section>
        <Suspense>
            <template #default>
                <base-countries-card>
                <template #default>
                        <!-- <loading-countries></loading-countries> -->
                        <loaded-countries></loaded-countries>
                    </template>
                </base-countries-card>
            </template>
            <template #fallback>
                <base-countries-card>
                    <template #default>
                        <loading-countries></loading-countries>
                    </template>
                </base-countries-card>
            </template>
        </Suspense>
    </section>
</template>
<script setup lang="ts">
    import LoadedCountries from './LoadedCountries.vue';
    import LoadingCountries from './LoadingCountries.vue';
    import BaseCountriesCard from './BaseCountriesCard.vue';
</script>
<style scoped>
section {
    margin-top: 2.75rem;
}
</style>