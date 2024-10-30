'use client';
import { createContext, useContext, useEffect, useState } from 'react';

type Category = 'woman' | 'man' | 'fragances';

interface CategoryContextType {
  selectedCategory: Category;
  selectedSubCategory: string;
  selectCat: (category: Category) => void;
  selectSubCat: (subCategory: string) => void;
}

const defaultCategoryContext: CategoryContextType = {
  selectedCategory: 'woman',
  selectedSubCategory: 'clothing',
  selectCat: () => {},
  selectSubCat: () => {},
};

const CategoryContext = createContext<CategoryContextType>(
  defaultCategoryContext,
);

export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('woman');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('');

  const selectCat = (category: Category) => {
    setSelectedCategory(category);
  };
  const selectSubCat = (subCategory: string) => {
    setSelectedSubCategory(subCategory);
  };
  useEffect(() => {
    console.log('in context: selecteCatg', selectedCategory);
    console.log('in context: selecteSubCateg', selectedSubCategory);
  }, [selectedCategory, selectedSubCategory]);

  return (
    <CategoryContext.Provider
      value={{ selectedCategory, selectedSubCategory, selectCat, selectSubCat }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);
