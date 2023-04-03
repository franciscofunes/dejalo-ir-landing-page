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
        <li>
          <Link legacyBehavior href="/store">
            <a>Tienda</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/about">
            <a>Nosotros</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/contact">
            <a>Contacto</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
    <WhatsappButton/>
  </Background>  
);

export { Navbar };
