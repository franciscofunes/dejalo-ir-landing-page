import { GSheetCmsMarketplace } from "../gsheet-cms-marketplace/GSheetCmsMarketplace";
import { Section } from "../layout/Section";
import { StoreProps } from "../shared/models/props";

const Marketplace = ({products}: StoreProps) => (
  <Section
    title="Facebook Marketplace"
    description="Navega nuestro marketplace y descubrí todas nuestras ofertas"
  >
    <GSheetCmsMarketplace products={products}/>
  </Section>
);

export { Marketplace };


