<template>
  <main>
    <img :src="area.photo">
    <nuxt-link
      :to="'/'"
      class="city-link">
      <h1>{{ area.name + " Window Cleaning" }}</h1>
    </nuxt-link>
    <p>
      Are your windows looking like walls?
    </p>
    <p>
      Has your view gone south?
    </p>
    <p>
      South North Window Cleaning is ready to change all that for you. We are happy to be serving {{ area.name }} year round with the best window cleaning service in Utah. But don't take our word for it!
    </p>
    <p>
      Read all of our reviews from your city below. For more real reviews, go to <nuxt-link :to="'/'">UT window cleaning reviews</nuxt-link>
    </p>
    <div class="testimonials">
      <testimonial-card
        v-for="(testimonial, index) in $store.getters[`${getCity(area.name)}Testimonials`]"
        :key="`t-${index}`"
        :testimonial="testimonial"/>
    </div>
  </main>
</template>

<script>
import TestimonialCard from '~/components/TestimonialCard.vue'

export default {
  components: {
    TestimonialCard
  },
  props: {
    area: {
      type: Object,
      default: () => ({
        name: '',
        photo: '',
        caption: '',
        contents: ''
      })
    }
  },
  computed: {
    testimonials() {
      let city = this.area.name
      if (city.length == 0) return []
      city = city.split(' ')
      city[0] = city[0].toLowerCase()
      city = city.join('')
      return this.$store.getters[`${city}Testimonials`]
    }
  },
  methods: {
    getCity(name) {
      if (name.length == 0) return []
      let city = name.split(' ')
      city[0] = city[0].toLowerCase()
      return city.join('')
    }
  },
  head() {
    return {
      title: 'Welcome!',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  padding: 1rem;

  p {
    margin: 1rem 0;
  }

  img {
    margin-left: -1rem;
    width: 100vw;
    // min-width: 300px;
    // max-width: 500px;
  }

  a.city-link {
    text-decoration: none;
    color: black;
  }
  .testimonials {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
    // align-items: start;

    .testimonial-card {
      flex-basis: 200px;
      flex-grow: 1;
    }
  }
}
</style>
