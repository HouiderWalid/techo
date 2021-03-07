<template>
    <div class="main-header d-flex flex-xl-row flex-lg-row flex-column justify-content-around p-3">
        <span class="logo d-flex flex-row justify-content-center align-items-center order-0">
            <img class="image m-4" :src="'images/' + logo.SiteLogoImage.url" height="80" width="80" :alt="logo.SiteLogoImage.alt">
            <span class="d-flex flex-column">
                <span id="name">{{ $t(logo.SiteName) }}</span>
                <span id="description">{{ $t(logo.SiteDescription) | capw }}</span>
            </span>
        </span>
        <span class="d-flex flex-row justify-content-center align-items-center order-xl-1 order-lg-1 order-2 m-xl-0 m-lg-0 m-3">
            <SearchBox></SearchBox>
        </span>
        <span class="cart d-flex flex-row justify-content-center align-items-center order-xl-2 order-lg-2 order-1">
            <Cart icon-name="shopping-bag" :cart-count="cart.CartCounter"></Cart>
            <span class="amount d-flex flex-row justify-content-start">
                <span class="text">{{ $t(cart.CartText) + ' : ' }}</span>&nbsp;
                <span class="number">
                    <span class="currency">{{ $t(cart.CartCurrency) }}</span>
                    <span class="digit">{{ cart.CartAmount.toFixed(2) }}</span>
                </span>
            </span>
        </span>
    </div>
</template>

<script>
export default {
    name: "MainHeaderComponent",
    components: {
        Cart: () => import('../other/CartComponent'),
        SearchBox: () => import('../other/SearchBoxComponent')
    },
    data() {
        return {
            logo: {
                SiteName: 'techo',
                SiteDescription: 'electronic_shop',
                SiteLogoImage: {
                    url: 'techo-logo.png',
                    alt: 'modern-electronic-shop'
                },
            },
            cart: {
                CartCounter: 0,
                CartText: 'cart_text',
                CartAmount: 0,
                CartCurrency: '$',
                CartProduct: []
            }
        }
    }
}
</script>

<style lang="sass" scoped>
$light-grey: #999999
$red: #E42C2E
.main-header
    color: $light-grey

    .logo
        #name
            line-height: 1
            text-align: initial
            font-size: 30px
            color: initial

    .cart
        color: initial

        .amount
            font-size: 18px

            .text
                text-transform: uppercase
                color: initial

            .number
                font-weight: bold
                color: $red
                .digit
                    font-family: 'Dosis', sans-serif


</style>
