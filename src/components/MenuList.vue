<template lang="pug">
  ul
    template(v-for="item in items")
      li(v-if="item.isSubMenu").menu__item.has-submenu
        a(href="#" v-on:click.prevent="openSubMenu").menu__link {{item.title}}
          span(v-if="item.isSubMenu").pe-7s-angle-down.pe-lg.pe-va
        ul.submenu
          template(v-for="subItem in item.submenu")
            li.submenu__item
              router-link(:to="subItem.rout" exact).submenu__link {{subItem.title}}
      li(v-else).menu__item
        router-link(:to="item.rout" exact).menu__link {{item.title}}
      //li(v-bind:class="{'has-submenu': item.isSubMenu}").menu__item
        router-link(:to="item.rout" exact).menu__link {{item.title}}
          span(v-if="item.isSubMenu").pe-7s-angle-down.pe-lg.pe-va
        ul(v-if="item.isSubMenu").submenu
          template(v-for="subItem in item.submenu")
            li.submenu__item
              router-link(:to="subItem.rout" exact).submenu__link {{subItem.title}}
</template>

<script>
export default {
  name: 'MenuList',
  data () {
    return {
      items: [
        {rout: '/',
          title: 'home',
          isSubMenu: true,
          submenu: [
            {rout: 'layout_v01', title: 'layout_v01'},
            {rout: 'layout_v02', title: 'layout_v02'},
            {rout: 'layout_v03', title: 'layout_v03'},
            {rout: 'layout_v04', title: 'layout_v04'},
            {rout: 'layout_v05', title: 'layout_v05'}
          ]},
        { rout: '/blogDetail',
          title: 'post',
          isSubMenu: true,
          submenu: [
            {rout: 'blogDetail', title: 'blog detail'},
            {rout: 'authorsDetail', title: 'authors detail'}
          ]},
        { rout: '#',
          title: 'features',
          isSubMenu: true,
          submenu: [
            {rout: 'singleColumn', title: 'single column'},
            {rout: 'singleColumnSidebar', title: 'single column with sidebar'},
            {rout: 'twoColumnSidebar', title: 'two columns with sidebar'},
            {rout: 'twoColumnMasonry', title: 'two columns masonry'},
            {rout: 'threeColumn', title: 'three columns'},
            {rout: 'threeColumnMasonry', title: 'three columns masonry'},
            {rout: 'comingSoon', title: 'coming soon'},
            {rout: 'error', title: 'error 404'}
          ]},
        {rout: 'about', title: 'About', isSubMenu: false, submenu: [{}]},
        { rout: 'lifeStyle',
          title: 'Category',
          isSubMenu: true,
          submenu: [
            {rout: 'lifeStyle', title: 'lifestyle'},
            {rout: 'music', title: 'music'},
            {rout: 'video', title: 'video'}
          ]},
        {rout: 'authors', title: 'authors', isSubMenu: false, submenu: [{}]},
        {rout: 'contact', title: 'Contact', isSubMenu: false, submenu: [{}]}
      ],
      isResponsive: (window.innerWidth < 1200)
    }
  },
  methods: {
    openSubMenu: function (event) {
      if (this.isResponsive) {
        var classList = event.currentTarget.nextElementSibling.classList
        classList.toggle('submenu-active')
      }
    }
  },
  mounted () {
    window.onresize = (event) => {
      this.isResponsive = (window.innerWidth < 1200)
      if (window.innerWidth > 1200) {
        var elem = document.getElementsByClassName('submenu-active')
        for (var i = 0; i < elem.length; i++) {
          elem[i].remove('submenu-active')
        }
      }
    }
  }
}
</script>

<style lang="stylus">
@import "../assets/style/variables.styl"
@import "../assets/style/mixins.styl"
.menu
  &__list
    display flex
    justify-content space-between
    &  .router-link-active
      color a-hover
  &__item
    margin 0 12px
    text-transform uppercase
  &__link
    text-transform uppercase
.has-submenu
  position relative
  & .menu__link:hover~ .submenu
    transform translateY(0)
    opacity 1
    visibility visible
.submenu
  border-top 2px solid a-hover
  background-color #f8f8f8
  //background-color #e6e6e4
  position absolute
  top 100%
  left 10px
  min-width 250px
  padding 13px 0
  trans(0.3)
  opacity 0
  visibility hidden
  transform translateY(8px)
  text-align left
  z-index 100
  &:before
    content ''
    display inline-block
    position absolute
    top -6px
    left 18px
    width 0
    height 0
    border-style solid
    border-width 0 4.5px 5px
    border-color transparent transparent #47a7d7
  &:hover
    transform translateY(0)
    opacity 1
    visibility visible
  &__item
    display block
    padding 7px 28px
  &-active
    display block
    transform translateY(0)
    opacity 1
    visibility visible
@media (max-width: 1200px)
  .menu
    &__list
      flex-direction column
      width 100%
      margin 67px 0
      order 1
    &__item
      margin 0
      line-height 40px
      border-bottom 1px solid #dedede
  .submenu
    display none
    &-active
      display block
      position relative
      transform translateY(0)
      opacity 1
      visibility visible
    /*position static*/
</style>
