<template>
  <div class="testimonial-card">
    <star-rating :rating="testimonial.rating"/>
    <div class="sub-heading">
      <p class="client">
        {{ testimonial.client }} -
        <nuxt-link
          :to="`/utah/${testimonial.city.toLowerCase().replace(/\s/gi, '-')}-window-cleaning`"
          class="city"> {{ testimonial.city }}</nuxt-link>
      </p>
      <p>{{ moment(testimonial.date).fromNow() }}</p>
    </div>
    <p
      v-if="testimonial.content.length > 0"
      class="quote">{{ testimonial.content }}</p>
    <p
      v-else
      class="empty quote">No Comments...<br>We must have left them speechless!</p>
    <a
      :href="reviewSites[testimonial.source]"
      class="review-link"
      target="_blank">See the review on {{ testimonial.source }}</a>
  </div>
</template>

<script>
import StarRating from '~/components/StarRating.vue'

export default {
  name: 'TestimonialCard',
  components: {
    StarRating
  },
  props: {
    testimonial: {
      type: Object,
      default: () => ({
        client: '',
        content: '',
        city: '',
        date: '',
        rating: ''
      })
    }
  },
  computed: {
    reviewSites() {
      return this.$store.state.reviewSites
    }
  },
  methods: {
    moment(date) {
      return this.$moment(date)
    }
  }
}
</script>

<style lang="scss" scoped>
.testimonial-card {
  // border: solid 1px lightgray;
  border-radius: 3px;
  padding: 1.2rem;
  margin: 1rem;
  display: flex;
  flex-flow: column nowrap;
  background: white;
  box-shadow: 1px 1px 10px -3px rgba(0, 0, 0, 0.5);

  .sub-heading {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    p {
      color: gray;
    }
    .client {
      margin-right: 2rem;

      a.city {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
      }
    }
  }

  .quote {
    padding: 10px;
    flex-grow: 1;
    // font-size: 1.3em;

    &.empty {
      color: gray;
    }

    &:not(.empty)::before,
    &:not(.empty)::after {
      content: '"';
    }
  }

  .review-link {
    align-self: flex-end;
  }
}
</style>
