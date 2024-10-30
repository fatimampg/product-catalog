import {
  WomensSubCategories,
  MensSubCategories,
  FragancesSubCategories,
} from '@/seed/subCategoriesImg';
import SubCategoryCard from './SubCategoryCard';
import { useCategory } from '@/app/_providers/CategoryProvider';

const SubCategoriesList = () => {
  const subCategoriesMap = {
    woman: WomensSubCategories,
    man: MensSubCategories,
    fragances: FragancesSubCategories,
  };

  const { selectedCategory, selectCat } = useCategory();
  const selectedSubCategory = subCategoriesMap[selectedCategory] || [];

  return (
    <div className="flex gap-8 w-full">
      <SubCategoryCard key="all" subcategory="All" photo={null} />
      {selectedSubCategory.map((item, index) => (
        <SubCategoryCard
          key={index}
          subcategory={item.subcategory}
          photo={item.photo}
        />
      ))}
    </div>
  );
};

export default SubCategoriesList;
