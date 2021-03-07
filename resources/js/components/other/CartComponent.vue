<template>
    <span>
        <fa-layer class="counter fa-2x mr-2 p-4" position="top-right">
            <IconSlot class="icon" :IconName="IconName" :IconSize="IconSize"></IconSlot>
            <fa-text class="number" :value="CartCount" counter/>
        </fa-layer>
    </span>
</template>

<script>
export default {
    name: "CartComponent",
    components: {
        IconSlot: () => import('../other/IconSlotComponent'),
    },
    props: {
        IconName: {
            type: String,
            required: true
        },
        IconSize: {
            type: String
        },
        CartCount: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style lang="sass" scoped>
.counter
    .number
        font-size: 55px
</style>
