// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@bootstrap-vue-next/nuxt',
    'unplugin-icons/nuxt'
  ],
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@/assets/global.scss',
  ],
})
