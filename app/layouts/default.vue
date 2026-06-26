<template>
  <div class="servipro-page overflow-x-hidden">
    <!-- Header / TopNavBar -->
    <header class="docked full-width top-0 sticky z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm h-20">
      <nav class="flex justify-between items-center px-margin-desktop w-full max-w-container-max mx-auto h-full">
        <div class="flex items-center gap-4">
          <img alt="ServiPro Logo" class="h-10 w-auto object-contain" src="/image/logo.jpg" />
          <span class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">CREPEM</span>
        </div>
        <div class="hidden md:flex items-center gap-stack-md">
          <a class="font-label-md text-label-md text-primary dark:text-primary-fixed-dim border-b-2 border-primary pb-1 hover:text-primary transition-colors" href="#">Inicio</a>
          <a class="font-label-md text-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors" href="#servicios">Servicios</a>
          <!-- <a class="font-label-md text-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors" href="#nosotros">Nosotros</a> -->
          <a class="font-label-md text-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors" href="#cotizar">Cotizar</a>
        </div>
        <div class="flex items-center gap-4">
          <a class="hidden sm:block bg-[#38BDF8] text-on-primary-fixed px-6 py-2 rounded-lg font-label-md text-label-md font-bold active:scale-95 transition-transform duration-150" href="#cotizar">
            Solicitar Cotización
          </a>
        </div>
      </nav>
    </header>
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
          <div class="flex flex-col gap-2">
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Navegación</span>
            <a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Privacidad</a>
            <a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Términos</a>
          </div>
          <div class="flex flex-col gap-2">
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Atención</span>
            <a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Soporte</a>
            <a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Contacto</a>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-between items-center gap-4 py-4">
        <p class="font-label-sm text-label-sm text-on-surface-variant opacity-80 hover:opacity-100 transition-opacity">© {{ new Date().getFullYear() }} CREPEM. Todos los derechos reservados.</p>
        <!-- <div class="flex gap-4">
          <span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">language</span>
          <span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">public</span>
        </div> -->
      </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">

useHead({
  title: 'ServiPro | Soluciones Integrales Profesionales',
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