import Vuex from 'vuex'

// Salt Lake
const SaltLake = 'Salt Lake City',
  Holladay = 'Holladay',
  Murray = 'Murray',
  CottonwoodHeights = 'Cottonwood Heights',
  Sandy = 'Sandy',
  Draper = 'Draper',
  Herriman = 'Herriman',
  Riverton = 'Riverton',
  Taylorsville = 'Taylorsville',
  Millcreek = 'Millcreek',
  SouthJordan = 'South Jordan',
  WestJordan = 'West Jordan',
  WestValley = 'West Valley City',
  Midvale = 'Midvale'
// Utah
const SaratogaSprings = 'Saratoga Springs'
// Davis
const Bountiful = 'Bountiful',
  Ogden = 'Ogden'

const state = {
  width: 1000,
  height: 1000,
  phone: '(801) 699-9664',
  email: 'devanfields1@gmail.com',
  areas: {
    // Salt Lake County
    saltLakeCity: {
      name: SaltLake,
      photo:
        'https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,fl_lossy/g5/g5-c-icwh344r-acacia-capital-corporation-client/g5-cl-56goo8hbq-irving-schoolhouse-apartments/uploads/irving-schoolhouse-hero.jpg',
      caption: '',
      contents: ''
    },
    holladay: {
      name: Holladay,
      photo: 'https://m1.cbhomes.com/p/952/1523804/46668c9D914941c/full.jpg',
      caption: '',
      content: ''
    },
    murray: {
      name: Murray,
      photo: 'https://c2.staticflickr.com/2/1513/23985646120_410f641bfc_b.jpg',
      caption: '',
      content: ''
    },
    cottonwoodHeights: {
      name: CottonwoodHeights,
      photo:
        'http://p1cdn4static.civiclive.com/UserFiles/Servers/Server_109694/Image/News/2015/RevelBCC.jpg',
      caption: '',
      content: ''
    },
    sandy: {
      name: Sandy,
      photo:
        'http://assets.utahrealestate.com/photos/640x480/1480140_680f004bab6131e64907bf4b2c5a69af_721576.jpg',
      caption: '',
      content: ''
    },
    draper: {
      name: Draper,
      photo:
        'http://suncrestlifestyle.com/wp-content/uploads/2015/04/suncrestutah.com_.jpeg',
      caption: '',
      content: ''
    },
    herriman: {
      name: Herriman,
      photo:
        'https://thedisneyblog.com/wp-content/uploads/2011/07/UP_house_front_wballoons.jpg',
      caption: '',
      content: ''
    },
    riverton: {
      name: Riverton,
      photo:
        'https://cdn.suddenventures.com/www.newhorse.com/dynamic/2013/10/13/52fe75f4bafa6.1.jpg',
      caption: '',
      content: ''
    },
    taylorsville: {
      name: Taylorsville,
      photo:
        'http://www.utahagenda.com/wp-content/uploads/2013/01/20140119_120416.jpg',
      caption: '',
      content: ''
    },
    millcreek: {
      name: Millcreek,
      photo: '',
      caption: '',
      content: ''
    },
    southJordan: {
      name: SouthJordan,
      photo: '',
      caption: '',
      content: ''
    },
    westJordan: {
      name: WestJordan,
      photo: '',
      caption: '',
      content: ''
    },
    westValleyCity: {
      name: WestValley,
      photo: '',
      caption: '',
      content: ''
    },
    midvale: {
      name: Midvale,
      photo: '',
      caption: '',
      content: ''
    },
    // Davis County
    bountiful: {
      name: Bountiful,
      photo:
        'https://s3-us-west-2.amazonaws.com/ldsbookstore/products/Bountiful-Utah-Temple-Valley-Evening/Bountiful-Valley-Group-C.jpg',
      caption: '',
      content: ''
    },
    ogden: {
      name: Ogden,
      photo:
        'https://s3-us-west-2.amazonaws.com/ldsbookstore/products/Bountiful-Utah-Temple-Valley-Evening/Bountiful-Valley-Group-C.jpg',
      caption: '',
      content: ''
    }
  },
  testimonials: [
    {
      client: 'Talina S.',
      content:
        'Devan did an amazing job! Our windows are sparkling clean! He was on time, very professional and flexible with our busy schedule and unpredictable weather.',
      rating: '5/5',
      source: 'HomeAdvisor',
      city: SaltLake
    },
    {
      client: 'Roxie B.',
      content:
        'My windows never looked shinier. Devan was delightful and I enjoyed having him and his sister in my home. I will continue to call on him for future cleaning.',
      date: '11-26-2018',
      rating: '5/5',
      source: 'HomeAdvisor',
      city: SaltLake
    },
    {
      client: 'Pat P.',
      content:
        'They were efficient and did an excellent job before Thanksgiving too!!',
      date: '11-20-2018',
      rating: '5/5',
      source: 'HomeAdvisor',
      city: SouthJordan
    },
    {
      client: 'Tracey A.',
      content: '',
      date: '11-17-2018',
      rating: '5/5',
      source: 'HomeAdvisor',
      city: Ogden
    },
    {
      client: 'Susan W.',
      content:
        "Devan is the first window washer that I have hired through Home Advisor and I am sooooo pleased! He responded to my inquiry quickly and pleasantly. He did an excellent job on my windows and I can't be happier. I will be letting others know that they can count on him to do the job we all hope to receive from hiring someone we don't know. He deserves all the 5.0 ratings!!",
      date: '11-16-2018',
      rating: '9/10',
      source: 'HomeAdvisor',
      city: SaltLake
    },
    {
      client: ' Jason R.',
      content: 'Did a great job 👍🏻',
      date: '11-08-2018',
      rating: '5/5',
      source: 'HomeAdvisor',
      city: SaratogaSprings
    },
    {
      client: 'Lynda T.',
      content:
        "Devan did an excellent job. He removed all of the screens and washed them and the windows are really sparkling. He arrived on time and is very personable and easy to work with. I couldn't be more pleased. He was the first one to call after I submitted my information. I was impressed by that also.",
      date: '11-06-2018',
      rating: '4.5/5',
      source: 'HomeAdvisor',
      city: SaltLake
    },
    {
      client: 'Robynne B.',
      content: 'super job',
      date: '10-31-2018',
      rating: '5/5',
      source: 'HomeAdvisor',
      city: SaltLake
    },
    {
      client: ' Joseph S.',
      content:
        'Arrived on time, very personable and completed the job as discussed.',
      date: '10-22-2018',
      rating: '5/5',
      source: 'HomeAdvisor',
      city: CottonwoodHeights
    },
    {
      client: 'Peggy B.',
      content:
        'I got an immediate response from South North Window Cleaning. He came later that day to give us an estimate, and arrived the next morning to get the job done. He was very personable and did an excellent job.',
      date: '10-21-2018',
      rating: '5/5',
      source: 'HomeAdvisor',
      city: Bountiful
    },
    {
      client: 'Pat P.',
      content:
        'I can see the neighborhood again! Devan called back within 10 minutes and came to the house within 2 hours and my windows were sparkly clean within an hour after that. He was very professional and detail oriented. Will definitely use this company again.',
      date: '10-20-2018',
      rating: '5/5',
      source: 'HomeAdvisor',
      city: Taylorsville
    },
    {
      client: 'Kelly W.',
      content:
        'My windows look wonderful! He contacted me right away and was able to do the work the very same day.',
      date: '10-18-2018',
      rating: '5/5',
      source: 'HomeAdvisor',
      city: Bountiful
    }
  ],
  reviewSites: {
    HomeAdvisor:
      'https://www.homeadvisor.com/rated.SouthNorthWindow.43287481.html#ratingsReviews'
  }
}

function cityTestimonialGetters(areas, testimonials) {
  let getters = {}
  for (let city in areas) {
    let area = areas[city]
    let name = area.name
    getters[`${city}Testimonials`] = state =>
      state.testimonials.filter(test => test.city === name)
  }
  return getters
}

const getters = cityTestimonialGetters(state.areas, state.testimonials)

const mutations = {
  setSize(state, { width, height }) {
    state.width = width
    state.height = height
  }
}

const createStore = () => {
  return new Vuex.Store({
    state: () => state,
    getters,
    mutations
  })
}

export default createStore
