// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      web3formsAccessKey: process.env.NUXT_PUBLIC_WEB3FORMS_ACCESS_KEY || process.env.WEB3FORMS_ACCESS_KEY || '',
      whatsappNumber: process.env.NUXT_PUBLIC_WHATSAPP_NUMBER || process.env.WHATSAPP_NUMBER || ''
    }
  }
})
