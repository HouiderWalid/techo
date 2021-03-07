<template>
    <span>
        <input class="search-box px-4" v-model="SearchContent" type="text" :placeholder="$t('search_text')">
    </span>
</template>

<script>
export default {
    name: "SearchBoxComponent",
    data() {
        return {
            SearchContent: ''
        }
    }
}
</script>

<style lang="sass" scoped>
$red: #E42C2E
.search-box
    min-width: 400px
    border: 2px solid $red
    height: 40px
    border-radius: 20px

</style>
