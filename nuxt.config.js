export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tech-catalog-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
  server: {
    port: 80,
  },

  
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  auth: {
    strategies: {
      google: {
        clientId: '909450569518-a13qpdatseo5vodup53g2ll8ifa4pej9.apps.googleusercontent.com',
        codeChallengeMethod: '',
        responseType: 'code',
        endpoints: {
          token: 'https://8g4m6i.deta.dev/login', // some backend url to resolve your auth with google and give you the token back
          userInfo: 'http://localhost/auth/user/' // the endpoint to get the user info after you recived the token 
        },
      },
      },
    }
  }
