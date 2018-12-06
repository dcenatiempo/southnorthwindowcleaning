<template>
  <area-page
    :area="$store.state.areas.holladay"/>
</template>

<script>
import AreaPage from '~/components/AreaPage.vue'

export default {
  components: {
    AreaPage
  }
}
</script>

<style>
</style>
