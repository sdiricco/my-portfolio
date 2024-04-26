// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  content: {
    documentDriven: true,
    highlight: {
      // Theme used in all color schemes.
      theme: 'github-dark'
    },
    markdown: {

      // Object syntax can be used to override default options
      remarkPlugins: {
        // Override remark-emoji options
        'remark-emoji': {
          emoticon: true
        },
        'remark-gfm': {}
      },
    }
  },
  modules: ["nuxt-primevue", "@nuxt/content", "nuxt-icon"],
  css: ["primevue/resources/themes/aura-dark-green/theme.css", "primeflex/primeflex.css", "primeicons/primeicons.css", "~/assets/index.css"],
});