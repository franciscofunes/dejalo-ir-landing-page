import { useEffect } from 'react';

const FacebookMarketplace: React.FC = () => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="fb-page" data-href="https://www.facebook.com/tiendadejaloir/" data-tabs="timeline" data-width="500" data-height="500" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"></div>
  );
};

export { FacebookMarketplace };
