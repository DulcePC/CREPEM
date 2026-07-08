# Crepem

Formulario web en Nuxt. Flujo actual:

- envia lead a Web3Forms directo desde frontend
- incluye email del cliente para responderle desde correo negocio
- arma link de WhatsApp en cliente

## Variables

Crea `.env` desde `.env.example`.

```bash
NUXT_PUBLIC_WEB3FORMS_ACCESS_KEY=tu_access_key_de_web3forms
NUXT_PUBLIC_WHATSAPP_NUMBER=18095551234
```

## Desarrollo

```bash
pnpm dev
```
