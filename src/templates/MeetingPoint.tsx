import { Iframe } from '../feature/mapContainer';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

const MeetingPoint = () => (
  <div className="antialiased text-gray-600">
    <Navbar />
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Section
      title="Punto de encuentro"
      description="El punto de encuentro para la entrega de nuestros productos vendidos es en la Estación Floresta del Ferrocarril Sarmiento. Calles: Bahía Blanca y Yerbal, Capital Federal, Buenos Aires. El horario de entrega se coordina a través de nuestro WhatsApp."
    >
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.878527800312!2d-58.48349032512865!3d-34.632509859017794!2m3!1f0D!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc996c8af3329%3A0x9cdcd7c0edfd73b5!2sBah%C3%ADa%20Blanca%20%26%20Yerbal%2C%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1688316202988!5m2!1sen!2sar"
        title="Google Maps"
        allowFullScreen={true}
        height={350}
        width="100%"
        loading="lazy"
      />
      <Banner />
    </Section>
    <Footer />
  </div>
);

export { MeetingPoint };
