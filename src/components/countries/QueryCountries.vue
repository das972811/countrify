<template>
    <section>
        <div class="search-countries">
            <input id="search-countries" name="search-countries" type="text" required />
            <label for="search-countries"><search-icon></search-icon><span>Search for Countries</span></label>
        </div>
        <div class="filter-countries">
            <ul>
                <li><down-arrow-icon></down-arrow-icon></li>
                <li><button>Filter by Region</button></li>
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

    transition: top 250ms ease-in-out,
                background-color 250ms ease-in-out,
                font-size 250ms ease-in-out;
}

.search-countries > label[for="search-countries"] span
{
    margin-left: 0.3rem;
}


.search-countries input[type='text']:focus + label[for="search-countries"],
.search-countries input[type='text']:valid + label[for="search-countries"] {
    top: 0;
    width: initial;
    font-size: 0.8rem;
    background-color: var(--input-background-color-primary);
    /* #394651 */
    padding: 0.1rem 0.2rem;
    border-radius: 0.2rem;
}

.filter-countries > ul {
    display: flex;
    list-style: none;
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