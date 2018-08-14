<template lang="pug">
.page-main
  HeaderV01
  main
    p layout 03 page
    router-link(to='/about') about
</template>

<script>
import HeaderV01 from '../components/header_v01.vue'
export default {
  name: 'LayoutV03',
  components: {HeaderV01}
}
</script>

<style lang="stylus"></style>
