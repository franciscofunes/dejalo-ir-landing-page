import { Meta } from "../layout/Meta";
import { AppConfig } from "../utils/AppConfig";
import { Banner } from "./Banner";
import { Description } from "./Description";
import { Footer } from "./Footer";

const About = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Description />
    <Banner />
    <Footer />
  </div>
);

export { About };

