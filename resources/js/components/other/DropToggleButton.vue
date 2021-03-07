<template>
    <div class="w-100 d-flex flex-row justify-content-around align-items-center static-type"
         @click="$emit('click', $event)">
            <span>
                <IconSlot class="px-2" IconName="bars" IconSize="sm"></IconSlot>
                <IconSlot v-if="menu.icon" :IconName="menu.icon" IconSize="sm"></IconSlot>
                <span v-if="menu.url">{{ $t(menu.title) | capfw }}</span>
                <span v-else>{{ $t(menu.title) | capfw }}</span>
            </span>
        <IconSlot IconName="caret-down" IconSize="sm"></IconSlot>
    </div>
</template>

<script>
export default {
    name: "DropToggleButton",
    components: {
      IconSlot: () => import('./IconSlotComponent')
    },
    props: {
        menu: {
            type: Object,
            default: function () {
                return {
                    id: 0,
                    title: '',
                    icon: null,
                    url: '#',
                }
            }
        }
    }
}
</script>

<style lang="sass" scoped>
$black: #202020
.static-type
    height: 50px
    cursor: pointer
    font-family: 'Cairo', sans-serif
    text-transform: uppercase
    font-size: 18px
    background-color: $black
    color: white

    a, span
        font-weight: bold
        font-family: inherit
</style>
