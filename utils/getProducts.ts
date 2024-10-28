export const productsFakeStore = async (category: string) => {
  const fakeStoreResponse = await fetch(
    `https://fakestoreapi.com/products/category/${category}`,
  );
  const fakeStoreData = await fakeStoreResponse.json();

  if (!fakeStoreData.ok) {
    throw new Error("Couldn't get products from Fake Store API");
  }
  console.log('fake store data', fakeStoreData);

  const formattedFakeStoreData = fakeStoreData.map((product: any) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    category: category,
    description: product.description,
    image: product.images[0],
  }));

  return formattedFakeStoreData;
};

export const productsDummyJSON = async (category: string) => {
  const dummyJSONResponse = await fetch(
    `https://dummyjson.com/products/category/${category}`,
  );
  const dummyJSONData = await dummyJSONResponse.json();

  if (!dummyJSONData.ok) {
    throw new Error("Couldn't get products from DummyJSON API");
  }
  console.log('dummyJSON data', dummyJSONData);

  const formattedDummyJSONData = dummyJSONData.products.map((product: any) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    category: category,
    description: product.description,
    image: product.images[0],
  }));

  return formattedDummyJSONData;
};
