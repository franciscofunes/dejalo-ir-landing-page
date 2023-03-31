import { Meta } from "../layout/Meta";
import { IContactFormProps } from "../models/contactFormProps";
import { AppConfig } from "../utils/AppConfig";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import ContactForm from "./Form";
import { Navbar } from "./Navbar";

const Contact = (props: IContactFormProps) => {
  const { name, setName, email, setEmail, phone, setPhone, message, setMessage, handleSubmit } = props;
  
  return (
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navbar />
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
      <Banner />
      <Footer />
    </div>
  );
};

export { Contact };

