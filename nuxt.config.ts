// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxtjs/seo",
    "@kgierke/nuxt-basic-auth",
    "@nuxt/content"
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      "Tenor Sans": true,
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
  site: {
    url: "https://enzofagundz.vercel.app/",
    name: "Portfólio | Enzo Fagundes",
    description: "Portfólio de Enzo Fagundes, desenvolvedor web fullstack",
    defaultLocale: "pt-BR",
  },
  app: {
    head: {
      titleTemplate: '%s - Portfólio | Enzo Fagundes',
    }
  },
  basicAuth: {
    enabled: true,
    users: [
      {
        username: "admin",
        password: "admin",
      },
    ],
    allowedRoutes: ["^(?!.*dashboard).*$"],
  }
});