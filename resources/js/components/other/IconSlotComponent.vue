<template>
    <span>
        <fa-icon :icon="[ 'fas', IconName]" :size="IconSize" :rotation="IconRotation"></fa-icon>&nbsp;
    </span>
</template>

<script>
export default {
    name: "IconSlotComponent",
    props: {
        IconName: {
            type: String,
            required: true
        },
        IconSize: {
            type: String
        },
        IconRotation: {
            type: String,
            default: null
        }
    }
}
</script>

<style scoped>

</style>
