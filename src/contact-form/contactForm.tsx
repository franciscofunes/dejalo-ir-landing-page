// import { FormEvent, ReactNode, useState } from "react";

// type IContactFormProps = {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
//   button: ReactNode;
// };

// const ContactForm = (props: IContactFormProps) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     let form = {
//       name,
//       email,
//       phone,
//       message,
//     };

//     const rawResponse = await fetch("/api/submit", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(form),
//     });
    
//     const content = await rawResponse.json();

//     // print to screen
//     alert(content.data.tableRange);

//     // Reset the form fields
//     setMessage("");
//     setPhone("");
//     setName("");
//     setEmail("");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//       {/* <input type="hidden" name="form-name" value="contact" /> */}
//       <div className="mb-4">
//         <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
//           {props.name}
//         </label>
//         <input
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           type="text"
//           name="name"
//           id="name"
//           placeholder="Ingresa tu nombre"
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
//           {props.email}
//         </label>
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           type="email"
//           name="email"
//           id="email"
//           placeholder="Ingresa tu Email"
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
//           {props.phone}
//         </label>
//         <input
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           type="tel"
//           name="phone"
//           id="phone"
//           placeholder="Ingresa tu télefono celular"
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
//           {props.message}
//         </label>
//         <textarea
//           value={message} onChange={e => setMessage(e.target.value)} id="message" placeholder="Ingresa tu mensaje"
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         ></textarea>
//       </div>
//       <div className="flex items-center justify-center">{props.button}</div>
//     </form>
//   );
// };

// export { ContactForm };

import { IContactFormProps } from "../models/contactFormProps";

const ContactForm = (props: IContactFormProps) => {
  const { name, setName, email, setEmail, phone, setPhone, message, setMessage, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      {/* <input type="hidden" name="form-name" value="contact" /> */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Nombre
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          id="name"
          placeholder="Ingresa tu nombre"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Correo Electrónico
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          placeholder="Ingresa tu Email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
          Télefono
        </label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          name="phone"
          id="phone"
          placeholder="Ingresa tu télefono celular"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          Mensaje
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          placeholder="Ingresa tu mensaje"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>
      <div className="flex items-center justify-center">{props.button}</div>
    </form>
  );
};

export { ContactForm };

