<template>
  <area-page
    :area="$store.state.areas.saltLakeCity"/>
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
