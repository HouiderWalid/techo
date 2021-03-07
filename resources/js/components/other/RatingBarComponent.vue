<template>
    <div id="rating-bar-container">
        <template v-for="choice in reversedRateChoices">
            <input :id='choice.id' type="radio" :name="name" :checked="(choice.content === score)" :disabled="disabled">
            <label :for='choice.id' @click="rate(choice.content)"></label>
        </template>
    </div>
</template>

<script>
export default {
    name: "RatingBarComponent",
    model: {
      prop: 'score',
      event: 'setScore'
    },
    props: {
        name: {
            type: String,
            default: 'star-rate'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        score: {
            type: Number,
            default: 1
        },
        rateList: {
            type: Array,
            default: function () {
                return [
                    {
                        id: 'star-one',
                        content: 1
                    },
                    {
                        id: 'star-two',
                        content: 2
                    },
                    {
                        id: 'star-three',
                        content: 3
                    },
                    {
                        id: 'star-four',
                        content: 4
                    },
                    {
                        id: 'star-five',
                        content: 5
                    }
                ]
            }
        },
    },
    computed: {
      reversedRateChoices(){
          return this.rateList.reverse()
      }
    },
    methods: {
        rate(score){
            if (!this.disabled) this.$emit('setScore', score)
        }
    }
}
</script>

<style lang="sass" scoped>

    #rating-bar-container
        display: inline-flex
        justify-content: center
        align-items: center
        flex-direction: row-reverse
        margin-left: 100px

        label::after
            cursor: pointer
            content: '☆' // Unicode For FontAwesome : f006 (library required though)

        input[type='radio']
            display: none
            &:enabled + label:hover::after,
            &:enabled + label:hover ~ label::after,
            &:checked ~ label::after
                content: '★' // Unicode For FontAwesome : f005 (library required though)

</style>
