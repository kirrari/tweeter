// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    jwtAccessTokenSecured: process.env.JWT_ACCESS_TOKEN_SECURED,
    jwtRefreshTokenSecured: process.env.JWT_REFRESH_TOKEN_SECURED,
  },
});
