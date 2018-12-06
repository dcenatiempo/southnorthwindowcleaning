<template>
  <div class="rating">
    <template v-for="n in possible">
      <star-icon
        v-if="isFull(n)"
        :key="`${id}-star-${n}`"
        class="star"/>
      <star-half-icon
        v-else-if="isHalf(n)"
        :key="`${id}-star-${n}`"
        class="star"/>
      <star-outline-icon
        v-else
        :key="`${id}-star-${n}`"
        class="star"/>
    </template>
    <span>{{ rating }}</span>
  </div>
</template>

<script>
import StarIcon from 'vue-material-design-icons/Star.vue'
import StarOutlineIcon from 'vue-material-design-icons/StarOutline.vue'
import StarHalfIcon from 'vue-material-design-icons/StarHalf.vue'

export default {
  components: {
    StarIcon,
    StarOutlineIcon,
    StarHalfIcon
  },
  props: {
    rating: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      id: this.getId()
    }
  },
  computed: {
    stars() {
      return parseFloat(this.rating.split('/')[0])
    },
    possible() {
      return parseInt(this.rating.split('/')[1])
    }
  },
  methods: {
    getId() {
      var id = ''
      var possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

      for (let i = 0; i < 8; i++)
        id += possible.charAt(Math.floor(Math.random() * possible.length))

      return id
    },
    isFull(n) {
      return n <= this.stars
    },
    isHalf(n) {
      return n - this.stars < 1
    }
  }
}
</script>

<style lang="scss" scoped>
.rating {
  color: #ffa800;
  padding: 5px 10px 0 0;
  display: flex;
  align-items: center;

  .star {
    color: inherit;
  }

  span:last-child {
    padding-left: 10px;
  }
}
</style>
