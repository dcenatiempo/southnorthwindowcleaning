<template>
  <a
    :href="'tel:+01-' + phone"
    rel="nofollow">
    <phone-icon
      v-if="compact"
      class="icon"/>
    <span v-else>
      {{ phone }}
    </span>
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

<style lang="scss" scoped>
a {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;

  .icon {
    font-size: 0;
    animation-name: look-at-me;
    animation-duration: 5s;
    animation-delay: 2s;
    animation-iteration-count: infinite;
  }

  @keyframes look-at-me {
    1% {
      transform: rotate(15deg);
    }
    2% {
      transform: rotate(-10deg);
    }
    3% {
      transform: rotate(20deg);
    }
    4% {
      transform: rotate(-15deg);
    }
    5% {
      transform: rotate(25deg);
    }
    6% {
      transform: rotate(-20deg);
    }
    7% {
      transform: rotate(20deg);
    }
    8% {
      transform: rotate(-15deg);
    }
    9% {
      transform: rotate(15deg);
    }
    10% {
      transform: rotate(-10deg);
    }
    11% {
      transform: rotate(0deg);
    }
  }
}
</style>
