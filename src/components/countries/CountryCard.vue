<template>
    <div class="country">
        <div class="country-image" :style="countrySvgFlag"></div>
        <div class="country-information">
            <h3 class="country-information__title">{{ title }}</h3>
            <p class="country-information__population">Population: <span class="gray-text">{{ population }}</span></p>
            <p class="country-information__region">Region: <span class="gray-text">{{ region }}</span></p>
            <p class="country-information__capital">Capital: <span class="gray-text">{{ capitalFormated }}</span></p>
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
    .country {
        text-align: left;
        cursor: pointer;
    }

    .country-information {
        background: var(--accent-color);
        height: 10.5rem;
        padding: 1.5rem 2rem  0 1.5rem;
    }

    .country-information.hide {
        display: none;
    }

    .country-information__title {
        margin-bottom: 0.75rem;
        font-size: 1.05rem;
    }

    .country-information > p {
        margin-bottom: 0.25rem;
        font-size: 0.84rem;
    }

    .country-information span.gray-text {
        color: var(--accent-text-color);
    }

    /* .country-information__population {

    }

    .country-information__region {

    }

    .country-information__capital {

    } */

    @media screen and (max-width: 650px) {
        .country-information {
            width: 20.25rem;
            margin: 0 auto;
        }
    }
</style>