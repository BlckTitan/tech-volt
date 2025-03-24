import Navigation from '@/component/navigation/Navigation';
import Carousel from '@/component/carousel/Carousel';

export default function Home() {
  return (
    <div className='w-full h-screen'>
      <Navigation/>
      <Carousel/>
    </div>
  );
}
