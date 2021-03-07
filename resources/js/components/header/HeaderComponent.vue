<template>
    <div>
        <HeadBandComponent :data="HeadBandData"></HeadBandComponent>
        <MainHeaderComponent></MainHeaderComponent>
        <div class="header-nav position-absolute" style="height: calc(100% - 100vh); z-index: 1; width: 100%">
            <NavBarComponent></NavBarComponent>
        </div>
    </div>
</template>

<script>
import head_band_data from '../../data/head-band-data'
export default {
    name: "HeaderComponent",
    components: {
        HeadBandComponent: () => import('./HeadBandComponent'),
        MainHeaderComponent: () => import('./MainHeaderComponent'),
        NavBarComponent: () => import('./NavBarComponent')
    },
    data(){
        return {
            HeadBandData: head_band_data
        }
    }
}
</script>

<style scoped>
@media (max-width: 1061px) {
    .header-nav{
        position: static !important;

    }
}
</style>
