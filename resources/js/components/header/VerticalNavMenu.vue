<template>
    <div class="vertical-nav-menu d-inline-block">
        <ul class="d-inline-flex flex-row flex-wrap m-0">
            <li v-for="item in VerticalNavItems" class="list position-relative d-flex align-items-center">
                <a :href="item.url"
                   class="link d-flex flex-row justify-content-center align-items-center">
                    <span>{{ $t(item.title) }}</span>
                    <IconSlot class="px-2 icon" icon-name="chevron-down" icon-size="xs"></IconSlot>
                </a>
                <!-- drop down component to make -->
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "VerticalNavMenu",
    components: {
        IconSlot: () => import('../other/IconSlotComponent'),
    },
    data() {
        return {
            VerticalNavItems: [
                {
                    id: 1,
                    title: 'home',
                    icon: null,
                    url: '#',
                    subLinks: []
                },
                {
                    id: 1,
                    title: 'chair',
                    icon: null,
                    url: '#',
                    subLinks: [
                        {
                            id: 1,
                            title: 'bake_ware',
                            icon: null,
                            img: 'https://demo.fieldthemes.com/techo/modules/fieldmegamenu/images/img1.jpg',
                            url: '#',
                            subLinks: []
                        },
                        {
                            id: 2,
                            title: 'entertaining',
                            icon: null,
                            img: 'https://demo.fieldthemes.com/techo/modules/fieldmegamenu/images/img2.jpg',
                            url: '#',
                            subLinks: []
                        },
                        {
                            id: 3,
                            title: 'entertaining',
                            icon: null,
                            img: 'https://demo.fieldthemes.com/techo/modules/fieldmegamenu/images/img3.jpg',
                            url: '#',
                            subLinks: []
                        }
                    ]
                },
                {
                    id: 1,
                    title: 'computer',
                    icon: null,
                    url: '#',
                    subLinks: []
                },
                {
                    id: 1,
                    title: 'shop',
                    icon: null,
                    url: '#',
                    subLinks: []
                },
                {
                    id: 1,
                    title: 'blog',
                    icon: null,
                    url: '#',
                    subLinks: []
                },
                {
                    id: 1,
                    title: 'electronic',
                    icon: null,
                    url: '#',
                    subLinks: []
                },
                {
                    id: 1,
                    title: 'contact_us',
                    icon: null,
                    url: '#',
                    subLinks: []
                }
            ]
        }
    }
}
</script>

<style lang="sass" scoped>
$red: #E42C2E
.vertical-nav-menu
    background-color: $red
    font-size: 15px

    li
        list-style: none
        height: 50px


    a
        text-decoration: none
        color: white
        font-family: 'Cairo', sans-serif
        text-transform: uppercase
        margin-right: 20px

        span
            font-weight: bold

        .icon
            font-size: 12px

</style>
