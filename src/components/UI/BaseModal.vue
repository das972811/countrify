<template>
    <teleport to="main">
        <dialog open>
            <slot></slot>
        </dialog>
    </teleport>
    <!-- <div class="overlay"></div>
    <dialog open>
        <slot></slot>
    </dialog> -->
</template>
<script setup lang="ts">
</script>
<style scoped>
    .overlay {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 300;
        background: red;
    }

    dialog {
        position: absolute;
        top: 0;
        z-index: 310;
    }
</style>