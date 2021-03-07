<template>
    <div>
        <HeaderComponent></HeaderComponent>
        <MarginSliderComponent class="slider" style="margin-top: 50px"></MarginSliderComponent>
        <RandomCatComponent class="mt-4"></RandomCatComponent>
    </div>
</template>

<script>
export default {
    name: "HomeComponent",
    components: {
        HeaderComponent: () => import('../header/HeaderComponent'),
        RatingBarComponent: () => import('../other/RatingBarComponent'),
        MarginSliderComponent: () => import('../other/MarginSliderComponent'),
        RandomCatComponent: () => import('../body/RandomCatComponent')
    },
    data(){
        return {
            rating: 1
        }
    },
    computed: {
        getRating(){
            return this.rating
        }
    }
}
</script>

<style scoped>
@media (min-width: 1061px) {
    .slider{
        margin-top: 0;
    }
}
</style>
