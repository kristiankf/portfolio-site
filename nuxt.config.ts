// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    "@nuxt/icon"
  ],

    // App meta
    app: {
      head: {
        title: "Kris Wale - Front-end Dev",
        meta: [
          { name: 'description', content: 'Creative front-end developer with more than +3 years of experience in enterprise companies and startups. Proficient in Html, Tailwind Css, Javascript, Vue, React and Angular. Passionate about UI/UX' },
          { name: 'keywords', content: 'Front-end, Web Development, Software Engineering, React, Vue, Javascript, Angular, CSS, HTML' },
        ],
        link: [
          { rel: 'preconnect', href: "https://fonts.googleapis.com" },
          { rel: 'preconnect', href: "https://fonts.gstatic.com", crossorigin: ''},
          { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" },
          { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" },
        ]
      }
    },
})