'use client';

import ScrollableCategoriesList from '@/components/products/ScrollableCategoriesList';
import ProductList from '@/components/products/ProductList';

export default function Products() {
  return (
    <div className="mt-[8rem] mb-[5rem]">
      <ScrollableCategoriesList />
      <ProductList />
    </div>
  );
}
