<template>
    <div class="nav-bar d-flex flex-wrap justify-content-center position-sticky" style="top: 0;z-index: 10">
        <SimpleMenu class="rounded mr-5" :menu="categories" menu-type="static"
                    :customStyle="{ '--menu-p': '25px', '--container-w': '280px', '--text-color': 'black', '--menu-font': '15px' }"></SimpleMenu>
        <VerticalNavMenu></VerticalNavMenu>
    </div>
</template>

<script>
export default {
    name: "NavBarComponent",
    components: {
        SimpleMenu: () => import('../other/SimpleMenu'),
        VerticalNavMenu: () => import('../header/VerticalNavMenu'),

    },
    data() {
        return {
            categories: {
                id: 1,
                title: 'all_categories',
                icon: null,
                url: '#',
                subLinks: [
                    {
                        id: 1,
                        title: 'computer_laptop',
                        icon: 'laptop',
                        url: '',
                        img: 'https://demo.fieldthemes.com/techo/home2/modules/fieldvmegamenu/uploads/ver1.jpg',
                        subLinks: [
                            {
                                id: 1,
                                title: 'men_fashion',
                                icon: '',
                                url: null,
                                subLinks: [
                                    {
                                        id: 1,
                                        title: 'home_brewing',
                                        icon: '',
                                        url: null,
                                    },
                                    {
                                        id: 2,
                                        title: 'table_linens',
                                        icon: '',
                                        url: null,
                                    },
                                    {
                                        id: 3,
                                        title: 'knife_accessories',
                                        icon: '',
                                        url: null,
                                    },
                                    {
                                        id: 4,
                                        title: 'utensils_gadgets',
                                        icon: '',
                                        url: null,
                                    }
                                ]
                            },
                            {
                                id: 2,
                                title: 'men_fashion',
                                icon: '',
                                url: null,
                                subLinks: [
                                    {
                                        id: 1,
                                        title: 'home_brewing',
                                        icon: '',
                                        url: null,
                                    },
                                    {
                                        id: 2,
                                        title: 'table_linens',
                                        icon: '',
                                        url: null,
                                    },
                                    {
                                        id: 3,
                                        title: 'knife_accessories',
                                        icon: '',
                                        url: null,
                                    },
                                    {
                                        id: 4,
                                        title: 'utensils_gadgets',
                                        icon: '',
                                        url: null,
                                    }
                                ]
                            },
                            {
                                id: 2,
                                title: 'men_fashion',
                                icon: '',
                                url: null,
                                subLinks: [
                                    {
                                        id: 1,
                                        title: 'home_brewing',
                                        icon: '',
                                        url: null,
                                    },
                                    {
                                        id: 2,
                                        title: 'table_linens',
                                        icon: '',
                                        url: null,
                                    },
                                    {
                                        id: 3,
                                        title: 'knife_accessories',
                                        icon: '',
                                        url: null,
                                    },
                                    {
                                        id: 4,
                                        title: 'utensils_gadgets',
                                        icon: '',
                                        url: null,
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: 'electronics',
                        icon: 'camera',
                        url: '',
                        subLinks: [
                            {
                                id: 2,
                                title: 'men_fashion',
                                icon: '',
                                url: null,
                                subLinks: [
                                    {
                                        id: 1,
                                        title: 'home_brewing',
                                        icon: '',
                                        url: null,
                                    },
                                    {
                                        id: 2,
                                        title: 'table_linens',
                                        icon: '',
                                        url: null,
                                    },
                                    {
                                        id: 3,
                                        title: 'knife_accessories',
                                        icon: '',
                                        url: null,
                                    },
                                    {
                                        id: 4,
                                        title: 'utensils_gadgets',
                                        icon: '',
                                        url: null,
                                    }
                                ]
                            },
                            {
                                id: 2,
                                title: 'men_fashion',
                                icon: '',
                                url: null,
                                subLinks: [
                                    {
                                        id: 1,
                                        title: 'home_brewing',
                                        icon: '',
                                        url: null,
                                    },
                                    {
                                        id: 2,
                                        title: 'table_linens',
                                        icon: '',
                                        url: null,
                                    },
                                    {
                                        id: 3,
                                        title: 'knife_accessories',
                                        icon: '',
                                        url: null,
                                    },
                                    {
                                        id: 4,
                                        title: 'utensils_gadgets',
                                        icon: '',
                                        url: null,
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        id: 3,
                        title: 'phone_tablet',
                        icon: 'tablet-alt',
                        url: ''
                    },
                    {
                        id: 4,
                        title: 'fashion_accessories',
                        icon: 'tshirt',
                        url: ''
                    },
                    {
                        id: 5,
                        title: 'health_beauty',
                        icon: 'heart',
                        url: ''
                    },
                    {
                        id: 6,
                        title: 'books_office',
                        icon: 'briefcase',
                        url: ''
                    },
                    {
                        id: 7,
                        title: 'jewelery_watch',
                        icon: 'gem',
                        url: ''
                    },
                    {
                        id: 8,
                        title: 'sport_outdoor',
                        icon: 'football-ball',
                        url: ''
                    },
                    {
                        id: 9,
                        title: 'home_kitchen',
                        icon: 'utensils',
                        url: ''
                    }
                ],
            },
            mainMenu: {
                id: 1,
                title: 'home',
                icon: null,
                url: '#',
                subLinks: []
            }
        }
    }
}
</script>

<style lang="sass" scoped>
$red: #E42C2E
.nav-bar
    background-color: $red


@media (max-width: 1061px)
    .header-nav
        justify-content: start !important

</style>
