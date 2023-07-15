<template>
    <button>
        <slot></slot>
    </button>
</template>
<style scoped>
button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: inherit;
    color: inherit;
    border: none;

    cursor: pointer;
}
</style>