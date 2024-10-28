'use client';

import CategoriesList from '@/components/CategoriesList';
import Footer from '@/components/Footer';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { Card, CardFooter, CardBody, Button } from '@nextui-org/react';
import { useRef } from 'react';
import ScrollableCategoriesList from '@/components/ScrollableCategoriesList';

export default function Products() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
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
    <div className="mt-[8rem] mb-[5rem]">
      <ScrollableCategoriesList />
    </div>
    // <div className="flex flex-col items-center justify-center mx-auto mt-[8rem] mb-[5rem] px-[0rem]">
    //   <div className="absolute left-0 top-0 h-full w-[2rem] bg-white bg-opacity-70 " />
    //   <div className="flex items-center absolute left-10 ">
    //     <IoIosArrowBack
    //       onClick={scrollLeft}
    //       size={20}
    //       role="button"
    //       aria-label="scroll left"
    //       className="cursor-pointer z-10"
    //     />
    //   </div>
    //   <Card
    //     radius="none"
    //     className="py-[2rem] relative bg-background "
    //     style={{ width: `calc(100% - 9rem)` }}
    //   >
    //     <div className="flex justify-center px-4">
    //       <div
    //         ref={scrollRef}
    //         className="overflow-x-hidden whitespace-nowrap scroll-smooth scrollbar-hide "
    //       >
    //         <CategoriesList />
    //       </div>
    //     </div>
    //   </Card>

    //   <div className="flex items-center absolute right-10 ">
    //     <IoIosArrowForward
    //       onClick={scrollRight}
    //       size={20}
    //       role="button"
    //       aria-label="scroll right"
    //       className="cursor-pointer z-10"
    //     />
    //   </div>
    // </div>
  );
}
