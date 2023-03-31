// import { FormEvent, ReactNode } from "react";
// import { ContactForm } from "../contact-form/contactForm";
// import { Section } from "../layout/Section";

// type IContactFormProps = {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
//   button: ReactNode;
//   setName: (name: string) => void;
//   setEmail: (email: string) => void;
//   setPhone: (phone: string) => void;
//   setMessage: (message: string) => void;
//   handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
// };

// const Form = (props: IContactFormProps) => (
//   <Section
//     title="Formulario de contacto"
//     description="Déjanos tu mensaje, sugerencia o propuestas, te contactáremos a la brevedad"
//   >
//     <ContactForm
//       name={props.name}
//       email={props.email}
//       phone={props.phone}
//       message={props.message}
//       button={props.button}
//     />
//   </Section>
// );

// export { Form };

import { ContactForm } from "../contact-form/contactForm";
import { IContactFormProps } from "../models/contactFormProps";

const Form = (props: IContactFormProps) => {
  const { name, setName, email, setEmail, phone, setPhone, message, setMessage, handleSubmit } = props;

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [message, setMessage] = useState("");

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   let form = {
  //     name,
  //     email,
  //     phone,
  //     message,
  //   };

  //   const rawResponse = await fetch("/api/submit", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(form),
  //   });
    
  //   const content = await rawResponse.json();

  //   // print to screen
  //   alert(content.data.tableRange);

  //   // Reset the form fields
  //   setMessage("");
  //   setPhone("");
  //   setName("");
  //   setEmail("");
  // };

  return (
    <div className="min-h-screen">
      <ContactForm
        name={name}
        email={email}
        phone={phone}
        message={message}
        button={<button type="submit" className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>}
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
        setMessage={setMessage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Form;

