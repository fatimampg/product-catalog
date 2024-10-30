'use client';

import {
  fetchMensProducts,
  fetchWomensProducts,
} from '@/utils/getProductsByCategory';
import { Product } from '@/types/types';
import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';
import { useCategory } from '@/app/_providers/CategoryProvider';

const ProductList = () => {
  const { selectedCategory, selectCat, selectedSubCategory, selectSubCat } =
    useCategory();
  const [renderedList, setRenderedList] = useState<Product[]>([]);
  const [categoryCompleteList, setCategoryCompleteList] = useState<Product[]>(
    [],
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      if (selectedCategory === 'woman') {
        const { womensProducts } = await fetchWomensProducts();
        setCategoryCompleteList(womensProducts);
        setRenderedList(womensProducts);
      } else if (selectedCategory === 'man') {
        const { mensProducts } = await fetchMensProducts();
        setCategoryCompleteList(mensProducts);
        setRenderedList(mensProducts);
      }
      setLoading(false);
    };
    loadData();
  }, [selectedCategory]);

  // useEffect(() => {
  //   if (selectedSubCategory === 'Clothing' && selectedCategory === 'woman') {
  //     const selectedFilter = categoryCompleteList.filter((product) =>
  //       ['womens-dresses', "women's clothing"].includes(product.category),
  //     );
  //     setRenderedList(selectedFilter);
  //   } else if (
  //     selectedSubCategory === 'Shoes' &&
  //     selectedCategory === 'woman'
  //   ) {
  //     const selectedFilter = categoryCompleteList.filter((product) =>
  //       ['womens-shoes'].includes(product.category),
  //     );
  //     setRenderedList(selectedFilter);
  //   } else if (selectedSubCategory === 'Bags' && selectedCategory === 'woman') {
  //     const selectedFilter = categoryCompleteList.filter((product) =>
  //       ['womens-bags'].includes(product.category),
  //     );
  //     setRenderedList(selectedFilter);
  //   } else if (
  //     selectedSubCategory === 'Watches and Jeweley' &&
  //     selectedCategory === 'woman'
  //   ) {
  //     const selectedFilter = categoryCompleteList.filter((product) =>
  //       ['womens-jewelley', 'womens-watches', 'jewelery'].includes(
  //         product.category,
  //       ),
  //     );
  //     setRenderedList(selectedFilter);
  //   } else if (selectedSubCategory === 'All' && selectedCategory === 'woman') {
  //     setRenderedList(categoryCompleteList);
  //   }
  // }, [selectedSubCategory]);

  useEffect(() => {
    const categoryMap = {
      Clothing: ['womens-dresses', "women's clothing"],
      Shoes: ['womens-shoes'],
      Bags: ['womens-bags'],
      'Watches and Jewelery': ['womens-jewelley', 'womens-watches', 'jewelery'],
    };

    if (selectedCategory === 'woman') {
      if (selectedSubCategory === 'All') {
        setRenderedList(categoryCompleteList);
      } else {
        const selectedFilter = categoryCompleteList.filter(
          (product) =>
            categoryMap[selectedSubCategory]?.includes(product.category), //TD check
        );
        setRenderedList(selectedFilter);
      }
    }
  });

  useEffect(() => {
    console.log('subcategory', selectedSubCategory);
  }, [selectedSubCategory]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center m-[4rem] w-full">
        <div className="flex flex-wrap gap-5 justify-center">
          {renderedList.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
