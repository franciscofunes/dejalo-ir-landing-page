import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => (
  <div className="footer-copyright">
    © Copyright {new Date().getFullYear()} {AppConfig.title}. Creado con{' '}
    <span role="img" aria-label="Love">
      ♥
    </span>{' '}
    por <a href="https://equaldevlinks.netlify.app/">Equaldev</a>
    <br />
    <a href="/privacy-policy">
      Política de privacidad
    </a>      
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
