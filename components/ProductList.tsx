'use client';

import { fetchProducts } from '@/utils/getProductsByCategory';
import { Product } from '@/types/types';
import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';

const ProductList = () => {
  const [womensProducts, setWomensProducts] = useState<Product[]>([]);
  const [mensProducts, setMensProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const { womensProducts, mensProducts } = await fetchProducts();
      setWomensProducts(womensProducts);
      setMensProducts(mensProducts);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  //to do: render based on the selection Women or Men
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

export default ProductList;
