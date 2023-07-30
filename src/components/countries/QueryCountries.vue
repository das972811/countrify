<template>
    <section>
        <div class="search-countries">
            <input id="search-countries" name="search-countries" type="text" required />
            <label for="search-countries"><search-icon></search-icon><span>Search for Countries</span></label>
        </div>
        <div class="filter-countries">
            <button>
                <down-arrow-icon></down-arrow-icon> Filter by Region
            </button>
            <ul>
                <li><button>Africa</button></li>
                <li><button>America</button></li>
                <li><button>Asia</button></li>
                <li><button>Europe</button></li>
                <li><button>Oceania</button></li>
            </ul>
        </div>
    </section>
</template>
<script setup lang="ts">
    import SearchIcon from '../UI/icons/SearchIcon.vue';
    import DownArrowIcon from '../UI/icons/DownArrowIcon.vue';
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

@media screen and (max-width: 950px) {
    section {
        flex-direction: column;
    }
    
    .search-countries input[type='text']{
        width: 100%;
    }

    .filter-countries {
        margin-top: 2.5rem;
    }
}
</style>