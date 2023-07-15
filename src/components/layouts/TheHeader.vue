<template>
    <header>
        <h1>Where in the World?</h1>
        <div>
            <button>Dark Mode</button>
        </div>
    </header>
</template>
<script setup lang="ts">
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

</style>