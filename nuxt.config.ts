// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";
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
    "@nuxtjs/seo"
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
  alias: {
    "@server": fileURLToPath(new URL("./server", import.meta.url)),
    "@api": fileURLToPath(new URL("./server/api", import.meta.url)),
    // "@types": fileURLToPath(new URL("./types", import.meta.url)),
  }
});
