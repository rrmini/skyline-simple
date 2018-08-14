<template lang="pug">
  .page-main
    HeaderV01
    main
      p single column
</template>

<script>
import HeaderV01 from '../components/header_v01.vue'

export default {
  name: 'SingleColumn',
  components: {HeaderV01}
}
</script>

<style lang="stylus" scoped></style>
