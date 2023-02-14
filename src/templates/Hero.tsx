import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
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
          <Link href="https://wa.me/5491131127022?text=Hola!%20estoy%20interesado%20en%20tus%20productos">
            <a target="_blank">Contacto</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'¡Bienvenidos! conoce nuestros productos\n'}
            <span className="text-primary-500">Empeza a comprar</span>
          </>
        }
        description=""
        button={
          <Link href="https://www.facebook.com/marketplace/profile/100009479834691" >
            <a target="_blank">
              <Button xl>Conocer Marketplace</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
