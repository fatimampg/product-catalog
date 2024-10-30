'use client';

import Link from 'next/link';
import { GoPerson } from 'react-icons/go';
import { MdFavoriteBorder } from 'react-icons/md';
import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';
import React, { useEffect, useRef, useState } from 'react';

const NavBar = () => {
  const [isOpenW, setIsOpenW] = useState(false);
  const [isOpenM, setIsOpenM] = useState(false);
  const [isOpenF, setIsOpenF] = useState(false);

  const dropdownRefW = useRef<HTMLDivElement | null>(null);
  const buttonRefW = useRef<HTMLButtonElement | null>(null);

  const dropdownRefM = useRef<HTMLDivElement | null>(null);
  const buttonRefM = useRef<HTMLButtonElement | null>(null);

  const dropdownRefF = useRef<HTMLDivElement | null>(null);
  const buttonRefF = useRef<HTMLButtonElement | null>(null);

  const tolerance = 16;
  const handleMouseLeave = (
    e: React.MouseEvent,
    dropdown: 'woman' | 'man' | 'fragances',
  ) => {
    const relatedTarget = e.relatedTarget;

    if (dropdown === 'woman') {
      console.log('relatedTarget', relatedTarget);
      if (
        dropdownRefW.current &&
        buttonRefW.current &&
        relatedTarget instanceof Node &&
        !dropdownRefW.current.contains(relatedTarget) &&
        !buttonRefW.current.contains(relatedTarget)
      ) {
        setIsOpenW(false);
      }
    } else if (dropdown === 'man') {
      if (
        dropdownRefM.current &&
        buttonRefM.current &&
        relatedTarget instanceof Node &&
        !dropdownRefM.current.contains(relatedTarget) &&
        !buttonRefM.current.contains(relatedTarget)
      ) {
        setIsOpenM(false);
      }
    } else if (dropdown === 'fragances') {
      if (
        dropdownRefF.current &&
        buttonRefF.current &&
        relatedTarget instanceof Node &&
        !dropdownRefF.current.contains(relatedTarget) &&
        !buttonRefF.current.contains(relatedTarget)
      ) {
        setIsOpenF(false);
      }
    }
  };

  return (
    <div className="bg-background bg-opacity-70 flex justify-between align-text-middle items-center py-1 px-5 border-b-1 shadow-sm h-[57px] w-full top-0 z-40 fixed">
      <Link href="/">
        <img src="./LOGO.svg" alt="logo" className="w-[3rem] z-50" />
      </Link>
      <div className="flex gap-[0rem] font-bold">
        <Dropdown isOpen={isOpenW} className="">
          <DropdownTrigger>
            <Button
              onMouseEnter={() => setIsOpenW(true)}
              onMouseLeave={(e) => handleMouseLeave(e, 'woman')}
              ref={buttonRefW}
              className={`p-0 bg-transparent data-[hover-true]:bg-transparent text-[0.875rem] font-[600] h-[56px] w-[200px] rounded-none ${isOpenW ? 'bg-background' : ''}`}
            >
              WOMAN
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Static Actions"
            autoFocus
            ref={dropdownRefW}
            onMouseEnter={() => setIsOpenW(true)}
            onMouseLeave={(e) => handleMouseLeave(e, 'woman')}
          >
            <DropdownItem key="all-products" showDivider>
              All products
            </DropdownItem>
            <DropdownItem key="clothing">Clothing</DropdownItem>
            <DropdownItem key="shoes">Shoes</DropdownItem>
            <DropdownItem key="bags">Bags</DropdownItem>
            <DropdownItem key="accessories">Watches and Jewellery</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown isOpen={isOpenM} className="">
          <DropdownTrigger>
            <Button
              onMouseEnter={() => setIsOpenM(true)}
              onMouseLeave={(e) => handleMouseLeave(e, 'man')}
              ref={buttonRefM}
              className={`p-0 bg-transparent data-[hover-true]:bg-transparent text-[0.875rem] font-[600] h-[56px] w-[200px] rounded-none ${isOpenM ? 'bg-background' : ''}`}
            >
              MEN
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Static Actions"
            autoFocus
            ref={dropdownRefM}
            onMouseEnter={() => setIsOpenM(true)}
            onMouseLeave={(e) => handleMouseLeave(e, 'man')}
          >
            <DropdownItem key="all-products" showDivider>
              All products
            </DropdownItem>
            <DropdownItem key="clothing">Clothing</DropdownItem>
            <DropdownItem key="shoes">Shoes</DropdownItem>
            <DropdownItem key="accessories">Accessories</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown isOpen={isOpenF} className="">
          <DropdownTrigger>
            <Button
              onMouseEnter={() => setIsOpenF(true)}
              onMouseLeave={(e) => handleMouseLeave(e, 'fragances')}
              ref={buttonRefF}
              className={`p-0 bg-transparent data-[hover-true]:bg-transparent text-[0.875rem] font-[600] h-[56px] w-[200px] rounded-none ${isOpenF ? 'bg-background' : ''}`}
            >
              FRAGANCES
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Static Actions"
            autoFocus
            ref={dropdownRefF}
            onMouseEnter={() => setIsOpenF(true)}
            onMouseLeave={(e) => handleMouseLeave(e, 'fragances')}
          >
            <DropdownItem key="all-products" showDivider>
              All products
            </DropdownItem>
            <DropdownItem key="fragances-woman">For Her</DropdownItem>
            <DropdownItem key="fragances-woman">For Him</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="flex gap-3 items-center ">
        <MdFavoriteBorder size={25} className="cursor-pointer" />
        <GoPerson size={25} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default NavBar;
