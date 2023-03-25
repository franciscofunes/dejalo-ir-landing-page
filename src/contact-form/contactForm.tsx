import { ReactNode } from 'react';

type IContactFormProps = {
  name: string;
  email: string;
  message: string;
  button: ReactNode;
};

const ContactForm = (props: IContactFormProps) => (
  <form
    name="contact"
    action="/success"
    method="POST"
    data-netlify="true"
    className="max-w-md mx-auto"
  >
    <input type="hidden" name="form-name" value="contact" />
    <div className="mb-4">
      <label htmlFor="firstname" className="block text-gray-700 font-bold mb-2">
        {props.name}
      </label>
      <input
        type="text"
        name="firstname"
        id="firstname"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="youremail" className="block text-gray-700 font-bold mb-2">
        {props.email}
      </label>
      <input
        type="email"
        name="email"
        id="youremail"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-4">
      <label
        htmlFor="yourmessage"
        className="block text-gray-700 font-bold mb-2"
      >
        {props.message}
      </label>
      <textarea
        name="message"
        id="yourmessage"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      ></textarea>
    </div>
    <div className="flex items-center justify-center">{props.button}</div>
  </form>
);

export { ContactForm };
