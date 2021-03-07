<template>
    <span>
        &nbsp;&nbsp;
        <div class="v-border"></div>
        &nbsp;&nbsp;
    </span>
</template>

<script>
export default {
    name: "VerticalBorder"
}
</script>

<style lang="sass"  scoped>
$light-grey: #cccccc
.v-border
    display: inline-block
    height: 8px
    width: 1px
    background-color: $light-grey !important
</style>
