<template lang="pug">
  .page-main
    HeaderV01
    main
      p error 404
</template>

<script>
import HeaderV01 from '../components/header_v01.vue'

export default {
  name: 'Error',
  components: {HeaderV01}
}
</script>

<style lang="stylus" scoped></style>
