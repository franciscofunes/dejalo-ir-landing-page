import Link from "next/link";
import { VerticalFeatureRow } from "../feature/VerticalFeatureRow";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";

const Description = () => (
  <>
  <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://www.facebook.com/marketplace/profile/100009479834691">
            <a target="_blank">Tienda</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Nosotros</a>
          </Link>
        </li>
        <li>
          <Link href="https://wa.me/5491131127022?text=Hola!%20estoy%20interesado%20en%20tus%20productos">
            <a target="_blank">Contacto</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
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
