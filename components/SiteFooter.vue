<template>
  <Footer>
    <span>&copy; 2018 South North Window Cleaning </span>
    <a
      :href="'tel:+01-' + phone"
      rel="nofollow">
      {{ phone }}</a>
  </Footer>
</template>

<script>
export default {
  components: {},
  props: {
    phone: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  }
}
</script>

<style>
</style>
