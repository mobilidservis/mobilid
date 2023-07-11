// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  typescript: {
    strict: true
  },
  alias: {
    assets: "/<rootDir>/assets",
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@vueuse/nuxt','nuxt-icon'
  ],
  runtimeConfig: {
    // The private keys which are only available server-side
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    // Keys within public are also exposed client-side
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY
    }
  }
})
