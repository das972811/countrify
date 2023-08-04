<template>
    <div>
        <div v-for="country in countries" :key="country">
            <h2>Country {{country}}</h2>
        </div>
    </div>
</template>
<script setup lang="ts">
    const countries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
</script>
<style scoped>
</style>