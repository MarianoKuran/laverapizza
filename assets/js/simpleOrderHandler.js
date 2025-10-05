var phone = "543856776615";
function simpleOrder(variedad, nombre = "Cliente") {
  let message = `🍕 *NUEVO PEDIDO*\nCliente: *${nombre}*\nVariedad: *${variedad}*\nPor favor, confírmame el tiempo de entrega.`;
    // Limpieza de posibles caracteres ocultos
    message = message.replace(/^\uFEFF/, '').trim();

    const encoded = encodeURIComponent(message);

    // URLs para cada entorno
    const wa_me = `https://wa.me/${phone}?text=${encoded}`;
    const api = `https://api.whatsapp.com/send?phone=${phone}&text=${encoded}`;
    const web = `https://web.whatsapp.com/send?phone=${phone}&text=${encoded}`;
    const app = `whatsapp://send?phone=${phone}&text=${encoded}`;

    // Detectar si es mobile o desktop
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
        // En mobile, primero intentamos abrir la app de WhatsApp
        try {
        window.location.href = app; // deep link nativo
        // fallback si la app no abre en 1s
        setTimeout(() => window.open(wa_me, "_blank"), 1000);
        } catch (e) {
        // fallback directo
        window.open(wa_me, "_blank");
        }
    } else {
        // En desktop, abrimos WhatsApp Web
        window.open(web, "_blank");
    }
}

