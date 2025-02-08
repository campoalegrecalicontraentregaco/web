addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    const htmlContent = `
  <!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="Worldwide Logistics Services.">
      <meta name="keywords" content="armenia quindio, compra, venta, clasificados, productos, Colombia, Contraentrega">
      <meta name="robots" content="index, follow">
      <meta name="author" content="Contraentrega">
      <meta property="og:title" content="@armeniaquindio - Compra y venta en Armenia Quindío">
      <meta property="og:description" content="Compra y venta en Armenia Quindío, Colombia. Publica tus productos en Contraentrega.">
      <meta property="og:image" content="URL-de-tu-imagen">
      <meta property="og:url" content="https://www.tusitio.com">
      <meta property="og:type" content="website">
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="@armeniaquindio - Compra y venta en Armenia Quindío">
      <meta name="twitter:description" content="Compra y venta en Armenia Quindío, Colombia. Publica tus productos en Contraentrega.">
      <meta name="twitter:image" content="URL-de-tu-imagen">
      <meta name="twitter:url" content="https://www.tusitio.com">
      <meta name="google-site-verification" content="your-verification-code" />
  
      <!-- Facebook Pixel -->
      <script>
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'your-pixel-id');
          fbq('track', 'PageView');
      </script>
      <noscript>
          <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=your-pixel-id&ev=PageView&noscript=1"/>
      </noscript>
      <!-- End Facebook Pixel -->
  
      <title>@armeniaquindio - Compra y venta en Armenia Quindío</title>
  
      <!-- Datos estructurados con Schema.org -->
      <script type="application/ld+json">
      {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://www.tusitio.com",
          "name": "@armeniaquindio",
          "description": "Compra y venta en Armenia Quindío, Colombia. Publica tus productos en Contraentrega.",
          "publisher": {
              "@type": "Organization",
              "name": "Contraentrega Armenia Quindío"
          }
      }
      </script>
  
      <!-- Favicon -->
      <link rel="icon" href="URL-del-favicon" type="image/png">
  
      <!-- Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
      <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'YOUR_TRACKING_ID');
      </script>
  
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f1f1f1;
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              text-align: center;
          }
          .container {
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              width: 90%; 
              max-width: 600px; 
              padding: 20px;
              overflow-y: auto; 
              max-height: 80vh; 
              height: 100%; 
          }
          h1, h2 {
              font-size: 2.5em;
              color: #333;
              margin-bottom: 10px;
          }
          p {
              color: #666;
              font-size: 1.2em;
              margin-bottom: 20px;
          }
          .buttons a {
              display: block;
              background-color: #000000;
              color: white;
              padding: 10px;
              margin: 5px 0;
              text-decoration: none;
              border-radius: 5px;
              font-size: 1em;
              transition: background-color 0.3s;
          }
          .buttons a:hover {
              background-color: #333333;
          }
          .footer {
              font-size: 0.9em;
              color: #777;
              margin-top: 20px;
          }
          form {
              margin-top: 20px;
              text-align: left;
              margin-bottom: 20px;
          }
          input[type="text"], input[type="number"], textarea, select {
              width: 100%;
              padding: 10px;
              margin: 10px 0;
              border: 1px solid #ccc;
              border-radius: 5px;
          }
          input[type="file"] {
              margin: 10px 0;
          }
          button {
              background-color: #000000;
              color: white;
              padding: 10px;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              font-size: 1.1em;
              width: 100%;
              margin: 5px 0;
          }
          button:hover {
              background-color: #333333;
          }
          table {
              width: 100%;
              margin-top: 30px;
              border-collapse: collapse;
              overflow-x: auto;
          }
          th, td {
              padding: 10px;
              text-align: left;
              border: 1px solid #ccc;
          }
          th {
              background-color: #f4f4f4;
          }
          td {
              background-color: #fafafa;
          }
          h2 {
              font-size: 1.8em;
              color: #333;
              margin-top: 20px;
          }
  
          .clickable {
              color: #007BFF;
              text-decoration: underline;
              cursor: pointer;
              transition: color 0.3s ease-in-out;
          }
  
          .clickable:hover {
              color: #0056b3;
              text-decoration: none;
          }
  
          /* Lazy loading de imágenes */
          img[loading="lazy"] {
              opacity: 0;
              transition: opacity 0.3s ease-in;
          }
          img[loading="lazy"]:not([src=""]) {
              opacity: 1;
          }
  
          /* Estilo para el total */
          .total {
              font-size: 1.5em;
              font-weight: bold;
              margin: 20px 0;
              color: #333;
          }
  
          /* Estilo para el buscador */
          .search-container {
              margin: 20px 0;
          }
          .search-container input {
              width: 100%;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 5px;
          }
  
          /* Estilo para los radio buttons */
          .radio-group {
              display: flex;
              gap: 10px;
              margin: 10px 0;
          }
          .radio-group label {
              display: flex;
              align-items: center;
              gap: 5px;
          }
      </style>
  </head>
  
  <body>
  
      <div class="container">
          <header>
              <h1>@bodegascali</h1>
              <p>Punto: Vereda Campoalegre, Oeste Cali, Valle, Colombia</p>
          </header>
  
          <!-- Botones de contacto -->
          <div class="buttons">
              <a href="tel:+573001234567" id="llamar-btn">📞 Llamar</a>
              <a href="https://wa.me/573001234567" target="_blank" id="mensaje-btn">💬 Enviar mensaje</a>
          </div>
  
          <section>
              <p>CÓDIGO: 1</p>
  
              <!-- SKU #1 -->
              <div class="video-container">
                  <iframe 
                      src="https://www.youtube.com/embed/4J59H-M9iBY" 
                      title="YouTube video player" 
                      frameborder="0" 
                      allow="autoplay; encrypted-media; gyroscope; picture-in-picture" 
                      allowfullscreen>
                  </iframe>
              </div>
  
              <!-- Buscador -->
              <div class="search-container">
                  <input type="text" id="search-input" placeholder="Buscar productos por nombre, código o precio...">
              </div>
  
              <!-- Inventario -->
              <section>
                  <h2>Inventario</h2>
                  <table border="1">
                      <thead>
                          <tr>
                              <th>Imagen</th>
                              <th>Código</th>
                              <th>Nombre</th>
                              <th>Ajustar Cantidad</th>
                              <th>Precio Unitario</th>
                              <th>Disponibilidad</th>
                          </tr>
                      </thead>
                      <tbody id="inventario">
                          <!-- Los productos se insertarán aquí dinámicamente -->
                      </tbody>
                  </table>
              </section>
  
              <!-- Checkout -->
              <section>
                  <h2>Checkout</h2>
  
                  <!-- Opciones de entrega -->
                  <h3>Selecciona el método de entrega</h3>
                  <div class="radio-group">
                      <label>
                          <input type="radio" name="delivery-method" value="pickup" checked> Recoger en el punto
                      </label>
                      <label>
                          <input type="radio" name="delivery-method" value="delivery"> Servicio a domicilio
                      </label>
                  </div>
  
                  <!-- Total a pagar -->
                  <div class="total">
                      Total a pagar: <span id="total-pagar">$0 COP</span>
                  </div>
  
                  <!-- Métodos de pago -->
                  <h3>Método de pago</h3>
                  <div>
                      <button type="button" id="pay-lightning">Pagar con Lightning</button>
                      <button type="button" id="pay-btc">Pagar con BTC</button>
                  </div>
  
                  <!-- Formulario de envío (oculto por defecto) -->
                  <form id="checkout-form" style="display: none;">
                      <h3>Información de envío</h3>
                      <input type="text" name="name" placeholder="Nombre completo" required>
                      <input type="email" name="email" placeholder="Correo electrónico" required>
                      <input type="text" name="address" placeholder="Dirección de envío" required>
                      <input type="text" name="city" placeholder="Ciudad" required>
                      <input type="text" name="state" placeholder="Departamento" required>
                      <input type="text" name="zip" placeholder="Código postal" required>
                      <select name="shipping-method" required>
                          <option value="" disabled selected>Selecciona un método de envío</option>
                          <option value="standard">Envío estándar (5-7 días)</option>
                          <option value="express">Envío express (1-2 días)</option>
                      </select>
                  </form>
              </section>
  
              <!-- Footer -->
              <footer class="footer">
                  <p>&copy; 2025 Contraentrega - Todos los derechos reservados</p>
                  <p><a href="https://www.tusitio.com/privacy" class="clickable">Política de privacidad</a> | <a href="https://www.tusitio.com/terms" class="clickable">Términos y condiciones</a></p>
              </footer>
          </div>
  
          <script>
      let cart = {}; // Objeto para almacenar los productos en el carrito
      let totalQuantity = 0; // Total de productos en el carrito
      let totalAmount = 0; // Total a pagar
  
      // Simulación de API de productos
      const productosAPI = [
          { id: "P001", nombre: "Laptop", precio: 2500000, disponible: true, imagen: "https://via.placeholder.com/50" },
          { id: "P002", nombre: "Mouse Gamer", precio: 120000, disponible: true, imagen: "https://via.placeholder.com/50" },
          { id: "P003", nombre: "Teclado Mecánico", precio: 350000, disponible: false, imagen: "https://via.placeholder.com/50" }
      ];
  
      // Función para calcular el total a pagar
      function calcularTotal() {
          totalAmount = 0;
          productosAPI.forEach(producto => {
              if (cart[producto.id]) {
                  totalAmount += producto.precio * cart[producto.id];
              }
          });
          document.getElementById('total-pagar').innerText = '$' + totalAmount.toLocaleString() + ' COP';
      }
  
      // Función para validar el formulario de envío
      function validarFormulario() {
          const form = document.getElementById('checkout-form');
          const inputs = form.querySelectorAll('input, select');
          let valido = true;
  
          inputs.forEach(input => {
              if (!input.value.trim()) {
                  valido = false;
                  input.style.border = '1px solid red';
              } else {
                  input.style.border = '1px solid #ccc';
              }
          });
  
          return valido;
      }
  
      // Función para manejar el pago con Lightning (Umbrel)
function pagarConLightning() {
    if (document.querySelector('input[name="delivery-method"]:checked').value === 'delivery' && !validarFormulario()) {
        alert('Por favor, completa todos los campos del formulario de envío.');
        return;
    }

    // Obtener el monto total a pagar
    const total = totalAmount; // totalAmount se calcula en la función calcularTotal()

    // Crear una factura Lightning usando la API de LNbits en Umbrel
    fetch('http://<IP-de-tu-umbrel>/lnbits/api/v1/payments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': 'tu-api-key-de-lnbits' // Reemplaza con tu API key de LNbits
        },
        body: JSON.stringify({
            out: false,
            amount: total,
            memo: 'Pago desde @bodegascali'
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.payment_request) {
            // Mostrar la factura Lightning al usuario
            alert('Escanea este código QR para pagar: ' + data.payment_request);
            // Redirigir a una página de confirmación de pago
            window.location.href = 'http://<IP-de-tu-umbrel>/lnbits/invoice/' + data.payment_hash;
        } else {
            alert('Error al generar la factura Lightning.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al conectar con el servidor de pagos.');
    });
}

// Función para manejar el pago con Bitcoin (BTC)
function pagarConBTC() {
    if (document.querySelector('input[name="delivery-method"]:checked').value === 'delivery' && !validarFormulario()) {
        alert('Por favor, completa todos los campos del formulario de envío.');
        return;
    }

    // Obtener el monto total a pagar
    const total = totalAmount; // totalAmount se calcula en la función calcularTotal()

    // Generar una dirección Bitcoin usando la API de Bitcoin Core en Umbrel
    fetch('http://<IP-de-tu-umbrel>/bitcoin/api/v1/getnewaddress', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('usuario:contraseña') // Reemplaza con tus credenciales de Bitcoin Core
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.address) {
            // Mostrar la dirección Bitcoin al usuario
            alert('Envía ' + (total / 100000000) + ' BTC a la siguiente dirección: ' + data.address);
            // Redirigir a una página de confirmación de pago
            window.location.href = 'http://<IP-de-tu-umbrel>/bitcoin/address/' + data.address;
        } else {
            alert('Error al generar la dirección Bitcoin.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al conectar con el servidor de pagos.');
    });
}

// Asignar eventos a los botones de pago
document.getElementById('pay-lightning').addEventListener('click', pagarConLightning);
document.getElementById('pay-btc').addEventListener('click', pagarConBTC);
  
      // Función para filtrar productos en la tabla
      function filtrarProductos(query) {
          const tbody = document.getElementById("inventario");
          const filas = tbody.getElementsByTagName("tr");
  
          for (let fila of filas) {
              const nombre = fila.getElementsByTagName("td")[2].innerText.toLowerCase();
              const codigo = fila.getElementsByTagName("td")[1].innerText.toLowerCase();
              const precio = fila.getElementsByTagName("td")[4].innerText.toLowerCase();
  
              if (nombre.includes(query) || codigo.includes(query) || precio.includes(query)) {
                  fila.style.display = "";
              } else {
                  fila.style.display = "none";
              }
          }
      }
  
      // Renderizar productos dinámicamente dentro de la tabla
      function cargarInventario() {
          const tbody = document.getElementById("inventario");
          tbody.innerHTML = ""; // Limpiar la tabla antes de renderizar
  
          productosAPI.forEach(producto => {
              const fila = document.createElement("tr");
              fila.innerHTML = 
                  '<td><img src="' + producto.imagen + '" alt="' + producto.nombre + '" width="50"></td>' +
                  '<td>' + producto.id + '</td>' +
                  '<td>' + producto.nombre + '</td>' +
                  '<td>' +
                      '<button class="adjust-quantity" data-product="' + producto.id + '" data-action="decrease">-</button>' +
                      '<span id="cantidad-' + producto.id + '">0</span>' +
                      '<button class="adjust-quantity" data-product="' + producto.id + '" data-action="increase">+</button>' +
                  '</td>' +
                  '<td>$' + producto.precio.toLocaleString() + ' COP</td>' +
                  '<td>' + (producto.disponible ? "Disponible" : "Agotado") + '</td>';
              tbody.appendChild(fila);
          });
  
          asignarEventosBotones();
      }
  
      // Asignar eventos a los botones de ajuste de cantidad
      function asignarEventosBotones() {
          document.querySelectorAll(".adjust-quantity").forEach(button => {
              button.addEventListener("click", (event) => {
                  const productId = event.target.dataset.product;
                  const action = event.target.dataset.action;
  
                  if (!cart[productId]) {
                      cart[productId] = 0;
                  }
  
                  if (action === "increase") {
                      cart[productId]++;
                      totalQuantity++;
                  } else if (action === "decrease" && cart[productId] > 0) {
                      cart[productId]--;
                      totalQuantity--;
                  }
  
                  document.getElementById('cantidad-' + productId).innerText = cart[productId];
                  calcularTotal(); // Actualizar el total a pagar
              });
          });
      }
  
      // Evento para el buscador
      document.getElementById('search-input').addEventListener('input', (event) => {
          const query = event.target.value.toLowerCase();
          filtrarProductos(query);
      });
  
      // Evento para los radio buttons de entrega
      document.querySelectorAll('input[name="delivery-method"]').forEach(radio => {
          radio.addEventListener('change', (event) => {
              const form = document.getElementById('checkout-form');
              if (event.target.value === 'delivery') {
                  form.style.display = 'block';
              } else {
                  form.style.display = 'none';
              }
          });
      });
  
      // Cargar inventario al inicio
      cargarInventario();
  </script>
      </div>
  </body>
  </html>
  `;
  
    return new Response(htmlContent, {
      headers: { 'Content-Type': 'text/html' },
    });
  }
