import { ContactForm } from "../contact-form/contactForm";
import { Section } from "../layout/Section";

const Form = () => (
  <Section
    title="Formulario de contacto"
    description="Déjanos tu mensaje, sugerencia o propuestas, te contactáremos a la brevedad"
  >
    <ContactForm
      name="Nombre"
      email="Correo electrónico"
      message="Mensaje"
      button={<button type="submit">Send</button>}
    />
  </Section>
);

export { Form };
