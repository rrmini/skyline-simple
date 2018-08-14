<template lang="pug">
  .page-main
    HeaderV01
    main
      p single column with sidebar
</template>

<script>
import HeaderV01 from '../components/header_v01.vue'

export default {
  name: 'SingleColumnSidebar',
  components: {HeaderV01}
}
</script>

<style lang="stylus" scoped></style>
