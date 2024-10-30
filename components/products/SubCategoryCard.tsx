import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Card, CardFooter, CardBody } from '@nextui-org/react';
import { useCategory } from '@/app/_providers/CategoryProvider';

interface SubCategoryCardProps {
  subcategory: string;
  photo?: StaticImageData | null;
}

const SubCategoryCard: React.FC<SubCategoryCardProps> = ({
  subcategory,
  photo,
}) => {
  const { selectedSubCategory, selectSubCat } = useCategory();
  return (
    <div className="flex flex-col">
      <Card
        isHoverable
        isPressable
        shadow="none"
        className="py-1 bg-white w-[14rem]"
        onClick={() => selectSubCat(subcategory)}
      >
        <CardBody className="overflow-visible py-2 ">
          {photo ? (
            <Image
              src={photo}
              alt={subcategory}
              className="mb-2 w-full h-[10rem] object-cover"
            />
          ) : (
            <div className=" h-[12.3rem] flex items-center justify-center">
              <p className="text-center text-[16px] ">All products</p>
            </div>
          )}
        </CardBody>
        {photo && (
          <CardFooter className="pt-0 pb-2 flex justify-center">
            <p className="text-[14px]">{subcategory}</p>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default SubCategoryCard;
