<template>
    <section>
        <div class="search-countries">
            <input id="search-countries" name="search-countries" type="text" required />
            <label for="search-countries"><search-icon></search-icon><span>Search for Countries</span></label>
        </div>
        <div class="filter-countries" @mouseover="showCountriesDropdownHandler" @mouseleave="hideCountriesDropdownHandler">
            <button>
                    <down-arrow-icon></down-arrow-icon> Filter by Region
            </button>
            <transition name="show-countries">
                <ul v-if="showCountries">
                    <li v-for="country in countries" :key="country">
                        <button :value="country" @click="(event: object) => selectedCountry(event)">{{ country }}</button>
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

    const countries = ref(['Africa', 'America', 'Asia', 'Europe', 'Oceania']);
    const showCountries = ref(false);

    const showCountriesDropdownHandler = () => showCountries.value = true;
    const hideCountriesDropdownHandler = () => showCountries.value = false;

    const selectedCountry = (event: any) => {
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

.filter-countries {
    position: relative;
    width: 12.5rem;
}

.filter-countries button {
    width: 100%;
    height: 3rem;
    background-color: var(--accent-color);
    color: var(--text-color);
    border: none;
    cursor: pointer;
    transition: color 250ms ease-in,
                font-size 250ms ease-in;
}

.filter-countries button:hover {
    color: var(--text-color-hover);
    font-size: 0.88rem;
}

.filter-countries > button:first-child {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.filter-countries > button:first-child svg {
    position: absolute;
    left: 1.75rem;
}

.filter-countries > ul {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    list-style: none;
}

.filter-countries li {
    display: inline-block;
    width: 100%;
    height: 100%;
}

.show-countries-enter-active {
    animation: fade-dropdown 175ms ease-in;
}

.show-countries-leave-active {
    animation: fade-dropdown 175ms ease-out reverse;
}

@keyframes fade-dropdown {
    0% {
        opacity: 0;
        transform: scale(0.9);
        /* height: 0; */
    }

    100% {
        opacity: 1;
        transform: scale(1);
        /* height: 100%; */
    }
}

@media screen and (max-width: 950px) {
    section {
        flex-direction: column;
    }
    
    .search-countries input[type='text']{
        width: 100%;
        transform: translateY(-2rem);
    }

    .filter-countries {
        margin-top: 2.5rem;
        transform: translateY(0);
    }
}
</style>