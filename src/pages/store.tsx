import { GetStaticProps } from 'next';
import { getProducts } from '../lib/api';
import { StoreProps } from '../shared/models/props';
import { Store } from '../templates/Store';

const StorePage = ({ products }: StoreProps) => <Store products={products} />;

export default StorePage;

export const getStaticProps: GetStaticProps<StoreProps> = async () => {
  const products = await getProducts();

  return {
    props: {
      products,
    },
    revalidate: 1,
  };
};
