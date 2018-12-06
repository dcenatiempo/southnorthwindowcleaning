<template>
  <a
    :href="'tel:+01-' + phone"
    rel="nofollow">
    <template v-if="true">
      <phone-icon/>
    </template>
    <template v-else>
      {{ phone }}
    </template>
  </a>
</template>

<script>
import PhoneIcon from '~/components/Phone.vue'
export default {
  components: {
    PhoneIcon
  },
  props: {
    phone: {
      type: String,
      default: ''
    },
    compact: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  }
}
</script>

<style>
</style>
