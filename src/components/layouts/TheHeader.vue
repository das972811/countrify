<template>
    <header>
        <h1>Where in the World?</h1>
        <div>
            <!-- <base-button @click="switchColorTheme">
                <moon-icon></moon-icon> <span>Dark Mode</span>
            </base-button> -->
            <the-toggler-theme></the-toggler-theme>
        </div>
    </header>
</template>
<script setup lang="ts">
    import MoonIcon from '@/components/UI/icons/MoonIcon.vue';
    import TheTogglerTheme from '@/components/layouts/TheTogglerTheme.vue';

    function switchColorTheme() {
        const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
        const lightMode = window.matchMedia('(prefers-color-scheme: light)');
        const mode = document.documentElement.className;

        if (mode === 'dark-theme') {
            document.documentElement.className = '';
        } else if (mode === '') {
            document.documentElement.className = 'dark-theme';
        }
    }

</script>
<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5rem; /* 10 rem for mobile */
    padding: 0 5rem;
    background-color: var(--accent-color);
}

header > h1 {
    font-size: 1.65rem;
}

header > div {
    width: 6.5rem;
}

span {
    font-size:  1rem;
}
</style>