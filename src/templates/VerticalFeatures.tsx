import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Nuestros productos"
    description="Una amplia selección de productos que recorren diferentes categorías"
  >
    <VerticalFeatureRow
      title="Indumentaria"
      description="Todo tipo de artículos relacioandos a la indumentaria , pantalones, camisas, zapatos"
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Muebles"
      description="Mesas, sillas, todo tipo de aumeblamiento"
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Tecnología"
      description="Artículos de tecnología, computadoras, celulares, tablets
      "
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
