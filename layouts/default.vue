<template>
  <div class="page-wrapper">
    <site-header :phone="phone"/>
    <nuxt/>
    <site-footer :phone="phone"/>
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter
  },
  data() {
    return {
      phone: '801-555-1212'
    }
  }
}
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.page-wrapper {
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;

  main {
    flex: 1 1 auto;
    margin-top: -40px;
  }
}
</style>
