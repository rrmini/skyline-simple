<template lang="pug">
  .page-main
    HeaderV01
    main
      p Layout v02
      router-link(to="/") layout01
</template>

<script>
import HeaderV01 from '../components/header_v01.vue'
export default {
  name: 'LayoutV02',
  components: {HeaderV01}
}
</script>

<style lang="stylus">

</style>
