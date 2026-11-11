// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt/icon",
    "vue3-carousel-nuxt",
  ],

  devServer: {
    port: 8080,
  },

  runtimeConfig: {
    public: {
      web3formsAccessKey: process.env.NUXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://krisops.netlify.app",
    },
  },

  // App meta
  app: {
    head: {
      title: "KrisOps | Bespoke Workflow Software",
      htmlAttrs: { lang: "en" },
      meta: [{ name: "description", content: "Bespoke software that connects business tools, simplifies manual work, and fits the way your team operates. Based in Ghana, working worldwide." }],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap",
        },
      ],
    },
  },
});
