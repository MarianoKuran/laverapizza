var phone = "543856776615";
function simpleOrder(variedad, nombre = "Cliente") {
    // Construye mensaje (sin BOM) y quita posibles BOMs invisibles
    let message = `🍕 *NUEVO PEDIDO*\ncliente: *${nombre}*\nVariedad: *${variedad}*\nPor favor, confírmame el tiempo de entrega.`;

    message = message.replace(/^\uFEFF/, ''); // quita BOM si existe
    message = message.trim();

    const encoded = encodeURIComponent(message);
    const wa_me = `https://wa.me/${phone}?text=${encoded}`;
    const api = `https://api.whatsapp.com/send?phone=${phone}&text=${encoded}`;
    const web = `https://web.whatsapp.com/send?phone=${phone}&text=${encoded}`;
    const app = `whatsapp://send?phone=${phone}&text=${encoded}`;

    window.open(web, "_blank");
}

