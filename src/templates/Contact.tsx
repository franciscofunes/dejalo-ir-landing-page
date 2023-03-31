import { Meta } from "../layout/Meta";
import { IContactFormProps } from "../models/contactFormProps";
import { AppConfig } from "../utils/AppConfig";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import ContactForm from "./Form";
import { Navbar } from "./Navbar";

const Contact = (props: IContactFormProps) => {
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
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navbar />
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
      <Banner />
      <Footer />
    </>
  );
};

export { Contact };
