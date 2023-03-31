import { IContactFormProps } from '../models/contactFormProps';

const ContactForm = (props: IContactFormProps) => {
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
    button
  } = props;

  return (
    <div className="pt-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
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
            required
            minLength={3}
            maxLength={50}
            pattern="[a-zA-ZÀ-ÿ\s]+"
            title="Por favor, ingresa un nombre válido"
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
            placeholder="Ingresa tu correo electrónico"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Por favor, ingresa un correo electrónico válido"
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
            required
            pattern="[0-9]{10}"
            title="Por favor, ingresa un número de teléfono válido"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-bold mb-2"
          >
            Mensaje
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            placeholder="Ingresa tu mensaje"
            required
            minLength={10}
            maxLength={500}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="flex items-center justify-center">{button}</div>
      </form>
    </div>
  );
};

export { ContactForm };
