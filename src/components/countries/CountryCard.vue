<template>
    <div class="country">
        <div class="country-image" :style="countrySvgFlag"></div>
        <div class="country-information">
            <h3>{{ title }}</h3>
            <p>Population: {{ population }}</p>
            <p>Region: {{ region }}</p>
            <p>Capital: {{ capitalFormated }}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { computed } from 'vue';

    interface Props {
        title: string
        url: string,
        population: number,
        region: string,
        capital: Array<string> | undefined
    };

    const { title, url, population, region, capital } = defineProps<Props>();

    const countrySvgFlag = computed(() => {
        return { 'background-image' : 'url(' +  url + ')' };
    });

    const capitalFormated = computed(() => {
        if (capital === undefined) return 'N/A';

        let capitals = '';

        for (const _capital of capital) {
            capitals += `${_capital}, `
        }

        return capitals.slice(0, capitals.length - 2);
    });

</script>
<style scoped>
    /* .country {
    } */

    .country-information {
        background: var(--accent-color);
    }
</style>