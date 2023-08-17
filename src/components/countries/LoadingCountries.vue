<template>
    <div class="country" v-for="country in countries" :key="country">
        <div class="country-image loading"></div>
        <div class="country-information">
            <div class="title loading"></div>
            <div class="population loading"></div>
            <div class="region loading"></div>
            <div class="capital loading"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
    const countries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
</script>
<style scoped>
    /* .country {
        background: red;
    } */

    .country-image {
        background: var(--dark-grey);
        
    }

    .country-information {
        background: var(--accent-color);
        height: 10.5rem;
        padding: 1.5rem 2rem 0 1.5rem;
    }

    .country-information > div {
        width: 100%;
        height: 0.85rem;
        background-color: var(--dark-grey);
        border-radius: 0.1rem;
    }

    .country-information > div:not(:first-child) {
        margin-top: 0.9rem;
    }

    .country-information > .title {
        height: 1.25rem;
        width: 45%;
    }

    .country .loading {
        background: linear-gradient(
            120deg,
            var(--dark-grey) 30%, 
            var(--shine-color) 38%,
            var(--shine-color) 40%,
            var(--dark-grey) 48%
        );
        background-size: 200% 100%;
        background-position: 100% 0;

        animation: load 1.5s ease infinite;
    }

    @keyframes load {
        100% {
            background-position: -100% 0;
        }
    }
</style>