<template lang="pug">
  .page-main
    HeaderV01
    main
      p layout 05 page
      router-link(to='/about') about
</template>

<script>
import HeaderV01 from '../components/header_v01.vue'
export default {
  name: 'LayoutV05',
  components: {HeaderV01}
}
</script>

<style lang="stylus"></style>
