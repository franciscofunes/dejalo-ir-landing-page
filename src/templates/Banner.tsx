import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Conoce nuestro Marketplace de facebook"
      subtitle="Todas nuestras publicaciones en oferta"
      button={
        <Link legacyBehavior href="https://www.facebook.com/marketplace/profile/100009479834691">
          <a target="_blank">
            <Button>Entrar</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
