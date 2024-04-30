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
    "@nuxt/content",
    "nuxt-security"
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
  },
  routeRules: {
    '/api/contact': {
      security: {
        rateLimiter: {
          tokensPerInterval: 100, // number of requests allowed before rate limiting
          interval: 60000, // time in milliseconds after which the rate limiting will be reset
          headers: true, // set response headers related to rate limiting
          throwError: true, // throw an error when rate limit is exceeded
        }
      },
      csurf: {
        methodsToProtect: ['POST'],
      }
    },
  }
});