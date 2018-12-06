<template>
  <a
    :href="'tel:+01-' + phone"
    :class="[colorMode, {margin: showIcon && showNumber}]"
    rel="nofollow">
    <span v-show="showNumber">
      {{ phone }}
    </span>
    <phone-icon
      v-show="showIcon"
      class="icon"/>
  </a>
</template>

<script>
import PhoneIcon from '~/components/Phone.vue'
export default {
  name: 'PhoneLink',
  components: {
    PhoneIcon
  },
  props: {
    phone: {
      type: String,
      default: ''
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    showNumber: {
      type: Boolean,
      default: true
    },
    colorMode: {
      type: String,
      default: 'dark'
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  display: flex;
  align-items: center;

  &.dark {
    color: black;
  }

  &.light {
    color: white;
  }

  .icon {
    font-size: 0;
    animation-name: look-at-me;
    animation-duration: 5s;
    animation-delay: 2s;
    animation-iteration-count: infinite;
  }

  &.margin {
    .icon {
      margin-left: 1rem;
    }
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
