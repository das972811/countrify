<template>
    <input class="checkbox" type="checkbox" id="toggle-theme"/>
    <label class="toggle-theme" for="toggle-theme">
        <sun-icon></sun-icon>
        <moon-icon></moon-icon>
        <span class="ball"></span>
    </label>
</template>
<script setup lang="ts">
    import MoonIcon from '@/components/UI/icons/MoonIcon.vue';
    import SunIcon from '@/components/UI/icons/SunIcon.vue';
    // https://codepen.io/AlexGolovanov/pen/xxyYzOq


</script>
<style scoped>
.toggle-theme {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 4rem;
    height: 2.2rem;
    border-radius: 3rem;
    padding: 0 0.4rem;
    background-color: var(--dark-grey);
    cursor: pointer;
}

.toggle-theme > svg {
    z-index: 1;
}

.checkbox {
    display: none;
}


.ball {
    position: absolute;
    top: 50%;
    left: 50%;
    transform:  translateX(-122%) translateY(-50%);
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: var(--accent-color);
    transition: transform 250ms ease-in-out;
}

.checkbox:checked + label > .ball {
    transform:  translateX(22%) translateY(-50%);
}



</style>