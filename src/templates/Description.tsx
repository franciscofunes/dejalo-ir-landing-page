import { VerticalFeatureRow } from "../feature/VerticalFeatureRow";
import { Section } from "../layout/Section";

const Description = () => (
  <>
    <Section
      title="¿Quiénes somos?"
      description="Somos una empresa en continuo crecimiento dedicada la venta de productos usados y nuevos. Pensamos en reciclaje como una parte fundamental de nuestra sociedad."
    >
      <VerticalFeatureRow
        title="Servicio"
        description="El servicio y la atención son fundamentales para nosotros, ya sea durante el proceso de compra como en la post-venta.Te invitamos a visitar nuestro marketplace de facebook"
        image="/assets/images/feature.svg"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
        title="Misión"
        description="Luego de un proceso creativo, ofrecemos una gran variedad de productos de alta calidad combinando géneros, colores y texturas,  pensados especialmente para los distintos intereses"
        image="/assets/images/feature2.svg"
        imageAlt="Second feature alt text"
        reverse
      />
    </Section>
  </>
);

export { Description };

