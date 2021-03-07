<template>
    <div class="slider-container" :style="{ '--img-c': slider.images.length }">
        <span ref="controls" class="controls">
            <template v-for="img in slider.images">
                <input type="radio" :name='slider.name' :id="img.id" :checked="isChecked(img.id)">
                <label :for="img.id" @click="slide(img)"></label>
            </template>
        </span>
        <div class="slider" :style="{ marginInlineStart: -(activeImg * 100) + '%' }">
            <template v-for="img in slider.images">
                <img :src="img.imgPath" :alt="img.alt" class="slided">
                <div class="content"></div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: "MarginSliderComponent",
    data(){
        return {
            activeImg: 0,
        }
    },
    props: {
        slider: {
            type: Object,
            default: function () {
                return {
                    name: 'image-slide',
                    images: [
                        {
                            id: 'imgOne',
                            alt: '',
                            imgPath: 'https://demo.fieldthemes.com/techo/home2/modules/fieldslideshow/images/slider22-635.jpg',
                            content: {
                                side: 'left',
                                title: {
                                    active: true,
                                    content: ''
                                },
                                body: {
                                    active: true
                                },
                                button: {
                                    id: '',
                                    active: true,
                                    text: '',
                                }
                            }
                        },
                        {
                            id: 'imgTwo',
                            alt: '',
                            imgPath: 'https://demo.fieldthemes.com/techo/home2/modules/fieldslideshow/images/slider23-625.jpg',
                            content: {
                                side: 'left',
                                title: {
                                    active: true,
                                    content: ''
                                },
                                body: {
                                    active: true
                                },
                                button: {
                                    id: '',
                                    active: true,
                                    text: '',
                                }
                            }
                        },
                        {
                            id: 'imgThree',
                            alt: '',
                            imgPath: 'https://demo.fieldthemes.com/techo/home2/modules/fieldslideshow/images/slider21-528.jpg',
                            content: {
                                side: 'left',
                                title: {
                                    active: true,
                                    content: ''
                                },
                                body: {
                                    active: true
                                },
                                button: {
                                    id: '',
                                    active: true,
                                    text: '',
                                }
                            }
                        }
                    ]
                }
            }
        }
    },
    methods:{
        isChecked(sel){
            return this.slider.images.findIndex(el => el.id === sel) === this.activeImg
        },
        slide(img){
            this.activeImg = this.slider.images.findIndex(el => el.id === img.id)
        }
    },
    computed: {

    },
    mounted() {
        setInterval(() => {
            if (this.activeImg >= this.slider.images.length-1) this.activeImg = 0
            else this.activeImg ++
        },5000)
    }
}
</script>

<style lang="sass" scoped>
    $imgWidth: 100%
    $imgCount: var(--img-c)
    $red: #E42C2E
    $black: #202020
    .slider-container
        position: relative
        width: $imgWidth
        height: calc(100vw/3)
        overflow: hidden
        .controls
            width: 100%
            display: flex
            justify-content: center
            position: absolute
            bottom: 20px
            input
                display: none
                &:checked + label
                    background-color: $red
            label
                display: inline-block
                cursor: pointer
                width: 15px
                height: 15px
                border-width: 1px
                border-radius: 50%
                background-color: $black
                transition: 1s
                &:not(:last-child)
                    margin-inline-end: 8px
                &:hover
                    background-color: $red
        .slider
            transition: 1s
            display: flex
            width: calc(#{$imgWidth}*#{$imgCount})
            height: inherit
            .content
                width: 200px
                height: 200px
                position: absolute
                inset-inline-start: 10%
                inset-block-start: 40%
            img
                width: calc(#{$imgWidth}/#{$imgCount})
                height: inherit

</style>
