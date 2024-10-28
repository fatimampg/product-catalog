import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Card, CardFooter, CardBody } from '@nextui-org/react';

// const WomensCategories = ['Clothing', 'Shoes', 'Bags', 'Watches and Jeweley'];
// const WomanCatPhotos = [WClothes, WShoes, WBags, WAccessories];

// const MensCategories = ['Clothing', 'Shoes', 'Accessories'];

interface CategoryCardProps {
  category: string;
  photo: StaticImageData;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, photo }) => {
  return (
    <div className="flex flex-col">
      <Card
        isHoverable
        isPressable
        shadow="none"
        className="py-1 bg-white w-[14rem]"
      >
        <CardBody className="overflow-visible py-2 ">
          <Image
            src={photo}
            alt={category}
            className="mb-2 w-full h-[10rem] object-cover"
          />
        </CardBody>
        <CardFooter className="pt-0 pb-2 flex justify-center">
          <p className="text-[14px]">{category}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CategoryCard;
