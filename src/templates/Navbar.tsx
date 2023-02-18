import Link from "next/link";
import { Background } from "../background/Background";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";

const Navbar = () => (
  <Background color="bg-gray-100">
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
          <Link href="/contact">
            <a>Contacto</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  </Background>
);

export { Navbar };
