module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Agencies',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favikon.png' },
      { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css?family=Poppins:400,700,800' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
  ],
  css: [
    // Load a Node.js module directly (here it's a Sass file)
   
    // CSS file in the project
    '@/assets/app.css',
    // SCSS file in the project
    //'@/assets/css/main.scss'
  ],

  plugins: [
    {
      src: '~/plugins/vue-markdown.js',
      ssr: true,
    },
    {
      src: '~/plugins/vue-markdown.js',
      ssr: true
    }
  ],

  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

