<template>
    <footer>
        <p>Countrify {{ year }} &copy;</p>
    </footer>
</template>
<script setup lang="ts">
    const year = new Date().getFullYear();
</script>
<style scoped>
footer {
    text-align: center;
    padding: 1rem 0;
    background-color: var(--accent-color);
}
</style>
