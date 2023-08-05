<template>
    <div class="country">
        <div class="country-image" :style="countrySvgFlag"></div>
        <h3>{{ title }}</h3>
    </div>
</template>
<script setup lang="ts">
    import { computed, ref } from 'vue';

    interface Props {
        title: string
        url: string,
    }

    const { title, url } = defineProps<Props>();
    const countrySvgFlag = computed(() => {
        console.log(url);
        return { 'background-image' : 'url(' +  url + ')' };
    });

</script>
<style scoped>
    /* .country-image {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: inline-block;
        width: 20.5rem;
        height: 13.5rem;
    } */

    /* @media screen and (max-width: 1600px) {
        .countries-container {
            grid-template-columns: repeat(4, 18.5rem);
        }

        .countries-container .country-image {
            width: 18.5rem;
            height: 11.5rem;
        }
    }

    @media screen and (max-width: 1400px) {
        .countries-container {
            grid-template-columns: repeat(3, 20.5rem);
        }

        .countries-container .country-image {
            width: 20.5rem;
            height: 13.5rem;
        }
    }

    @media screen and (max-width: 1250px) {
        .countries-container {
            grid-template-columns: repeat(3, 18.5rem);
        }

        .countries-container .country-image {
            width: 18.5rem;
            height: 12.5rem;
        }
    }

    @media screen and (max-width: 1150px) {
        .countries-container {
            grid-template-columns: repeat(2, 25.5rem);
        }

        .countries-container .country-image {
            width: 25.5rem;
            height: 14.5rem;
        }
    }

    @media screen and (max-width: 950px) {
        .countries-container {
            grid-template-columns: repeat(2, 22rem);
        }

        .countries-container .country-image {
            width: 22rem;
            height: 13rem;
        }
    }

    @media screen and (max-width: 850px) {
        .countries-container {
            grid-template-columns: repeat(2, 19rem);
        }

        .countries-container .country-image {
            width: 19rem;
            height: 12rem;
        }
    }

    @media screen and (max-width: 750px) {
        .countries-container {
            grid-template-columns: repeat(2, 17rem);
        }

        .countries-container .country-image {
            width: 17rem;
            height: 10rem;
        }
    }

    @media screen and (max-width: 650px) {
        .countries-container {
            grid-template-columns: repeat(1, 100%);
        }

        .countries-container .country-image {
            width: 20.25rem;
            height: 13rem;
        }
    } */
</style>