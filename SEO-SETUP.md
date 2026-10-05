# Activación de SEO y consultas

## Implementado

- Páginas de sistemas a medida y mantenimiento de PC en Balcarce.
- Contenido comercial en el inicio, enlaces entre servicios y proyectos.
- HTML estático generado para todas las rutas públicas; React conserva las interacciones.
- Títulos, descripciones y canonical por página, sitemap generado desde las rutas.
- robots.txt válido; sin rewrite global que convierta rutas desconocidas en páginas 200.
- Botones de contacto preparados por servicio y eventos de GA4.

## Datos necesarios para activar

Configurar en Vercel y volver a desplegar:

- `VITE_WHATSAPP_NUMBER`: número internacional oficial, solo dígitos. Confirmar el formato de WhatsApp del número argentino antes de publicarlo.
- `VITE_GA_MEASUREMENT_ID`: ID G-... de un flujo web de Google Analytics 4.

Sin número, los botones llevan a contacto por Instagram; no se generan enlaces ficticios. Sin ID de GA4, no se carga Analytics. No se creó una cuenta ni se verificó ninguna propiedad de Google.

## Search Console

1. Agregar propiedad de prefijo de URL: https://wuidevs-stecnologicas.vercel.app/.
2. Elegir verificación mediante etiqueta HTML y proporcionar la etiqueta generada para incluirla en el head. No compartir contraseñas.
3. Una vez publicado, verificar la propiedad y enviar sitemap.xml.
4. Inspeccionar inicio y las dos páginas de servicios. Comprobar prueba publicada, HTML renderizado y canonical elegida por Google.

## Google Analytics 4

1. Crear propiedad y flujo web para el sitio.
2. Configurar el ID en Vercel.
3. Probar page_view al navegar entre rutas y click_whatsapp al pulsar cada botón.
4. Marcar click_whatsapp como señal de intención si sirve, manteniéndolo separado de consultas reales.
5. No enviar nombres, teléfonos ni mensajes a Analytics. El sitio no tiene formulario: no registra generate_lead.

## Perfil de Empresa

Confirmar primero si ya existe uno para evitar duplicados. Para la modalidad actual, usar área de servicio y ocultar domicilio residencial; indicar cobertura real, contacto, atención coordinada y fotos propias. La verificación depende de las opciones ofrecidas por Google y no queda resuelta por comprar un dominio o un correo.

## Registro comercial mínimo

Registrar fecha, servicio, canal, localidad, si la consulta encaja, presupuesto enviado y resultado. Separar clics, conversaciones recibidas y trabajos cerrados.

## Validación después de desplegar

- Abrir cada URL directamente en móvil y escritorio.
- Confirmar HTML visible sin JavaScript y canonical propia.
- Comprobar robots.txt y sitemap.xml; una URL inventada debe devolver 404.
- Probar número y mensajes de WhatsApp con el dato real.
- Confirmar eventos en Analytics; revisar consentimiento y aviso de privacidad según la configuración final.
- Medir PageSpeed Insights. Esta implementación no incluye una auditoría visual móvil ni métricas reales de Google.

El roadmap de 30/60/90 días se reajusta después de activar los datos pendientes y revisar la primera medición.
