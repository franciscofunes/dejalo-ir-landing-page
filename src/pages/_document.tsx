import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element{
    return (
      <Html lang={AppConfig.locale}>
        <Head>
        <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v16.0&appId=1609075139539354&autoLogAppEvents=1" nonce="j5GsqwDS"></script>          
        </Head>
        <body>
          <div id="fb-root"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
