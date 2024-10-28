'use server';

import {
  getMensClothes,
  getShoes,
  getWomensClothes,
} from '@/utils/getProductsByCategory';
import { Product } from '@/types/types';
import ProductCard from './ProductCard';

const ProductListServer = async () => {
  const womensClothes: Product[] = await getWomensClothes();
  const mensClothes: Product[] = await getMensClothes();
  const shoes: Product[] = await getShoes();

  const womensShoes = shoes.filter(
    (product) => product.category === 'womens-shoes',
  );
  const mensShoes = shoes.filter(
    (product) => product.category === 'mens-shoes',
  );
  const accesories: Product[] = await getWomensClothes();
  const womensAccesories = accesories.filter((product) =>
    ['womens-bags', 'womens-jewelley', 'womens-watches', 'jewelery'].includes(
      product.category,
    ),
  );
  const mensAccesories = accesories.filter(
    (product) => product.category === 'mens-watches',
  );

  const womensProducts = [
    ...womensClothes,
    ...womensShoes,
    ...womensAccesories,
  ];
  const mensProducts = [...mensClothes, ...mensShoes, ...mensAccesories];

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center m-[4rem] w-full">
        <div className="flex flex-wrap gap-5 justify-center">
          {womensProducts.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListServer;
