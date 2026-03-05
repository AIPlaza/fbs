  
**FULL BROKERS SERVICES**

fullbrokersservices.app — Nueva Webapp

**Brief Técnico para CTO**

Versión 1.0  |  Marzo 2026  |  Confidencial

| Empresa | Synerbit / Full Brokers Services |
| :---- | :---- |
| Registro legal | PSAV ante UIAF — Colombia |
| Dominio | fullbrokersservices.app |
| Stack principal | N8N \+ Railway \+ WhatsApp Business API \+ Didit.me |
| Contacto | \+57 311 570 1987  |  contact@fullbrokersservices.app |
| Web corporativa | synerbit.xyz |

# **1\. Objetivo de la Webapp**

La webapp sobre fullbrokersservices.app cumple tres funciones simultáneas:

* **Calculadora en tiempo real:** el visitante calcula su operación antes de contactar, con tasas reales extraídas de NexxdiPay, LoopayX y Dasbanq.

* **CTA directo a WhatsApp:** el botón de cotización abre WhatsApp con un mensaje pre-llenado que incluye corredor, monto y banco destino.

* **Entrada al flujo automatizado:** la conversación en WhatsApp es gestionada por N8N — onboarding, KYC, confirmación de tasa e instrucciones de envío sin intervención manual en los primeros pasos.

*La página NO procesa pagos ni custodia fondos. Es un front de cotización y apertura de conversación.*

# **2\. Correcciones al Prototipo Actual**

El prototipo en localhost:3000/es tiene estructura y diseño correcto. Las siguientes correcciones son necesarias antes de producción:

**2.1  🔴  Críticas — corregir antes de publicar**

| Elemento | Problema | Corrección |
| :---- | :---- | :---- |
| Métricas hero/confianza | \+23M USD, \+5583 ops, \+3070 verificadas, 7 min, 24/7 — todos falsos | Eliminar sección de métricas hasta tener datos reales |
| FAQ — tiempos | '15–45 min' y 'máx 2h hábiles' incorrectos | Reemplazar por: 'Mismo día hábil para operaciones antes de 12PM' |
| Footer — teléfono | \+57 (300) 123-4567 — placeholder | \+57 311 570 1987 (o número asignado al flujo automatizado) |
| Footer — correo | soporte@fbs-broker.com — placeholder | contact@fullbrokersservices.app |
| Footer — web | (vacío o incorrecto) | synerbit.xyz |
| Calculadora — mínimo | 'Mínimo 500' — incorrecto | Mínimo $100 genérico, o por riel según tabla Sección 4 |
| Compliance Colombia y USA | Afirmar jurisdicción USA sin licencia — riesgo legal | Reemplazar por: 'Registrado ante la UIAF como PSAV — Colombia' |

**2.2  🟡  Importantes — alineación con modelo de negocio**

| Elemento | Situación actual | Corrección |
| :---- | :---- | :---- |
| Logo 'BROKERS' | Texto genérico — no refleja marca | Reemplazar por logo oficial Full Brokers Services (negro/dorado, flechas bidireccionales, símbolos de monedas) |
| Calculadora — etiqueta | 'Tasa Preferencial VIP / Mesa OTC' — exclusivista | Renombrar a multi-corredor. Ver Sección 5 para especificación completa. |
| Flujo por defecto calculadora | USD → COP vía Wire Transfer | USDT → COP representa \~80% del volumen real. Debe ser el flujo por defecto. |
| Para Quién — segmentos | Faltan Importador/Exportador y Nómada Digital | Agregar ambos segmentos. Son clientes ideales que valoran el compliance. |
| Trader / Arbitrador | Perfil que compara con Binance P2P — no valora compliance | Redefinir como: intermediario que mueve fondos a sus propias cuentas. No arbitraje para terceros. |
| Sección Confianza | AML/KYC presente pero sin mención PSAV | Agregar: 'Intermediario registrado ante la UIAF como PSAV — Colombia' |

**2.3  🟢  Mantener sin cambios**

* Diseño visual — negro puro y dorado. Estética premium alineada con identidad de marca.

* Ticker de tasas en tiempo real en el header — exactamente la diferenciación correcta.

* CTA principal a WhatsApp — objetivo correcto. Todo lleva ahí.

* Sección 'Cómo Funciona' en 3 pasos — clara, simple, efectiva.

* 'Datos de mercado institucionales: Dasbanq & NexxdiPay' — diferenciador real, mantener visible.

* Botón WhatsApp flotante — bien ubicado, no mover.

* Estructura del FAQ — solo corregir los tiempos de entrega.

# **3\. Plataformas de Liquidación Activas**

Estas son las plataformas reales que respaldan la operación. La calculadora debe reflejar solo corredores disponibles a través de ellas.

**NexxdiPay**

* Servicios: off ramp USDT → COP, dispersión ACH y BREB, recaudo por link PSE.

* OTC on-market: −0.5% del spot USD/COP. Off-market: precio y tiempo variables.

* Recaudo PSE: $1,600 COP. BREB: $700 COP. Dispersión BREB: 0.12% \+ $700 COP. ACH: $2,400 COP.

* Horario on-market: 8:30AM–1:00PM. Off-market: 1:00PM–4:30PM.

* Limitación: off ramp cae a bolsa ACH. Para BREB hay que pasar primero por ciclo ACH.

**LoopayX**

* Servicios: off ramp USDT → COP, dispersión ACH y BREB.

* OTC: −0.3% del spot. Mejor precio que NexxdiPay en horario on-market.

* Dispersión ACH: 0.2% \+ $2,000 COP. Dispersión BREB: 0.2% \+ $2,000 COP.

* Fondos disponibles en BREB: \~4 horas. No hay salida BREB instantánea, pero posible mismo día.

**Dasbanq**

* Servicios: pagos transfronterizos EUR (SEPA), MXN (SPEI), USD (ACH/Wire) y crypto USDC.

* Modelo de cobro: recepción de fondos GRATIS en todos los rieles. Solo se cobra al retiro.

* Costo de retiro — escalonado: \<$200K: 0.50% / $200K–$499K: 0.40% / ≥$500K: 0.35%.

* Tarifa fija por riel de salida: Wire $25 USD | ACH mismo día $5 USD | SEPA $2 USD | SPEI $2 USD.

* USDT retiro: 0.55% fijo. Red TRON: $3 USD.

**Killb**

* Servicios: on ramp y off ramp activo. On ramp vía link PSE o ACH a cuenta Killb en Banco de Occidente.

* Limitación crítica: solo dispersión a cuenta propia del operador. No se puede dispersar a terceros.

**Wallets propias**

* Custodia directa USDT / BTC / ETH. Operaciones P2P sin intermediario.

* Costo: solo gas fees de red (TRC20 / ERC20 según wallet).

**Fuente de datos — Extensión Chrome**

* Extrae tasas cada 5 segundos: NexxdiPay (USDT/COP), LoopayX (USDT/COP), Dasbanq (EUR y MXN compra/venta).

* Inyecta datos vía localStorage a las web apps locales actuales.

* Para producción: se necesita un endpoint expuesto en Railway que sirva estas tasas a la webapp pública.

# **4\. Corredores Activos y Montos Mínimos**

| Corredor | Entrada | Salida | Mínimo | Estado |
| :---- | :---- | :---- | :---- | :---- |
| USDT → COP  ⭐ principal | USDT TRC20/ERC20 | COP — Bancolombia / Nequi / Daviplata | $100 USDT | ✅ Activo |
| EUR → COP | EUR vía SEPA | COP — Bancolombia / Nequi | Por definir | ✅ Activo |
| EUR → USDT | EUR vía SEPA | USDT TRC20/ERC20 | Por definir | ✅ Activo |
| USD → COP | USD vía Wire/ACH | COP — Bancolombia / Nequi | $100 USD | ✅ Activo |
| USD → MXN | USD vía ACH | MXN vía SPEI | $100 USD | ✅ Activo |
| MXN → USDT | MXN vía SPEI | USDT TRC20/ERC20 | Por definir | ✅ Activo |
| USDT → EUR | USDT | EUR vía SEPA | Por definir | ✅ Activo |
| Colombia → Venezuela | COP / USDT | VES / USDT | Por definir | 🟡 Secundario |

*Nota: montos 'Por definir' deben confirmarse con Frank antes de publicarse en la webapp.*

# **5\. Especificación de la Calculadora**

**5.1  Fuente de datos**

* **Problema actual:** la extensión Chrome escribe en localStorage del navegador local — esto no es accesible desde una webapp pública.

* **Solución necesaria:** crear un microservicio en Railway que reciba los datos de la extensión (push cada 30s) y los sirva vía endpoint REST público.

* Endpoint sugerido: GET /api/rates → { usdt\_cop: 4012.5, eur\_cop: 4380, eur\_usd: 1.092, mxn\_usd: 0.048, updated\_at: '...' }

* Si el endpoint no responde en 5s → mostrar banner 'Tasa no disponible — contáctenos por WhatsApp' con CTA directo.

**5.2  Lógica de cálculo — Colombia (USDT → COP)**

* Tasa base: MAX(NexxdiPay, LoopayX) ajustada con spread operativo (actualmente $12 COP por USDT).

* Dispersión ACH: operaciones $100–$5,000: 0.2% \+ $2,000 COP. Operaciones \>$5,000: $2,400 COP fijo.

* Dispersión BREB: 0.2% \+ $2,000 COP. Tiempo estimado: mismo día hábil.

* La calculadora muestra: monto enviado en USDT → monto neto que recibe el beneficiario en COP.

**5.3  Lógica de cálculo — Internacional**

* Tasas EUR y MXN tomadas de Dasbanq (compra/venta en tiempo real).

* Comisiones internacionales: $100–$1,000: 2.0% | $1,000–$3,000: 1.5% | \>$3,000: consultar.

* Fee fijo por riel de entrada/salida: SEPA $2 | SPEI $2 | ACH $5 | Wire $25 | Crypto red TRON $3.

**5.4  Flujo UX de la calculadora**

1. Usuario selecciona corredor — USDT → COP por defecto.

2. Ingresa monto a enviar (mínimo $100 para el corredor seleccionado).

3. La calculadora muestra en tiempo real: tasa vigente, comisión desglosada, monto neto que recibirá el beneficiario.

4. Usuario selecciona banco destino (Bancolombia / Nequi / Daviplata / otro).

5. Botón CTA: 'Solicitar esta operación por WhatsApp →' — abre WhatsApp con mensaje pre-llenado.

**5.5  Mensaje pre-llenado en WhatsApp**

El texto debe codificarse en el href del enlace wa.me. Formato:

Hola, quiero hacer una operación:  
Corredor: USDT → COP  
Monto a enviar: \[X\] USDT  
Recibirían aprox: $\[Y\] COP  
Banco destino: \[Bancolombia / Nequi / Daviplata\]  
Tasa consultada: $\[Z\] COP/USDT  •  \[fecha/hora\]

*El backend (N8N) detecta este mensaje estructurado y lo procesa automáticamente para iniciar el flujo de onboarding.*

# **6\. Flujo WhatsApp y Automatización N8N**

El objetivo es que el cliente llegue a WhatsApp con contexto ya capturado, y la automatización complete el onboarding sin intervención manual de Frank en los primeros pasos.

**6.1  Flujo completo**

| \# | Evento | Acción N8N | Responsable |
| :---- | :---- | :---- | :---- |
| 1 | Cliente llega a WA con mensaje pre-llenado desde webapp | Detecta estructura. Extrae corredor, monto, banco. | Bot |
| 2 | Respuesta de bienvenida | Envía saludo \+ solicita nombre completo y país de origen. | Bot |
| 3 | Verificación KYC | Consulta base de datos. Si ya tiene KYC: continúa. Si no: inicia flujo con Didit.me. | Bot \+ Didit.me |
| 4 | KYC aprobado | Confirma tasa vigente \+ envía datos bancarios para recepción de fondos. | Bot |
| 5 | Cliente envía fondos | Bot espera comprobante. Notifica a Frank para ejecutar dispersión. | Bot → Frank |
| 6 | Frank ejecuta dispersión | Bot notifica al cliente con comprobante. Mueve lead a 'Cliente Recurrente' en pipeline. | Frank \+ Bot |

**6.2  Pipeline de estados (WhatsApp Business — etiquetas)**

| Etapa | Descripción |
| :---- | :---- |
| 1\. Prospecto Nuevo | Llegó desde webapp. Primer mensaje recibido. |
| 2\. Calificado | Respondió con nombre y país. Monto dentro de rango operativo. |
| 3\. KYC Iniciado | Enlace Didit.me enviado. Pendiente completar verificación. |
| 4\. KYC Aprobado | Identidad verificada. Listo para operar. |
| 5\. Primera Operación | Fondos recibidos. Dispersión en proceso. |
| 6\. Cliente Recurrente | Operación completada. En seguimiento para próximas operaciones. |

**6.3  Stack de automatización**

| Herramienta | Función | Estado |
| :---- | :---- | :---- |
| N8N en Railway | Orquestación de todos los flujos automatizados | ✅ Activo |
| WhatsApp Business API | Mensajería estructurada (no QR — debe ser API oficial) | ⚠️ Definir proveedor |
| Didit.me | KYC / AML onboarding de clientes | ✅ Activo |
| Notion / PostgreSQL | Registro de clientes, pipeline y estado de operaciones | ✅ Activo |
| Extensión Chrome \+ Railway | Fuente de tasas en tiempo real para la webapp pública | ⚠️ Pendiente endpoint público |

# **7\. Requerimientos Técnicos — Tabla Priorizada**

| P | Componente | Descripción | Dependencias |
| :---- | :---- | :---- | :---- |
| 🔴 | Endpoint de tasas en Railway | Microservicio que recibe datos de extensión Chrome y los expone vía REST público | Extensión Chrome \+ Railway |
| 🔴 | Calculadora USDT→COP funcional | Consume tasas reales. Calcula precio neto. Flujo por defecto. | Endpoint de tasas |
| 🔴 | CTA WhatsApp con mensaje pre-llenado | wa.me con parámetros: corredor, monto, banco destino, tasa y timestamp | Calculadora |
| 🔴 | Corrección datos falsos/placeholder | Métricas, tiempos FAQ, contacto, mínimos, compliance USA | — |
| 🟡 | Calculadora multi-corredor | EUR, USD, MXN además de USDT. Selección de riel. | Endpoint de tasas |
| 🟡 | Logo y marca oficial | Reemplazar texto 'BROKERS' por logo Full Brokers Services | Asset gráfico de Frank |
| 🟡 | Sección PSAV/UIAF | 'Registrado ante la UIAF como PSAV — Colombia' en sección Confianza | — |
| 🟡 | Segmentos actualizados | Agregar Importador/Exportador y Nómada Digital. Redefinir Trader. | — |
| 🔵 | Flujo automatizado N8N completo | Onboarding, KYC Didit.me, notificaciones, pipeline | API WA Business \+ N8N |
| 🔵 | Registro de usuario en webapp | Formulario simple que alimente el flujo automatizado de WhatsApp | N8N |

# **8\. Puntos Abiertos — Requieren Decisión**

| Pregunta abierta | Opciones | Responsable |
| :---- | :---- | :---- |
| Montos mínimos para corredores EUR, MXN, Venezuela | Definir antes de publicar en webapp | Frank |
| Proveedor WhatsApp Business API | 360dialog / Twilio / Meta directo — debe ser API oficial, no QR | CTO \+ Frank |
| Número de WhatsApp para el flujo automatizado | \+57 311 570 1987 o número dedicado para bot | Frank |
| ¿Registro propio en webapp o todo por WhatsApp? | Formulario web mínimo vs. 100% conversacional en WA | Frank \+ CTO |
| Política de retención de datos de usuarios | Requiere definición legal — PSAV implica obligaciones de reporte | Frank \+ Legal |
| Endpoint público de tasas | ¿Railway expuesto con auth token o público con rate limit? | CTO |

**Full Brokers Services — Synerbit**

contact@fullbrokersservices.app  |  \+57 311 570 1987  |  synerbit.xyz

*Documento confidencial — uso interno — Marzo 2026*