import LegalDocument from '../compliance/LegalDocument';
import { PRIVACY_POLICY } from '../constants/privacy-policy.const';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

const PrivacyPolicy = () => (
  <div className="antialiased text-gray-600">
    <Navbar />
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Section
      title="Política de privacidad"
      description="Lee con detenimiento nuestra política de privacidad cualquier duda consultános"
    >
      <LegalDocument text={PRIVACY_POLICY} />
      <Banner />
    </Section>
    <Footer />
  </div>
);

export { PrivacyPolicy };
