import { ContactForm } from "../contact-form/contactForm";
import { IContactFormProps } from "../models/contactFormProps";
import { Section } from "../layout/Section";

const Form = (props: IContactFormProps) => {
  const {
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    message,
    setMessage,
    handleSubmit,
    button,
  } = props;

  return (
    <>
      <Section
        title="Formulario de contacto"
        description="Déjanos tu consulta sobre el producto que te guste para conseguir descuentos"
      >
        <ContactForm
          name={name}
          email={email}
          phone={phone}
          message={message}
          button={button}
          setName={setName}
          setEmail={setEmail}
          setPhone={setPhone}
          setMessage={setMessage}
          handleSubmit={handleSubmit}
        />
      </Section>
    </>
  );
};

export default Form;
