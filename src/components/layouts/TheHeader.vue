<template>
    <header>
        <h1>Where in the World?</h1>
        <div>
            <button @click="changeColorTheme">Dark Mode</button>
        </div>
    </header>
</template>
<script setup lang="ts">
let mode = 'light-theme';

function changeColorTheme()
{
    // document.documentElement.className = 'dark-theme';
    // https://web.dev/prefers-color-scheme/
    const colorTheme = window.matchMedia('(prefers-color-scheme: dark)');

    if (colorTheme.media !== 'not all') {
        console.log("Yay we supported");

        if (colorTheme.matches)
        {
            document.documentElement.className = 'dark-theme';
        }
    } else {
        console.log("We don't supported");
    }
}

</script>
<style scoped>
header {
    background-color: var(--diego);
}
</style>