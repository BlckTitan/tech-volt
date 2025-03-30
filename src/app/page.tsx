import Navigation from '@/component/navigation/Navigation';
import Carousel from '@/component/carousel/Carousel';
import Membership from '@/component/membership/Membership';
import ForYou from '@/component/forYou/ForYou';
import Highlights from '@/component/highlights/Highlights';
import Experience from '@/component/experience/Experience';
import Help from '@/component/help/Help';

export default function Home() {
  return (
    <div className='w-full h-screen'>
      <Navigation/>
      <Carousel/>
      <Membership/>
      <ForYou/>
      <Highlights/>
      <Experience/>
      <Help/>
    </div>
  );
}
