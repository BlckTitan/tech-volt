import Navigation from '@/component/navigation/Navigation';
import Carousel from '@/component/carousel/Carousel';
import Membership from '@/component/membership/Membership';
import ForYou from '@/component/forYou/ForYou';
import Highlights from '@/component/highlights/Highlights';
import Experience from '@/component/experience/Experience';
import Help from '@/component/help/Help';
import Footer from '@/component/footer/Footer';
import { BreadcrumbSeparator } from '@/components/ui/breadcrumb';

export default function Home() {

   const subLink = [
          { link: '/', icon: <BreadcrumbSeparator/>, linkName: 'Home' },
    ] 

  return (
    <div className='w-full h-screen'>
      <Navigation subLink={subLink}/>
      <Carousel/>
      <Membership/>
      <ForYou/>
      <Highlights/>
      <Experience/>
      <Help/>
      <Footer/>
    </div>
  );
}
