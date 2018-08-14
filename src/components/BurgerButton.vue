<template lang="pug">
  .burger__btn
    .burger__item
    .burger__item.burger__item-sh
    .burger__item
</template>
<script>
export default {
  name: 'BurgerButton'
}
</script>

<style lang="stylus">
.burger
  &__btn
    display block
    width 30px
    &:hover .burger__item
      background-color #47a7d7
  &__item
    /*width 30px*/
    height 1px
    background-color #1a1a1a
    transition all 0.3s ease-in-out
    &-sh
      width 26px
      margin 6px 0 6px auto
</style>
