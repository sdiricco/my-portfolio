// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: { global: true, dirs: ["~/components"] },
  content: {
    documentDriven: true,
    highlight: {
      // Theme used in all color schemes.
      theme: "github-dark",
    },
    markdown: {
      // Object syntax can be used to override default options
      remarkPlugins: {
        // Override remark-emoji options
        "remark-emoji": {
          emoticon: true,
        },
        "remark-gfm": {},
      },
    },
  },
  runtimeConfig: {
    public: {
      openaiApiKey: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
  },
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
  modules: [
    "nuxt-primevue",
    "@nuxt/content",
    "nuxt-icon",
    "@pinia/nuxt",
    "@nuxtjs/i18n"
  ],
  css: [
    "primevue/resources/themes/aura-dark-green/theme.css",
    "primeflex/primeflex.css",
    "primeicons/primeicons.css",
    "~/assets/index.css",
  ],
});