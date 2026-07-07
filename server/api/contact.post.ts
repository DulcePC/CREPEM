type ContactBody = {
  service?: string
  name?: string
  phone?: string
  propertyType?: string
  message?: string
}

function requiredText(value: string | undefined) {
  return value?.trim() || ''
}

function formatLeadMessage(body: Required<ContactBody>) {
  return [
    'Nueva solicitud desde crepem',
    '',
    `Servicio: ${body.service}`,
    `Nombre: ${body.name}`,
    `Telefono: ${body.phone}`,
    `Propiedad: ${body.propertyType}`,
    `Mensaje: ${body.message}`
  ].join('\n')
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactBody>(event)
  const service = requiredText(body.service)
  const name = requiredText(body.name)
  const phone = requiredText(body.phone)
  const propertyType = requiredText(body.propertyType)
  const message = requiredText(body.message)

  if (!service || !name || !phone || !propertyType || !message) {
    throw createError({ statusCode: 400, statusMessage: 'Faltan campos requeridos.' })
  }

  const config = useRuntimeConfig(event)

  if (!config.web3formsAccessKey) {
    throw createError({ statusCode: 500, statusMessage: 'Falta WEB3FORMS_ACCESS_KEY.' })
  }

  const normalizedBody = { service, name, phone, propertyType, message }
  const leadMessage = formatLeadMessage(normalizedBody)

  const web3formsResponse = await $fetch<{ success?: boolean; message?: string }>('https://api.web3forms.com/submit', {
    method: 'POST',
    body: {
      access_key: config.web3formsAccessKey,
      subject: `Nueva solicitud de ${name}`,
      from_name: 'Crepem Web',
      service,
      name,
      phone,
      propertyType,
      message
    }
  })

  if (!web3formsResponse.success) {
    throw createError({
      statusCode: 502,
      statusMessage: web3formsResponse.message || 'Web3Forms rechazo solicitud.'
    })
  }

  if (config.telegramBotToken && config.telegramChatId) {
    await $fetch(`https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`, {
      method: 'POST',
      body: {
        chat_id: config.telegramChatId,
        text: leadMessage
      }
    })
  }

  const whatsappNumber = config.public.whatsappNumber?.replace(/\D/g, '') || ''
  const whatsappLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(leadMessage)}`
    : ''

  return {
    ok: true,
    whatsappLink
  }
})
