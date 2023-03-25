import { ContactForm } from '../contact-form/contactForm';
import { Section } from '../layout/Section';

const Form = () => (
  <Section
    title="Formulario de contacto"
    description="Déjanos tu mensaje, sugerencia o propuestas, te contactáremos a la brevedad"
  >
    <ContactForm
      name="Nombre"
      email="Correo electrónico"
      message="Mensaje"
      button={<button type="submit" className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>}
    />
  </Section>
);

export { Form };
