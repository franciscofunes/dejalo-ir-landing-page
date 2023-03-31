import { GetStaticProps } from 'next';
import { StoreProps } from '../shared/models/props';
import { Store } from '../templates/Store';
import { getProducts } from './api/getProducts';

const StorePage = ({ products }: StoreProps) => <Store products={products} />;

export default StorePage;

export const getStaticProps: GetStaticProps<StoreProps> = async () => {
  const products = await getProducts();

  return {
    props: {
      products,
    },
    revalidate: 60,
  };
};
