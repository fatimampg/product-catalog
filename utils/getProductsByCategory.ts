'use server';

import { Product } from '@/types/types';
import { productsFakeStore, productsDummyJSON } from './getProducts';

// const catDummyJSON = [
//   'mens-shirts',
//   'mens-shoes',
//   'mens-watches',
//   'womens-bags',
//   'womens-dresses',
//   'womens-jewelley',
//   'womens-shoes',
//   'womens-watches',
// ];

// const catFakeStore = ['jewelery', "men's clothing", "women's clothing"];

// const WomensCategories = ['Clothing', 'Shoes', 'Bags', 'Watches and Jeweley'];
// const MensCategories = ['Clothing', 'Shoes', 'Accessories'];

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

// export const getShoes = async () => {
//   const shoes: Product[] = [];

//   try {
//     const formattedMensDummyJSON = await productsDummyJSON('mens-shoes');
//     shoes.push(...formattedMensDummyJSON);

//     const formattedWomensDummyJSON = await productsDummyJSON('womens-shoes');
//     shoes.push(...formattedWomensDummyJSON);
//   } catch (error) {
//     console.log("Error - Couldn't fetch data from API");
//   }
//   return shoes;
// };

export const getWomensShoes = async () => {
  const womensShoes: Product[] = [];
  try {
    const formattedWomensDummyJSON = await productsDummyJSON('womens-shoes');
    womensShoes.push(...formattedWomensDummyJSON);
  } catch (error) {
    console.log("Error - Couldn't fetch data from API");
  }
  return womensShoes;
};

export const getMensShoes = async () => {
  const mensShoes: Product[] = [];
  try {
    const formattedWomensDummyJSON = await productsDummyJSON('mens-shoes');
    mensShoes.push(...formattedWomensDummyJSON);
  } catch (error) {
    console.log("Error - Couldn't fetch data from API");
  }
  return mensShoes;
};

// export const getAccessories = async () => {
//   const accessories: Product[] = [];

//   try {
//     const formattedMensDummyJSON = await productsDummyJSON('mens-watches');
//     accessories.push(...formattedMensDummyJSON);

//     const formattedWBDummyJSON = await productsDummyJSON('womens-bags');
//     accessories.push(...formattedWBDummyJSON);

//     const formattedWJDummyJSON = await productsDummyJSON('womens-jewelley');
//     accessories.push(...formattedWJDummyJSON);

//     const formattedWWDummyJSON = await productsDummyJSON('womens-watches');
//     accessories.push(...formattedWWDummyJSON);

//     const formattedFakeStore = await productsFakeStore('jewelery');
//     accessories.push(...formattedFakeStore);
//   } catch (error) {
//     console.log("Error - Couldn't fetch data from API");
//   }
//   return accessories;
// };

export const getWomensAccessories = async () => {
  const womensAccessories: Product[] = [];

  try {
    const formattedWBDummyJSON = await productsDummyJSON('womens-bags');
    womensAccessories.push(...formattedWBDummyJSON);

    const formattedWJDummyJSON = await productsDummyJSON('womens-jewelley');
    womensAccessories.push(...formattedWJDummyJSON);

    const formattedWWDummyJSON = await productsDummyJSON('womens-watches');
    womensAccessories.push(...formattedWWDummyJSON);

    const formattedFakeStore = await productsFakeStore('jewelery');
    womensAccessories.push(...formattedFakeStore);
  } catch (error) {
    console.log("Error - Couldn't fetch data from API");
  }
  return womensAccessories;
};

export const getMensAccessories = async () => {
  const mensAccessories: Product[] = [];

  try {
    const formattedMensDummyJSON = await productsDummyJSON('mens-watches');
    mensAccessories.push(...formattedMensDummyJSON);
  } catch (error) {
    console.log("Error - Couldn't fetch data from API");
  }
  return mensAccessories;
};

// export const fetchProducts = async () => {
//   const womensClothes: Product[] = await getWomensClothes();
//   const mensClothes: Product[] = await getMensClothes();
//   const shoes: Product[] = await getShoes();
//   const accesories: Product[] = await getAccessories();

//   const womensShoes = shoes.filter(
//     (product) => product.category === 'womens-shoes',
//   );
//   const mensShoes = shoes.filter(
//     (product) => product.category === 'mens-shoes',
//   );
//   const womensBags = accesories.filter((product) =>
//     ['womens-bags'].includes(product.category),
//   );
//   const womensAccesories = accesories.filter((product) =>
//     ['womens-jewelley', 'womens-watches', 'jewelery'].includes(
//       product.category,
//     ),
//   );
//   const mensAccesories = accesories.filter(
//     (product) => product.category === 'mens-watches',
//   );

//   const womensProducts = [
//     ...womensClothes,
//     ...womensShoes,
//     ...womensBags,
//     ...womensAccesories,
//   ];
//   const mensProducts = [...mensClothes, ...mensShoes, ...mensAccesories];

//   return { womensProducts, mensProducts };
// };

export const fetchWomensProducts = async () => {
  const womensClothes: Product[] = await getWomensClothes();
  const womensShoes: Product[] = await getWomensShoes();
  const womensAccesories: Product[] = await getWomensAccessories();

  const womensProducts = [
    ...womensClothes,
    ...womensShoes,
    ...womensAccesories,
  ];

  return { womensProducts };
};

export const fetchMensProducts = async () => {
  const mensClothes: Product[] = await getMensClothes();
  const mensShoes: Product[] = await getMensShoes();
  const mensAccesories: Product[] = await getMensAccessories();

  const mensProducts = [...mensClothes, ...mensShoes, ...mensAccesories];

  return { mensProducts };
};
