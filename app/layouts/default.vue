<template>
  <div class="servipro-page overflow-x-hidden">
    <!-- Header / TopNavBar -->
    <header class="docked full-width top-0 sticky z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm h-20">
      <nav class="flex justify-between items-center px-margin-desktop w-full max-w-container-max mx-auto h-full">
        <div class="flex items-center gap-4">
          <img alt="ServiPro Logo" class="h-14 w-auto object-contain" src="/image/logo-white.png" />
          <!-- <span class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">CREPEM</span> -->
        </div>
        <div class="hidden md:flex items-center gap-stack-md">
          <a class="font-label-md text-label-md text-primary dark:text-primary-fixed-dim border-b-2 border-primary pb-1 hover:text-primary transition-colors" href="#">Inicio</a>
          <a class="font-label-md text-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors" href="#servicios">Servicios</a>
          <!-- <a class="font-label-md text-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors" href="#nosotros">Nosotros</a> -->
          <a class="font-label-md text-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors" href="#cotizar">Cotizar</a>
        </div>
      </nav>
    </header>
    <a v-if="whatsappLink" :href="whatsappLink" aria-label="Escribir por WhatsApp" class="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-4 font-label-md text-label-md font-bold text-white shadow-lg shadow-green-500/30 ring-4 ring-surface/60 transition-all hover:scale-105 hover:brightness-110 active:scale-95" rel="noopener noreferrer" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <g fill="none">
          <g clip-path="url(#SVGXv8lpc2Y)">
            <path fill="currentColor" fill-rule="evenodd" d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967s-.47-.148-.669.15c-.198.297-.767.966-.94 1.164c-.174.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.019-.458.13-.606c.134-.133.297-.347.446-.52s.198-.298.297-.497c.1-.198.05-.371-.025-.52c-.074-.149-.668-1.612-.916-2.207c-.241-.579-.486-.5-.668-.51c-.174-.008-.372-.01-.57-.01s-.52.074-.792.372c-.273.297-1.04 1.016-1.04 2.479c0 1.462 1.064 2.875 1.213 3.074s2.095 3.2 5.076 4.487c.71.306 1.263.489 1.694.625c.712.227 1.36.195 1.872.118c.57-.085 1.758-.719 2.006-1.413s.247-1.289.173-1.413s-.272-.198-.57-.347m-5.422 7.403h-.004a9.87 9.87 0 0 1-5.032-1.378l-.36-.214l-3.742.982l.999-3.648l-.235-.374a9.86 9.86 0 0 1-1.511-5.26c.002-5.45 4.436-9.884 9.889-9.884a9.8 9.8 0 0 1 6.988 2.899a9.82 9.82 0 0 1 2.892 6.992c-.002 5.45-4.436 9.885-9.884 9.885m8.412-18.297A11.82 11.82 0 0 0 11.992 0C5.438 0 .102 5.335.1 11.892a11.86 11.86 0 0 0 1.587 5.945L0 24l6.304-1.654a11.9 11.9 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.82 11.82 0 0 0-3.48-8.413" clip-rule="evenodd" />
          </g>
          <defs>
            <clipPath id="SVGXv8lpc2Y">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </g>
      </svg>
    </a>
    <main>
      <slot />
    </main>
    <footer class="w-full px-margin-desktop py-stack-lg flex flex-col gap-stack-md bg-gradient-to-b from-surface-container-low to-surface-container-lowest">
      <div class="max-w-container-max mx-auto w-full">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-outline-variant pb-8">
        <div class="flex flex-col gap-2">
          <span class="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed-dim">CREPEM</span>
          <p class="font-body-md text-body-md text-on-surface-variant max-w-xs">Excelencia en servicios de mantenimiento para infraestructuras críticas.</p>
        </div>
        <div class="flex flex-wrap gap-8">
          <!-- <div class="flex flex-col gap-2">
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Navegación</span>
            <a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Privacidad</a>
            <a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Términos</a>
          </div> -->
          <div class="flex flex-col gap-2">
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Atención</span>
            <a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" v-if="whatsappLink" :href="whatsappLink">Contacto</a>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-between items-center gap-4 py-4">
        <p class="font-label-sm text-label-sm text-on-surface-variant opacity-80 hover:opacity-100 transition-opacity">© {{ new Date().getFullYear() }} CREPEM. Todos los derechos reservados.</p>
      </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">

const config = useRuntimeConfig()
const whatsappLink = computed(() => {
  const whatsappNumber = String(config.public.whatsappNumber ?? '').replace(/\D/g, '')
  return whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, quiero información sobre sus servicios.')}`
    : ''
})

useHead({
  title: 'CREPEM | Soluciones Integrales Profesionales',
  htmlAttrs: { class: 'dark', lang: 'es' },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap'
    }
  ],
  script: [
    {
      src: 'https://cdn.tailwindcss.com?plugins=forms,container-queries'
    },
    {
      innerHTML: `
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              colors: {
                "surface-bright": "#2c3a4c",
                "tertiary-container": "#231500",
                "inverse-on-surface": "#233143",
                "secondary": "#bcc7de",
                "surface-variant": "#273647",
                "primary-fixed": "#dae2fd",
                "on-secondary-fixed-variant": "#3c475a",
                "on-secondary-fixed": "#111c2d",
                "primary-fixed-dim": "#bec6e0",
                "secondary-container": "#3e495d",
                "on-tertiary": "#3e2d11",
                "secondary-fixed-dim": "#bcc7de",
                "on-surface-variant": "#c6c6cd",
                "on-tertiary-fixed-variant": "#574425",
                "surface-container": "#122131",
                "on-background": "#d4e4fa",
                "tertiary-fixed-dim": "#dec29a",
                "on-tertiary-container": "#957d5a",
                "surface-container-lowest": "#010f1f",
                "on-tertiary-fixed": "#271901",
                "tertiary-fixed": "#fcdeb5",
                "on-surface": "#d4e4fa",
                "primary-container": "#0f172a",
                "on-error": "#690005",
                "surface-tint": "#bec6e0",
                "error-container": "#93000a",
                "background": "#051424",
                "surface-container-high": "#1c2b3c",
                "surface-container-low": "#0d1c2d",
                "surface-container-highest": "#273647",
                "on-primary": "#283044",
                "on-primary-fixed": "#131b2e",
                "on-primary-container": "#798098",
                "inverse-surface": "#d4e4fa",
                "on-primary-fixed-variant": "#3f465c",
                "surface": "#051424",
                "inverse-primary": "#565e74",
                "tertiary": "#dec29a",
                "secondary-fixed": "#d8e3fb",
                "outline-variant": "#45464d",
                "primary": "#bec6e0",
                "surface-dim": "#051424",
                "outline": "#909097",
                "error": "#ffb4ab",
                "on-secondary": "#263143",
                "on-secondary-container": "#aeb9d0",
                "on-error-container": "#ffdad6",
                "accent-blue": "#38BDF8"
              },
              borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                full: "9999px"
              },
              spacing: {
                "stack-md": "24px",
                "stack-lg": "48px",
                base: "8px",
                "margin-mobile": "16px",
                "container-max": "1280px",
                "margin-desktop": "48px",
                "stack-sm": "12px",
                gutter: "24px"
              },
              fontFamily: {
                "headline-md": ["Inter"],
                "headline-sm": ["Inter"],
                "display-lg-mobile": ["Inter"],
                "body-lg": ["Inter"],
                "label-md": ["Inter"],
                "label-sm": ["Inter"],
                "display-lg": ["Inter"],
                "body-md": ["Inter"]
              },
              fontSize: {
                "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
                "headline-sm": ["20px", { lineHeight: "28px", fontWeight: "600" }],
                "display-lg-mobile": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "700" }],
                "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
                "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.02em", fontWeight: "500" }],
                "label-sm": ["12px", { lineHeight: "16px", fontWeight: "600" }],
                "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
                "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }]
              }
            }
          }
        }
      `
    }
  ]
})
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
}

.servipro-page {
  background-color: #051424;
  color: #d4e4fa;
  font-family: 'Inter', sans-serif;
}

.glass-card {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(30, 41, 59, 0.5);
}

.hero-gradient {
  background: linear-gradient(180deg, rgba(2, 6, 23, 0.7) 0%, rgba(5, 20, 36, 1) 100%);
}

.glow-hover:hover {
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.2);
  border-color: #38bdf8;
}

.step-transition {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
