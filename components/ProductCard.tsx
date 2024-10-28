import { Product } from '@/types/types';
import { Card, CardFooter, CardBody, Button, Image } from '@nextui-org/react';
import { CiHeart } from 'react-icons/ci';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card
      shadow="sm"
      radius="none"
      isPressable
      isHoverable
      onPress={() => 'item pressed'}
      className="p-3"
    >
      <CardBody className="overflow-visible p-0 flex flex-col align-middle">
        <Image
          shadow="none"
          radius="none"
          alt={product.title}
          className="object-contain h-[13rem] w-[13rem] bg-white"
          src={product.image}
        />
      </CardBody>
      <CardFooter className="w-[13rem] h-[6rem] flex flex-wrap flex-col text-[0.875rem] justify-end">
        <p className="text-[0.875rem] text-darkGray">
          {product.title.length > 40
            ? `${product.title.slice(0, 40)}...`
            : product.title}
        </p>
        <div className="flex flex-row justify-between items-center w-full mt-1">
          <p className="flex-grow text-center pl-[1rem]">{product.price} €</p>
          <CiHeart size={20} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
