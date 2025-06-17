// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'en',
    locales: [
      {code: 'en', name: 'English', file: 'en.json'},
      {code: 'fr', name: 'French', file: 'fr.json'}
    ]
  }
})