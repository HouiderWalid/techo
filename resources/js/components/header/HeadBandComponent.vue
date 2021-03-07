<template>
    <div class="head-band p-2 d-flex flex-wrap justify-content-around">
        <div class="d-inline-flex justify-content-center p-xl-0 p-lg-0 p-1 flex-wrap" v-if="data.BandInfo.length > 0">
            <span v-for="info in data.BandInfo" class="xs-font">
                <IconSlot :IconName="info.icon" IconSize="sm"
                          :icon-rotation="fitIconToDirection(info.rtlRotation)"></IconSlot>
                <span>{{ $t(info.title) + ' : '| capfw }}</span>
                <span>{{ info.content | capfw }}</span>
                <VerticalBorder v-if="!(data.BandInfo[data.BandInfo.length-1].id === info.id)"></VerticalBorder>
            </span>
        </div>
        <div class="d-inline-flex justify-content-center p-xl-0 p-lg-0 p-1 flex-wrap" v-if="data.BandLink.length > 0">
            <span v-for="link in data.BandLink" :key="link.id" class="xs-font links c-pointer">
                <template v-if="link.subLinks.length > 0">
                    <SimpleMenu :menu="link"></SimpleMenu>
                </template>
                <span v-else>
                    <IconSlot v-if="link.icon" :IconName="link.icon" IconSize="sm"></IconSlot>
                    <a class="link-hover" :href="link.url">{{ $t(link.title) | capfw }}</a>
                </span>
                <VerticalBorder v-if="!(data.BandLink[data.BandLink.length-1].id === link.id)"></VerticalBorder>
            </span>
        </div>
    </div>
</template>

<script>

export default {
    name: "HeadBandComponent",
    components: {
        IconSlot: () => import('../other/IconSlotComponent'),
        SimpleMenu: () => import('../other/SimpleMenu'),
        VerticalBorder: () => import('../other/VerticalBorder')
    },
    props: {
        data: {
            type: Object,
            required: true,
        }
    },
    methods: {
        fitIconToDirection(rt){
            return (document.querySelector('html').getAttribute('dir') === 'rtl' && rt) ? rt : '0'
        }
    }
}
</script>

<style lang="sass" scoped>
$light-grey: #999999
$red: #E42C2E
$super-light-grey: #EBEBEB
.head-band
    border-bottom: 1px solid $super-light-grey

.xs-font
    font-size: 12px
    color: $light-grey

.links
    a
        color: inherit
        text-decoration: none

    &:hover
        color: $red

.c-pointer
    cursor: pointer
</style>
