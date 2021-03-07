<template>
    <div :id="'menu-'+menu.id" :style="styleMerged"
         class="menu-container position-relative d-inline-flex flex-column justify-content-center">
        <span v-if="menuType === 'select'" class="menu-selected-item" @click="toggleMenu">
            <IconSlot v-if="selectedItem.icon" :IconName="selectedItem.icon" IconSize="sm"></IconSlot>
            <a v-if="selectedItem.url" :href="selectedItem.url">{{ $t(selectedItem.title) | capfw }}</a>
            <span v-else>{{ $t(selectedItem.title) | capfw }}</span>
            <IconSlot IconName="caret-down" IconSize="sm"></IconSlot>
        </span>
        <DropToggleButton v-if="menuType === 'static'" :menu="menu" @click="toggleMenu"></DropToggleButton>
        <div id="drop-down-menu" class="drop-down-menu position-absolute"
             :class="{ 'open': isOpen, 'adjust-left': (menuType === 'select'), 'overflow-hidden': overflow }"
             @mouseenter="overflow = false" @mouseleave="overflow = true">
            <div v-if="menu.subLinks && menu.subLinks.length > 0" class="overflow-hidden">
                <div v-for="item in menu.subLinks" :key="item.id"
                     :class="{ 'hover-selected': ( item.id === selectedItemId && menuType === 'select' ) }"
                     class="menu-item"
                     @click="selectLanguage(item)">
                    <div class="d-inline-flex flex-row justify-content-between w-100">
                        <span>
                            <IconSlot class="px-2" v-if="item.icon" :IconName="item.icon" IconSize="sm"></IconSlot>&nbsp;
                            <a class="item-hover" :href="item.url">{{ $t(item.title) | capfw }}</a>
                        </span>
                        <IconSlot v-if="item.subLinks" IconName="chevron-right" IconSize="sm"
                                  :icon-rotation="fitIconToDirection('180')"></IconSlot>
                    </div>
                    <ComplexMenu v-if="menuType === 'static' && item.subLinks && item.subLinks.length > 0"
                                 class="complex-menu position-absolute d-none"
                                 :menu="item"></ComplexMenu>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SimpleMenu",
    components: {
        IconSlot: () => import('./IconSlotComponent'),
        DropToggleButton: () => import('./DropToggleButton'),
        ComplexMenu: () => import('../other/ComplexMenu')
    },
    data() {
        return {
            overflow: true,
            selectedItemId: 1,
            isOpen: false,
            styleDefault: {
                '--container-w': 'auto',
                '--menu-p': '8px',
                '--menu-font': '12px',
                '--menu-height': 38 * this.menu.subLinks.length + 'px',
                '--text-color': '#999999',
                '--red': '#E42C2E',
                '--super-light-grey': '#EBEBEB',
                '--hover-bg': '#E42C2E',
                '--hover-text': 'white',
                '--item-p': 2,
            }
        }
    },
    props: {
        direction: {
            type: String,
            default: 'ltr'
        },
        menu: {
            type: Object,
            required: true,
            default: function () {
                return {
                    id: 0,
                    title: '',
                    icon: null,
                    url: '#',
                    subLinks: [
                        {id: 0, title: '', icon: '', url: null}
                    ]
                }
            }
        },
        menuType: {
            type: String,
            default: 'select'
        },
        customStyle: {
            type: Object,
            default: function () {
                return {}
            }
        }
    },
    computed: {
        selectedItem() {
            return this.menu.subLinks.filter(item => item.id === this.selectedItemId)[0]
        },
        styleMerged() {
            return Object.assign(this.styleDefault, this.customStyle)
        }
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen
        },
        selectLanguage(item) {
            this.selectedItemId = item.id
            this.$i18n.locale = item.code
            document.querySelector('html').setAttribute('dir', item.dir)
            this.toggleMenu()
        },
        fitIconToDirection(rt) {
            return (document.querySelector('html').getAttribute('dir') === 'rtl' && rt) ? rt : '0'
        }
    },
    created() {
        document.addEventListener('click', (event) => {
            if (!event.target.closest('#menu-' + this.menu.id)) this.isOpen = false
        })
    }
}
</script>

<style lang="sass">
$text-color: var(--text-color)
$red: var(--red)
$super-light-grey: var(--super-light-grey)
$hover-bg: var(--hover-bg)
$hover-text: var(--hover-text)
$item-padding: var(--item-p)
$menu-height: var(--menu-height)
$font: var(--menu-font)
$menu-padding: var(--menu-p)
$container-w: var(--container-w)
$black: #202020

.menu-container
    width: $container-w
    color: $text-color
    font-size: $font
    white-space: nowrap

    &:hover .menu-selected-item
        color: $red

    .menu-item
        border: 1px solid $super-light-grey
        padding: calc(#{$item-padding} * 5px) calc(#{$item-padding} * 10px)

        .complex-menu
            margin-top: calc(#{$item-padding} * -5px)

    .menu-item:hover, .hover-selected
        color: $hover-text
        background-color: $hover-bg

    .menu-item:hover
        > .complex-menu
            display: inline-flex !important

    .drop-down-menu
        width: $container-w
        z-index: 10
        background-color: white
        top: calc(#{$font} * 1.6 + #{$menu-padding} + 1px)
        max-height: 0
        transition: max-height .5s ease-in-out

    .adjust-left
        left: calc(#{$item-padding} * -10px)

    .complex-menu
        inset-inline-start: $container-w

    a
        text-decoration: none
        color: inherit


.menu-selected-item
    &:hover
        color: inherit

.open
    max-height: calc(#{$menu-height} * #{$item-padding}) !important

</style>
