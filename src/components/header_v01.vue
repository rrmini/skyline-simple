<template lang="pug">
header.header
  .header__open
    a(href='' v-on:click.prevent="overlayOpen").d-block
      BurgerButton
  .header__overlay(v-bind:class="{ 'header__overlay-active': isActive }")
    .header__wrap
      .header__logo
        router-link(to="/").header__logo-link skyline
      MenuList.menu__list
      SocMenu
      .header__close
        a(href='' v-on:click.prevent="overlayClose" )
          span.pe-7s-close-circle.pe-2x.pe-va
</template>

<script>
import BurgerButton from './BurgerButton.vue'
import MenuList from './MenuList.vue'
import SocMenu from './SocMenu.vue'
export default {
  name: 'HeaderV01',
  components: {BurgerButton, MenuList, SocMenu},
  data () {
    return {
      isActive: false}
  },
  methods: {
    overlayOpen () {
      this.isActive = true
    },
    overlayClose () {
      this.isActive = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../assets/style/mixins.styl"
.header
  background-color white
  padding 15px 50px
  &__logo
    &-link
      font-size 30px
      font-weight 300
      text-transform uppercase
      font-family Merriweather
      letter-spacing 3px
      line-height 40px
  &__open
    display none
    width 30px
    margin-left auto
  &__close
    display none
    position absolute
    top 30px
    right 30px
    font-size 22px
  &__overlay
    position relative
  &__wrap
    display flex
    justify-content space-between
    align-items center
    //background-color white

@media (max-width: 1200px)
  .header
    &__logo
      display none
    &__open, &__close
      display block
    &__overlay
      width 0
      min-height 100%
      background-color rgba(255,255,255,0.9)
      left 0
      position fixed
      top 0
      z-index 25
      overflow-x hidden
      trans(0.4)
      &-active
        width 100%
    &__wrap
      background-color #f0f4f7
      width 370px
      min-height 100%
      position absolute
      right 0
      flex-direction column
      align-items flex-start
      justify-content flex-start
      margin-left auto
      padding 35px 30px
      opacity 1
</style>
