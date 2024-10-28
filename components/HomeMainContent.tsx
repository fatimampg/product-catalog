import { Button } from '@nextui-org/react';

const HomeMainContent = () => {
  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-end mb-24">
      <Button
        size="lg"
        variant="bordered"
        className="bg-foreground text-white rounded-full shadow-lg p-6"
      >
        Explore our products!
      </Button>
    </div>
  );
};

export default HomeMainContent;
