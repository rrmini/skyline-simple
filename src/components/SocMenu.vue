<template lang="pug">
  ul.soc-menu__list
    li(v-for='item in items').soc-menu__item
      a(:href="'http://' + item.url" target="_blank")
        <font-awesome-icon :icon="[item.prefix, item.name]"></font-awesome-icon>
</template>
<script>
export default {
  name: 'SocMenu',
  data () {
    return {
      items: [
        {url: 'facebook.com', name: 'facebook-f', prefix: 'fab'},
        {url: 'twitter.com', name: 'twitter', prefix: 'fab'},
        {url: 'linkedin.com', name: 'linkedin-in', prefix: 'fab'},
        {url: 'plus.google.com', name: 'google-plus-g', prefix: 'fab'},
        {url: 'vimeo.com', name: 'vimeo-v', prefix: 'fab'},
        {url: 'flickr.com', name: 'flickr', prefix: 'fab'},
        {url: 'dribbble.com', name: 'dribbble', prefix: 'fab'},
        {url: '', name: 'rss', prefix: 'fas'}
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.soc-menu
  &__list
    display flex
    justify-content space-between
  &__item
    margin-right 15px
    font-size 12px
    &:last-child
      margin 0
@media (max-width: 1200px)
  .soc-menu
    &__list
      order 0
</style>
