'use client';

import SubCategoriesList from './SubCategoriesList';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { Button, Card } from '@nextui-org/react';
import { useRef } from 'react';
import { useCategory } from '@/app/_providers/CategoryProvider';

const ScrollableCategoriesList = () => {
  const { selectedCategory, selectCat } = useCategory();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    console.log(scrollRef.current);
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  return (
    <div className="flex flex-col items-center justify-center mx-auto mb-[5rem] px-[0rem]">
      <div className="absolute left-0 top-0 h-full w-[2rem] bg-white bg-opacity-70 " />
      <div className="flex items-center absolute left-10 ">
        <IoIosArrowBack
          onClick={scrollLeft}
          size={20}
          role="button"
          aria-label="scroll left"
          className="cursor-pointer z-10"
        />
      </div>
      <Card
        radius="none"
        className=" relative bg-background "
        style={{ width: `calc(100% - 9rem)` }}
      >
        <div className="w-full flex justify-between mb-5 outline outline-1 outline-background shadow-md">
          <Button
            onClick={() => selectCat('woman')}
            className={`outline outline-1 outline-shadeBackground text-[1rem] h-[45px] w-[200px] rounded-none flex-grow ${selectedCategory === 'woman' ? 'bg-shadeBackground' : 'bg-transparent'}`}
          >
            Woman
          </Button>
          <Button
            onClick={() => selectCat('man')}
            className={`outline outline-1 outline-shadeBackground text-[1rem] h-[45px] w-[200px] rounded-none flex-grow ${selectedCategory === 'man' ? 'bg-shadeBackground' : 'bg-transparent'}`}
          >
            Man
          </Button>
          <Button
            onClick={() => selectCat('fragances')}
            className={`outline outline-1 outline-shadeBackground text-[1rem] h-[45px] w-[200px] rounded-none flex-grow ${selectedCategory === 'fragances' ? 'bg-shadeBackground' : 'bg-transparent'}`}
          >
            Fragances
          </Button>
        </div>
        <div className="flex justify-center px-4 mb-5 ">
          <div
            ref={scrollRef}
            className="overflow-x-hidden whitespace-nowrap scroll-smooth scrollbar-hide "
          >
            <SubCategoriesList />
          </div>
        </div>
      </Card>

      <div className="flex items-center absolute right-10 ">
        <IoIosArrowForward
          onClick={scrollRight}
          size={20}
          role="button"
          aria-label="scroll right"
          className="cursor-pointer z-10"
        />
      </div>
    </div>
  );
};

export default ScrollableCategoriesList;
