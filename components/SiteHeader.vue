<template>
  <header>
    <h1>South North Window Cleaning</h1>
    <phone-link
      :phone="phone"
      :compact="true"/>
  </header>
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

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  background: transparent;
  // height: 40px;
  display: flex;
  align-items: flex-end;
  background: rgb(62, 92, 131);
  padding: 0.5rem 1rem;

  h1 {
    color: white;
    padding-right: 1rem;
  }

  @media screen and (max-width: 540px) {
    h1 {
      font-size: 5.8vw;
    }
  }
}
</style>
