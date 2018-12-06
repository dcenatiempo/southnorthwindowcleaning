<template>
  <header>
    <h1>South North Window Cleaning</h1>
    <phone-link
      :phone="phone"
      :show-icon="true"
      :show-number="!compact"
      color-mode="light"/>
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
  },
  computed: {
    compact() {
      return this.$store.state.width < 768
    }
  },
  mounted() {
    let vm = this

    // this block will only run above function if window is done being resized
    var doit
    window.onresize = function() {
      clearTimeout(doit)
      doit = setTimeout(vm.resizeFinished, 50)
    }
    this.resizeFinished()
  },
  methods: {
    resizeFinished() {
      this.$store.commit('setSize', {
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
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
  justify-content: space-between;
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
