import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { Navbar } from './Navbar';

const Hero = () => (
  <Background color="bg-gray-100"> 
    <Navbar></Navbar>
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
