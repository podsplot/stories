console.log("cookie-consent.js cargado");

document.addEventListener("DOMContentLoaded", function() {
  if (!window.cookieconsent) {
    var script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js";
    script.onload = function() {
      initializeCookieConsent();
    };
    document.head.appendChild(script);
  } else {
    initializeCookieConsent();
  }
});

function initializeCookieConsent() {
  console.log("Inicializando Cookie Consent");
  window.cookieconsent.initialise({
    "palette": {
      "popup": { "background": "#000" },
      "button": { "background": "#f1d600" }
    },
    "theme": "classic",
    "content": {
      "message": "Este sitio utiliza cookies para asegurar que obtengas la mejor experiencia.",
      "dismiss": "Entendido",
      "link": "Más información",
      "href": "/politica-de-cookies"  // Ajusta la URL según corresponda
    }
  });
}
