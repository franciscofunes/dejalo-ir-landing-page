import { Meta } from "../layout/Meta";
import { AppConfig } from "../utils/AppConfig";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Form } from "./Form";
import { Navbar } from "./Navbar";

const Contact = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar/>
    <Form></Form>
    <Banner />
    <Footer />
  </div>
);

export { Contact };

