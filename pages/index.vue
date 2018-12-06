<template>
  <main>
    <img src="http://placeimg.com/960/360/arch">
    <section>
      <h1>About Us</h1>
      Devan Has been cleaning windows professionally since he was a boy, working in his father's window cleaning business. He has a vast wealth of experience doing residential, comercial, and high rise window cleaning. His experience will ensure that your home is well taken care of by this seasoned professional.
    </section>
    <section>
      <h1>Contact</h1>
      email: {{ $store.state.email }}
      <br>
      phone: {{ $store.state.phone }}
    </section>
    <section>
      <h1>Testimonials</h1>
      <div class="testimonials">
        <testimonial-card
          v-for="(testimonial, index) in $store.state.testimonials"
          :key="`t-${index}`"
          :testimonial="testimonial"/>
      </div>
    </section>
    <section>
      <h1>Service Areas</h1>
      <ul>
        <li
          v-for="area in areas"
          :key="area.replace(/\s/gi, '-')">
          <nuxt-link
            :to="`/utah/${area.toLowerCase().replace(/\s/gi, '-')}-window-cleaning`">
            {{ area }}</nuxt-link>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import TestimonialCard from '~/components/TestimonialCard.vue'

export default {
  components: {
    TestimonialCard
  },
  data() {
    return {
      // areas: () => {
      //   let pages = []
      //   let areas = this.$store.state.areas
      //   for (let key in areas) {
      //     pages.push(areas[key].name)
      //   }
      //   return pages
      // }
    }
  },
  computed: {
    areas() {
      let pages = []
      let areas = this.$store.state.areas
      for (let key in areas) {
        pages.push(areas[key].name)
      }
      return pages
    }
  },
  head() {
    return {
      title: 'Welcome!',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
          charset: 'UTF-8'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

img {
  max-width: 100vw;
}

section {
  padding: 1rem;

  .testimonials {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    // align-items: start;

    .testimonial-card {
      flex-basis: 200px;
      flex-grow: 1;
    }
  }
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
