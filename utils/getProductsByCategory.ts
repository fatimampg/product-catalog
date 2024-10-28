'use server';

import { Product } from '@/types/types';
import { productsFakeStore, productsDummyJSON } from './getProducts';

const catDummyJSON = [
  'mens-shirts',
  'mens-shoes',
  'mens-watches',
  'womens-bags',
  'womens-dresses',
  'womens-jewelley',
  'womens-shoes',
  'womens-watches',
];

const catFakeStore = ['jewelery', "men's clothing", "women's clothing"];

const WomensCategories = ['Clothing', 'Shoes', 'Bags', 'Watches and Jeweley'];
const MensCategories = ['Clothing', 'Shoes', 'Accessories'];

export const getWomensClothes = async () => {
  const womensClothing: Product[] = [];

  try {
    const formattedDummyJSON = await productsDummyJSON('womens-dresses');
    womensClothing.push(...formattedDummyJSON);

    const formattedFakeStore = await productsFakeStore("women's clothing");
    womensClothing.push(...formattedFakeStore);
  } catch (error) {
    console.log("Error - Couldn't fetch data from API");
  }
  return womensClothing;
};

export const getMensClothes = async () => {
  const mensClothing: Product[] = [];

  try {
    const formattedDummyJSON = await productsDummyJSON('mens-shirts');
    mensClothing.push(...formattedDummyJSON);

    const formattedFakeStore = await productsFakeStore("men's clothing");
    mensClothing.push(...formattedFakeStore);
  } catch (error) {
    console.log("Error - Couldn't fetch data from API");
  }
  return mensClothing;
};

export const getShoes = async () => {
  const shoes: Product[] = [];

  try {
    const formattedMensDummyJSON = await productsDummyJSON('mens-shoes');
    shoes.push(...formattedMensDummyJSON);

    const formattedWomensDummyJSON = await productsDummyJSON('womens-shoes');
    shoes.push(...formattedWomensDummyJSON);
  } catch (error) {
    console.log("Error - Couldn't fetch data from API");
  }
  return shoes;
};

export const getAccessories = async () => {
  const accessories: Product[] = [];

  try {
    const formattedMensDummyJSON = await productsDummyJSON('mens-watches');
    accessories.push(...formattedMensDummyJSON);

    const formattedWBDummyJSON = await productsDummyJSON('womens-bags');
    accessories.push(...formattedWBDummyJSON);

    const formattedWJDummyJSON = await productsDummyJSON('womens-jewelley');
    accessories.push(...formattedWJDummyJSON);

    const formattedWWDummyJSON = await productsDummyJSON('womens-watches');
    accessories.push(...formattedWWDummyJSON);

    const formattedFakeStore = await productsFakeStore('jewelery');
    accessories.push(...formattedFakeStore);
  } catch (error) {
    console.log("Error - Couldn't fetch data from API");
  }
  return accessories;
};

export const fetchProducts = async () => {
  const womensClothes: Product[] = await getWomensClothes();
  const mensClothes: Product[] = await getMensClothes();
  const shoes: Product[] = await getShoes();

  const womensShoes = shoes.filter(
    (product) => product.category === 'womens-shoes',
  );
  const mensShoes = shoes.filter(
    (product) => product.category === 'mens-shoes',
  );
  const accesories: Product[] = await getWomensClothes();
  const womensAccesories = accesories.filter((product) =>
    ['womens-bags', 'womens-jewelley', 'womens-watches', 'jewelery'].includes(
      product.category,
    ),
  );
  const mensAccesories = accesories.filter(
    (product) => product.category === 'mens-watches',
  );

  const womensProducts = [
    ...womensClothes,
    ...womensShoes,
    ...womensAccesories,
  ];
  const mensProducts = [...mensClothes, ...mensShoes, ...mensAccesories];

  return { womensProducts, mensProducts };
};
