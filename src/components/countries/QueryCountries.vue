<template>
    <section>
        <div class="search-countries">
            <input id="search-countries" name="search-countries" type="text" required />
            <label for="search-countries"><search-icon></search-icon><span>Search for Countries</span></label>
        </div>
        <div class="filter-by-continents" @mouseover="showContinentsDropdownHandler" @mouseleave="hideContinentsDropdownHandler">
            <button @click="toggleShowContinents">
                    <down-arrow-icon></down-arrow-icon> Filter by Region
            </button>
            <transition name="show-continents">
                <ul v-if="showContinents">
                    <li v-for="continent in continents" :key="continent">
                        <button :value="continent" @click="(event: object) => selectedContinent(event)">{{ continent }}</button>
                    </li>
                </ul>
            </transition>
        </div>
    </section>
</template>
<script setup lang="ts">
    import { ref } from 'vue';

    import SearchIcon from '../UI/icons/SearchIcon.vue';
    import DownArrowIcon from '../UI/icons/DownArrowIcon.vue';

    const continents = ref(['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania']);
    const showContinents = ref(false);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const showContinentsDropdownHandler = () => !isMobile ? showContinents.value = true : null;
    const hideContinentsDropdownHandler = () => !isMobile ? showContinents.value = false : null;
    const toggleShowContinents = () => isMobile ? showContinents.value = !showContinents.value : null;

    const selectedContinent = (event: any) => {
        console.log(event.target.value);
    }
    
</script>
<style scoped>
section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.search-countries {
    position: relative;
}

.search-countries input[type='text'] {
    display: inline-block;
    color-scheme: light;
    width: 25rem;
    font-size: 1rem;
    padding: 1.15rem 0 1.15rem 1rem;
    color: var(--text-color);
    background-color: var(--accent-color);
    outline: none;
    border: none;
    border-radius: 0.35rem;
}

.search-countries > label[for="search-countries"]
{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 4%;
    transform: translateY(-50%);
    background-color: transparent;
    color: var(--text-color);
    cursor: text;

    transition: top 150ms ease-in-out,
                left 150ms ease-in-out,
                font-size 150ms ease-in-out;
}

.search-countries > label[for="search-countries"] span
{
    margin-left: 0.3rem;
}

.search-countries input[type='text']:focus + label[for="search-countries"],
.search-countries input[type='text']:valid + label[for="search-countries"] {
    top: -25%;
    left: 0;
    width: initial;
    font-size: 0.8rem;
    padding: 0.1rem 0.7rem;
    border-radius: 0.2rem;
}

.filter-by-continents {
    position: relative;
    width: 12.5rem;
}

.filter-by-continents button {
    width: 100%;
    height: 3rem;
    background-color: var(--accent-color);
    color: var(--text-color);
    border: none;
    cursor: pointer;
    transition: color 250ms ease-in,
                font-size 250ms ease-in;
}

.filter-by-continents :not(:first-child) button:hover {
    color: var(--text-color-hover);
    font-size: 0.88rem;
}

.filter-by-continents > button:first-child {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.filter-by-continents > button:first-child svg {
    position: absolute;
    left: 1.75rem;
}

.filter-by-continents > ul {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    list-style: none;
}

.filter-by-continents li {
    display: inline-block;
    width: 100%;
    height: 100%;
}

.show-continents-enter-active {
    animation: fade-dropdown 175ms ease-in;
}

.show-continents-leave-active {
    animation: fade-dropdown 175ms ease-out reverse;
}

@keyframes fade-dropdown {
    0% {
        opacity: 0;
        transform: scale(0.9);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}


/* @media screen and (max-width: 1024px) {

} */

@media screen and (max-width: 950px) {
    section {
        flex-direction: column;
    }
    
    .search-countries input[type='text']{
        width: 100%;
    }

    .filter-by-continents {
        margin-top: 2.5rem;
        transform: translateY(0);
        width: 100%;
    }

    .filter-by-continents > button:first-child svg {
        left: 40%;
        transform: scale(1.4);
    }

    .filter-by-continents > button:first-child,
    .filter-by-continents ul li button {
        font-size: 1rem;
    }

    .filter-by-continents :not(:first-child) button:hover {
        color: var(--text-color-hover);
        font-size: 1.1rem;
    }
}

@media screen and (max-width: 875px) {
    .filter-by-continents > button:first-child svg {
        left: 39%;
    }
}

@media screen and (max-width: 800px) {
    .filter-by-continents > button:first-child svg {
        left: 38%;
    }
}

@media screen and (max-width: 700px) {
    .filter-by-continents > button:first-child svg {
        left: 36%;
    }
}

@media screen and (max-width: 650px) {
    .filter-by-continents > button:first-child svg {
        left: 34%;
    }
}

@media screen and (max-width: 575px) {
    .filter-by-continents > button:first-child svg {
        left: 32%;
    }
}

@media screen and (max-width: 500px) {
    .filter-by-continents > button:first-child svg {
        left: 28%;
    }
}

@media screen and (max-width: 400px) {
    .filter-by-continents > button:first-child svg {
        left: 25%;
    }
}
</style>