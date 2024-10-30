'use client';

import image1 from '../../images/Photo1_cesar-la-rosa.jpg';
import image2 from '../../images/Photo3_carly-osborn.jpg';
import image3 from '../../images/Photo2_oksana-taran.jpg';
import image4 from '../../images/tom-sodoge-kAcE7wQ1S68-unsplash.jpg';
import ImageCaroussel from '@/components/home/ImageCaroussel';
import HomeMainContent from '@/components/home/HomeMainContent';
import Footer from '@/components/Footer';

const coverImages = [image1, image2, image3, image4];

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-background">
      <ImageCaroussel images={coverImages} />
      <HomeMainContent />
      <Footer />
    </div>
  );
}
