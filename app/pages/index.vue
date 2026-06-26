<template>
  <section class="relative min-h-[90vh] flex items-center pt-20">
    <div class="absolute inset-0 z-0">
      <div class="w-full h-full bg-cover bg-center" data-alt="A professional, high-end architectural shot of a modern glass skyscraper reflecting a deep blue twilight sky. The scene is clean, sharp, and evokes a sense of advanced engineering and corporate reliability. Soft navy gradients overlay the image to integrate it with the dark UI, while maintaining technical clarity in the structures visible." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBk8sqcacaAnoEScfcqbLibF239WvEpMYlnsys17TxGpO4t-4LXNFaLG_KML2h48ksG2COYLq3yIy2qWXdW3U2YI77xaT67nNmxQ6U6OtnQXbJ5OlShONkbtcW-Z6TS2yARuY0FAnEnAGOHbl7bX6nPlpOMdz5qG46t4VPqgFmzM_orRzcpSvXitQ-LGPwUpXXPxmPw8dryPHafBFwLkeCO0o9hRCsLxsvFncI1OubY_RneS4aiwIhCqFeHmPrHTM8kWqWe5mXeNC_M')"></div>
      <div class="absolute inset-0 hero-gradient"></div>
    </div>
    <div class="relative z-10 w-full max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
      <div class="flex flex-col gap-6">
        <span class="inline-flex items-center px-3 py-1 rounded-full bg-primary-container text-accent-blue text-label-sm font-label-sm border border-accent-blue/30 w-fit">
          Líderes en Mantenimiento Técnico
        </span>
        <h1 class="font-display-lg text-display-lg text-on-surface leading-tight">
          Soluciones Integrales para tu <span class="text-accent-blue">Hogar y Negocio</span>
        </h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          Expertos en climatización, electricidad, diseño y mantenimiento profesional con garantía de calidad. Servicio técnico de alto nivel.
        </p>
        <div class="flex flex-wrap gap-4 pt-4">
          <button class="bg-[#38BDF8] text-on-primary-fixed px-8 py-4 rounded-lg font-label-md text-label-md font-bold shadow-lg shadow-accent-blue/20 hover:brightness-110 transition-all active:scale-95" @click="scrollToSection('cotizar')">
            Cotizar Servicio
          </button>
          <button class="border border-outline-variant bg-surface-container/30 backdrop-blur-sm text-on-surface px-8 py-4 rounded-lg font-label-md text-label-md font-bold hover:bg-surface-container transition-all active:scale-95" @click="scrollToSection('servicios')">
            Ver Servicios
          </button>
        </div>
      </div>
      <div class="hidden lg:flex justify-end">
        <div class="relative w-80 h-80 rounded-3xl overflow-hidden glass-card p-2 transform rotate-3">
          <div class="w-full h-full rounded-2xl bg-cover bg-center" data-alt="Close-up macro shot of a sophisticated circuit board with glowing blue light paths. The visual represents high-tech electrical maintenance and smart home technology. The lighting is moody and technical, emphasizing precision and modern digital infrastructure within a dark, premium aesthetic." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCdUr5Wq5BcmYsbM3hturoBgZJXvQFK0fg22IGBVjlW-DrpaBsdDZdAaEN2kUJ_TW_W6zNIjI0nGAyL2m3DL1UBk3UUeFUK4yolf4j2_qLtdi5SJG1AwPfL-k2CAfQuMlsmm9974ZefgRHl83fD3m3pYyE-A0WUCVl7astbzDuip2hg7ChHxjltGgisXoMXM6O87UEzzGHe2olQeI-qz4IU2C6Nq-Vgmay9OZw_LMBaphG9PYJoQIh4-Mm2IX2wOVZ1I-zAm3uvgWbk')"></div>
          <div class="absolute bottom-4 left-4 right-4 p-4 glass-card rounded-xl">
            <div class="flex items-center gap-2 mb-1">
              <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span class="text-label-sm font-label-sm text-on-surface">Técnicos Activos</span>
            </div>
            <p class="text-label-md font-label-md font-bold text-accent-blue">Disponible 24/7</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-stack-lg bg-surface-container-low" id="servicios">
    <div class="max-w-container-max mx-auto px-margin-desktop">
      <div class="text-center mb-16">
        <h2 class="font-headline-md text-headline-md text-on-surface mb-4">Nuestros Servicios Especializados</h2>
        <div class="h-1 w-20 bg-accent-blue mx-auto rounded-full"></div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
        <div v-for="service in services" :key="service.value" class="glass-card p-8 rounded-xl flex flex-col gap-4 group glow-hover transition-all duration-300">
          <div class="w-14 h-14 rounded-lg bg-primary-container flex items-center justify-center text-accent-blue group-hover:scale-110 transition-transform">
            <span class="material-symbols-outlined text-4xl">{{ service.icon }}</span>
          </div>
          <h3 class="font-headline-sm text-headline-sm text-on-surface">{{ service.name }}</h3>
          <p class="font-body-md text-body-md text-on-surface-variant">{{ service.description }}</p>
          <button class="mt-auto text-left text-accent-blue font-label-md flex items-center gap-2 group-hover:underline" type="button" @click="selectServiceAndScroll(service.value)">Solicitar info <span class="material-symbols-outlined text-sm">arrow_forward</span></button>
        </div>
      </div>
    </div>
  </section>

  <section class="py-stack-lg bg-surface relative overflow-hidden" id="cotizar">
    <div class="absolute -top-24 -left-24 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl"></div>
    <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl"></div>
    <div class="max-w-4xl mx-auto px-margin-desktop relative z-10">
      <div class="glass-card rounded-2xl overflow-hidden">
        <div class="p-base bg-surface-container-high flex gap-1">
          <div class="h-1 flex-1 bg-accent-blue rounded-full transition-all duration-500" id="step-indicator-1"></div>
          <div class="h-1 flex-1 bg-outline-variant rounded-full transition-all duration-500" id="step-indicator-2"></div>
        </div>
        <div class="p-8 md:p-12">
          <form id="quoteForm" @submit.prevent="handleSubmit">
            <div class="step-transition" id="step1">
              <h2 class="font-display-lg-mobile text-display-lg-mobile text-on-surface mb-2">Solicitar Cotización</h2>
              <p class="font-body-md text-body-md text-on-surface-variant mb-8">Paso 1: ¿Qué servicio necesitas?</p>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                <label v-for="service in services" :key="`quote-${service.value}`" class="relative cursor-pointer group">
                  <input v-model="selectedService" class="peer sr-only" name="service" required type="radio" :value="service.value" />
                  <div class="flex flex-col items-center justify-center p-4 rounded-xl border border-outline-variant peer-checked:border-accent-blue peer-checked:bg-accent-blue/10 transition-all">
                    <span class="material-symbols-outlined text-3xl mb-2">{{ service.icon }}</span>
                    <span class="text-label-sm text-center">{{ service.name }}</span>
                  </div>
                </label>
              </div>
              <button class="w-full bg-[#38BDF8] text-on-primary-fixed py-4 rounded-lg font-label-md text-label-md font-bold shadow-lg shadow-accent-blue/20 hover:brightness-110 active:scale-95 transition-all" @click="nextStep" type="button">
                Siguiente Paso
              </button>
            </div>

            <div class="step-transition hidden opacity-0 translate-x-8" id="step2">
              <h2 class="font-display-lg-mobile text-display-lg-mobile text-on-surface mb-2">Datos de Contacto</h2>
              <p class="font-body-md text-body-md text-on-surface-variant mb-8">Paso 2: Cuéntanos sobre tu requerimiento.</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-6">
                <div class="space-y-2">
                  <label class="text-label-sm text-on-surface-variant">Nombre Completo</label>
                  <input class="w-full bg-surface-container border-outline-variant focus:border-accent-blue focus:ring-accent-blue/20 rounded-lg text-on-surface" placeholder="Ej: Juan Pérez" type="text" />
                </div>
                <div class="space-y-2">
                  <label class="text-label-sm text-on-surface-variant">Teléfono</label>
                  <input class="w-full bg-surface-container border-outline-variant focus:border-accent-blue focus:ring-accent-blue/20 rounded-lg text-on-surface" placeholder="+54 9 11 ..." type="tel" />
                </div>
                <div class="space-y-2">
                  <label class="text-label-sm text-on-surface-variant">Tipo de Propiedad</label>
                  <select class="w-full bg-surface-container border-outline-variant focus:border-accent-blue focus:ring-accent-blue/20 rounded-lg text-on-surface">
                    <option>Residencial / Hogar</option>
                    <option>Comercial / Negocio</option>
                    <option>Industrial</option>
                  </select>
                </div>
                <div class="space-y-2 md:col-span-2">
                  <label class="text-label-sm text-on-surface-variant">Mensaje / Descripción</label>
                  <textarea class="w-full bg-surface-container border-outline-variant focus:border-accent-blue focus:ring-accent-blue/20 rounded-lg text-on-surface" placeholder="¿En qué podemos ayudarte?" rows="4"></textarea>
                </div>
              </div>
              <div class="flex gap-4">
                <button class="flex-1 border border-outline-variant text-on-surface py-4 rounded-lg font-label-md text-label-md font-bold hover:bg-surface-container transition-all" @click="prevStep" type="button">
                  Volver
                </button>
                <button class="flex-[2] bg-[#38BDF8] text-on-primary-fixed py-4 rounded-lg font-label-md text-label-md font-bold shadow-lg shadow-accent-blue/20 hover:brightness-110 active:scale-95 transition-all" id="submitBtn" type="submit">
                  Enviar Solicitud
                </button>
              </div>
            </div>

            <div class="hidden flex flex-col items-center justify-center py-12 text-center" id="successState">
              <div class="w-20 h-20 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-6">
                <span class="material-symbols-outlined text-5xl">check_circle</span>
              </div>
              <h3 class="font-headline-md text-headline-md text-on-surface mb-2">¡Solicitud Enviada!</h3>
              <p class="font-body-md text-body-md text-on-surface-variant mb-8 max-w-sm">
                Un asesor técnico se pondrá en contacto contigo en las próximas 24 horas hábiles.
              </p>
              <button class="text-accent-blue font-label-md hover:underline" @click="resetForm" type="button">
                Realizar otra consulta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <section class="py-stack-lg bg-surface-container-low" id="nosotros">
    <div class="max-w-container-max mx-auto px-margin-desktop">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        <div class="flex flex-col items-center text-center gap-4">
          <div class="w-12 h-12 rounded-full border border-accent-blue flex items-center justify-center text-accent-blue">
            <span class="material-symbols-outlined">verified</span>
          </div>
          <h4 class="font-headline-sm text-headline-sm">Garantía Escrita</h4>
          <p class="font-label-md text-on-surface-variant">Respaldamos cada trabajo realizado con un certificado oficial de garantía.</p>
        </div>
        <div class="flex flex-col items-center text-center gap-4">
          <div class="w-12 h-12 rounded-full border border-accent-blue flex items-center justify-center text-accent-blue">
            <span class="material-symbols-outlined">badge</span>
          </div>
          <h4 class="font-headline-sm text-headline-sm">Técnicos Certificados</h4>
          <p class="font-label-md text-on-surface-variant">Personal altamente capacitado y con credenciales actualizadas.</p>
        </div>
        <div class="flex flex-col items-center text-center gap-4">
          <div class="w-12 h-12 rounded-full border border-accent-blue flex items-center justify-center text-accent-blue">
            <span class="material-symbols-outlined">support_agent</span>
          </div>
          <h4 class="font-headline-sm text-headline-sm">Atención 24/7</h4>
          <p class="font-label-md text-on-surface-variant">Atendemos urgencias técnicas en cualquier momento del día.</p>
        </div>
        <div class="flex flex-col items-center text-center gap-4">
          <div class="w-12 h-12 rounded-full border border-accent-blue flex items-center justify-center text-accent-blue">
            <span class="material-symbols-outlined">request_quote</span>
          </div>
          <h4 class="font-headline-sm text-headline-sm">Presupuestos Claros</h4>
          <p class="font-label-md text-on-surface-variant">Sin cargos ocultos ni sorpresas. Transparencia total en costos.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const selectedService = ref('')

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function selectServiceAndScroll(service: string) {
  selectedService.value = service
  scrollToSection('cotizar')
}

const services = [
  {
    name: 'Climatización y Aire Acondicionado',
    icon: 'ac_unit',
    description: 'Instalación, mantenimiento preventivo y reparación de sistemas centrales e individuales.',
    value: 'climatizacion'
  },
  {
    name: 'Electricidad',
    icon: 'bolt',
    description: 'Instalaciones eléctricas industriales y residenciales bajo normativas de seguridad vigentes.',
    value: 'electricidad'
  },
  {
    name: 'Carpintería',
    icon: 'handyman',
    description: 'Diseño de mobiliario a medida, reparaciones estructurales y acabados de lujo en madera.',
    value: 'carpinteria'
  },
  {
    name: 'Electrodomésticos y Domótica',
    icon: 'settings_input_component',
    description: 'Automatización de espacios y reparación técnica de equipos de última generación.',
    value: 'domotica'
  },
  {
    name: 'Pintura',
    icon: 'format_paint',
    description: 'Aplicación de recubrimientos técnicos, texturizados y acabados decorativos profesionales.',
    value: 'pintura'
  },
  {
    name: 'Diseño Integral',
    icon: 'straighten',
    description: 'Planificación de espacios comerciales y residenciales con enfoque en funcionalidad.',
    value: 'diseno_integral'
  }
]

function nextStep() {
  const step1 = document.getElementById('step1')
  const step2 = document.getElementById('step2')
  const indicator2 = document.getElementById('step-indicator-2')

  if (!step1 || !step2 || !indicator2) return

  step1.classList.add('opacity-0', '-translate-x-8')
  setTimeout(() => {
    step1.classList.add('hidden')
    step2.classList.remove('hidden')
    setTimeout(() => {
      step2.classList.remove('opacity-0', 'translate-x-8')
      indicator2.classList.remove('bg-outline-variant')
      indicator2.classList.add('bg-accent-blue')
    }, 50)
  }, 400)
}

function prevStep() {
  const step1 = document.getElementById('step1')
  const step2 = document.getElementById('step2')
  const indicator2 = document.getElementById('step-indicator-2')

  if (!step1 || !step2 || !indicator2) return

  step2.classList.add('opacity-0', 'translate-x-8')
  setTimeout(() => {
    step2.classList.add('hidden')
    step1.classList.remove('hidden')
    setTimeout(() => {
      step1.classList.remove('opacity-0', '-translate-x-8')
      indicator2.classList.remove('bg-accent-blue')
      indicator2.classList.add('bg-outline-variant')
    }, 50)
  }, 400)
}

function handleSubmit() {
  const step2 = document.getElementById('step2')
  const success = document.getElementById('successState')

  if (!step2 || !success) return

  step2.classList.add('opacity-0')
  setTimeout(() => {
    step2.classList.add('hidden')
    success.classList.remove('hidden')
  }, 400)
}

function resetForm() {
  const form = document.getElementById('quoteForm') as HTMLFormElement | null
  const step1 = document.getElementById('step1')
  const step2 = document.getElementById('step2')
  const success = document.getElementById('successState')
  const indicator2 = document.getElementById('step-indicator-2')

  form?.reset()
  selectedService.value = ''
  success?.classList.add('hidden')
  step2?.classList.add('hidden', 'opacity-0', 'translate-x-8')
  step1?.classList.remove('hidden', 'opacity-0', '-translate-x-8')
  indicator2?.classList.remove('bg-accent-blue')
  indicator2?.classList.add('bg-outline-variant')
}
</script>
