import Navigation from '@/component/navigation/Navigation';
import Carousel from '@/component/carousel/Carousel';
import Membership from '@/component/membership/Membership';
import ForYou from '@/component/forYou/ForYou';

export default function Home() {
  return (
    <div className='w-full h-screen'>
      <Navigation/>
      <Carousel/>
      <Membership/>
      <ForYou/>
    </div>
  );
}
