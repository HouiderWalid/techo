<template>
    <div class="complex-menu flex-column p-4 bg-white">
        <div class="links d-flex flex-row justify-content-between">
            <ul v-for="list in menu.subLinks" class="list px-3">
                <a :href="list.url" class="link"><span>{{ $t(list.title) }}</span></a>
                <li v-for="item in list.subLinks" class="sub-list">
                    <a :href="item.url" class="sub-link">
                        <span>{{ $t(item.title) }}</span>
                    </a>
                </li>
            </ul>
        </div>
        <div v-if="menu.img" class="img px-3">
            <img :src="menu.img" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "ComplexMenu",
    props: {
        MenuType: {
            type: String,
            default: 'normal' /* img-item(-t, -b, -l, -r), img(-t, -b, -r, -l) */
        },
        menu: {
            type: Object,
            default: function () {
                return {
                    id: 1,
                    title: '',
                    icon: null,
                    url: '#',
                    img: '',
                    subLinks: [
                        {
                            id: 1,
                            title: '',
                            icon: '',
                            url: null,
                            subLinks: [
                                {
                                    id: 1,
                                    title: '',
                                    icon: '',
                                    url: null,
                                }
                            ]
                        }
                    ]
                }
            }
        }
    }
}
</script>

<style lang="sass">
$red: var(--red)
$super-light-grey: var(--super-light-grey)
.complex-menu
    border: 2px solid $super-light-grey
    border-inline-start-color: $red
    .list
        .link
            font-weight: bold
            font-size: 15px
    img:hover
        opacity: 0.8


    .sub-list
        list-style: none

    a
        text-decoration: none
        color: initial

        &:hover
            color: initial

</style>
