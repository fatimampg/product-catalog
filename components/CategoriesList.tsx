import WAccessories from '@/images/WAccessories.jpg';
import WClothes from '@/images/WClothes.jpg';
import WBags from '@/images/WBag.jpg';
import WShoes from '@/images/WShoes.jpg';

import CategoryCard from './CategoryCard';

// const WomensCategories = ['Clothing', 'Shoes', 'Bags', 'Watches and Jeweley'];

const WomensCategories = [
  {
    category: 'Clothing',
    photo: WClothes,
  },
  {
    category: 'Shoes',
    photo: WShoes,
  },
  {
    category: 'Bags',
    photo: WBags,
  },
  {
    category: 'Watches and Jeweley',
    photo: WAccessories,
  },
];

const MensCategories = ['Clothing', 'Shoes', 'Accessories'];

const CategoriesList = () => {
  return (
    <div className="flex gap-8 w-full">
      {WomensCategories.map((item, index) => (
        <CategoryCard key={index} category={item.category} photo={item.photo} />
      ))}
    </div>
  );
};

export default CategoriesList;
