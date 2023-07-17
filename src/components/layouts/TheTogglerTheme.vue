<template>
    <div>
        <input class="checkbox" type="checkbox" id="toggle-theme" v-model="toggleTheme" @input="switchColorTheme"/>
        <label class="toggle-theme" for="toggle-theme">
            <sun-icon></sun-icon>
            <moon-icon></moon-icon>
            <span class="ball"></span>
        </label>
    </div>
</template>
<script setup lang="ts">
    import { onMounted, ref } from 'vue';

    import MoonIcon from '@/components/UI/icons/MoonIcon.vue';
    import SunIcon from '@/components/UI/icons/SunIcon.vue';

    const toggleTheme = ref(false);

    const switchColorTheme = () => {
        const mode = document.documentElement.className;
        if (mode === 'dark-theme') {
            document.documentElement.className = '';
        } else if (mode === '') {
            document.documentElement.className = 'dark-theme';
        }
    }

    onMounted(() => {
        const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
        if (darkMode.matches) {
            toggleTheme.value = true;
        }
    });
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
    border: 1px solid var(--dark-grey);
    transition: border-color 150ms ease-in-out;
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
    transform:  translateX(-120%) translateY(-50%);
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: var(--accent-color);
    transition: transform 250ms ease-in-out;
}

.checkbox:checked + label > .ball {
    transform:  translateX(22%) translateY(-50%);
}

@media (hover: hover) and (pointer: fine) {
    .toggle-theme:hover {
        border-color: var(--text-color);
    }
}
</style>