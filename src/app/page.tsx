import Navigation from '@/component/navigation/Navigation'
import Sidebar from  '@/component/Sidebar'
export default function Home() {
  return (
    <div className='w-full h-screen'>
      <Navigation/>
      
      <section>
        <Sidebar/>
      </section>

    </div>
  );
}
