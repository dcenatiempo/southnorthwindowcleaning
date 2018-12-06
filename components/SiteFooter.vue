<template>
  <footer>
    <span class="copy">&copy; 2018 South North Window Cleaning </span>
    <phone-link
      :phone="phone"
      :show-icon="false"
      :show-number="true"
      color-mode="dark"/>
  </footer>
</template>

<script>
import PhoneLink from '~/components/PhoneLink.vue'

export default {
  components: {
    PhoneLink
  },
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

<style scoped lang="scss">
footer {
  padding: 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 1rem;

  .copy {
    padding-right: 1rem;
  }
}
</style>
