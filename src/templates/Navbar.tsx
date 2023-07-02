import Link from "next/link";
import { Background } from "../background/Background";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { WhatsappButton } from "../whatsappButton/WhatsappButton";
import { Logo } from "./Logo";

const Navbar = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li className="nav-item">
          <Link legacyBehavior href="/store">
            <a className="nav-link">Tienda</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link legacyBehavior href="/about">
            <a className="nav-link">Nosotros</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link legacyBehavior href="/meeting-point">
            <a className="nav-link">Ubicación</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link legacyBehavior href="/contact">
            <a className="nav-link">Contacto</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
    <WhatsappButton/>
    <style jsx>
      {`
        .nav-item {
          @apply mx-2 sm:mx-4;
        }

      `}
    </style>
  </Background>  
);

export { Navbar };
