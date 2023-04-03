import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsappButton = () => (
  <div className="App">
  <FloatingWhatsApp
    phoneNumber="5491131127022"
    accountName="Déjalo ir"
    statusMessage="Normalmente responde en 1 hora"
    placeholder="escribe un mensaje..."
    chatMessage="¡Hola! 🤝 ¿Cómo podemos ayudar?"
    avatar="https://img.icons8.com/color/48/null/cat-profile.png"
    allowEsc
    allowClickAway
    notification
    notificationSound
  />
</div>
);

export { WhatsappButton };
