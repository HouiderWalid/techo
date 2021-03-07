<template>
    <div class="random-cat w-100 d-flex justify-content-center flex-wrap">
        <div class="cat m-1 position-relative" v-for="cat in categories">
            <span class="position-absolute" style="left: 20px; top: 40px">
                <h5>{{ $t(cat.small_title) }}</h5>
                <h4 class="font-weight-bold">{{ $t(cat.bold_title) }}</h4>
            </span>
            <img :src="cat.img" :alt="cat.alt" class="h-100 w-100">
        </div>
    </div>
</template>

<script>
export default {
    name: "RandomCatComponent",
    props: {
        categories: {
            type: Array,
            default: function () {
                return [
                    {
                        id: 1,
                        small_title: 'hot_promo',
                        bold_title: 'up_to_off',
                        img: 'https://demo.fieldthemes.com/techo/modules/fieldhtmlblock/images/img1.png',
                        alt: 'up_to_off'
                    },
                    {
                        id: 1,
                        small_title: 'new_smart_phone',
                        bold_title: 'save_up_to_off',
                        img: 'https://demo.fieldthemes.com/techo/modules/fieldhtmlblock/images/img2.png',
                        alt: 'save_up_to_off'
                    },
                    {
                        id: 1,
                        small_title: 'catch_big',
                        bold_title: 'your_cameras',
                        img: 'https://demo.fieldthemes.com/techo/modules/fieldhtmlblock/images/img3.png',
                        alt: 'your_cameras'
                    }
                ]
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.random-cat
    .cat
        height: 220px
        width: 370px
        text-transform: uppercase
        h4
            font-size: 26px
            margin-top: 10px
        h5
            font-size: 16px

</style>
